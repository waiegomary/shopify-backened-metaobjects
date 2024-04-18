import { Box, Button, Modal, Select, TextField } from "@shopify/polaris";
import { Suspense, lazy, useCallback, useMemo, useState } from "react";
import { get, logger, toHTML } from "~/utils";
import * as _ from "lodash";
import TagSearchField from "../../Fields/TagSearchField";
import { Await } from "@remix-run/react";
const MDEditor = lazy(() => import("@uiw/react-md-editor"));

const BlockForm = ({
  pageIndex,
  sectionIndex,
  block,
  collections,
  activatorRef,
  modalTitle,
  activatorTitle,
  onsubmit,
  blocks,
  formik,
}) => {
  const errors = {};
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  const handleClose = useCallback(() => {
    setActive(false);
  }, []);
  const handleOpen = useCallback(() => setActive(true), []);
  const section = `pages[${pageIndex}].sections[${sectionIndex}]`;

  const blockIndex = _.findIndex(blocks, {
    id: block?.id,
  });
  const fieldName = `${section}.blocks[${blockIndex}]`;

  const [style, setStyle] = useState(get(block, `style`, "hero"));
  const handleChangeStyle = useCallback((value) => setStyle(value), []);

  const [title, setTitle] = useState(get(block, `title`));
  const handleChangeTitle = useCallback((value) => setTitle(value), []);

  const [media, setMedia] = useState(get(block, `media`));
  const handleChangeMedia = useCallback((value) => setMedia(value), []);

  const [ctaLabel, setctaLabel] = useState(get(block, `ctaLabel`));
  const handleChangectaLabel = useCallback((value) => setctaLabel(value), []);

  const [ctaLink, setctaLink] = useState(get(block, `ctaLink`));
  const handleChangectaLink = useCallback((value) => setctaLink(value), []);

  const [text, setText] = useState(get(block, `text`));
  const handleChangeText = useCallback((value) => setText(value), []);

  const [collection, setCollection] = useState(get(block, `collections`, []));
  const handleChangeCollection = useCallback((value) => {
    setCollection(value);
  }, []);

  const handleSubmit = () => {
    const data = {
      style,
      title,
      media,
      ctaLabel,
      ctaLink,
      text,
      collections: collection,
      id: get(block, `id`),
    };
    onsubmit(data);
    handleClose();
  };
  const activator = (
    <Button size="micro" onClick={handleChange}>
      {activatorTitle}
    </Button>
  );

  return (
    <>
      <div style={{ height: 0, display: "none" }} ref={activatorRef}>
        <Button onClick={handleOpen}>~</Button>
      </div>
      <Modal
        activator={activator}
        large
        open={active}
        onClose={handleClose}
        title={modalTitle}
        primaryAction={{
          content: "Ok",
          onAction: handleSubmit,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleClose,
          },
        ]}
      >
        <Modal.Section>
          <Box>
            <Select
              label="Style"
              options={[
                { label: "Hero", value: "hero" },
                { label: "Text Image", value: "text_image" },
                { label: "Image Text", value: "image_text" },
                { label: "Page Banner", value: "page_banner" },
                { label: "Articles", value: "articles" },
                { label: "Products", value: "products" },
                { label: "FAQs", value: "q&a" },
                { label: "Features", value: "features" },
                { label: "Teams", value: "teams" },
              ]}
              onChange={(e) => {
                handleChangeStyle(e);
              }}
              value={style}
              error={get(errors, `${fieldName}.style`)}
            />
            <TextField
              label={"Title"}
              value={title}
              name={`${fieldName}.title`}
              onChange={(e) => {
                handleChangeTitle(e);
              }}
              autoComplete="off"
              error={get(errors, `${fieldName}.title`)}
            />
            <Box padding="2"></Box>
            <TextField
              label={"Media"}
              value={media}
              name={`${fieldName}.media`}
              onChange={(e) => {
                handleChangeMedia(e);
              }}
              autoComplete="off"
              error={get(errors, `${fieldName}.media`)}
            />
            <Box padding="2"></Box>
            <TextField
              label={"ctaLabel"}
              value={ctaLabel}
              name={`${fieldName}.ctaLabel`}
              onChange={(e) => {
                handleChangectaLabel(e);
              }}
              autoComplete="off"
              error={get(errors, `${fieldName}.ctaLabel`)}
            />
            <Box padding="2"></Box>
            <TextField
              label={"ctaLink"}
              value={ctaLink}
              name={`${fieldName}.ctaLink`}
              onChange={(e) => {
                handleChangectaLink(e);
              }}
              autoComplete="off"
              error={get(errors, `${fieldName}.ctaLink`)}
            />
            <Box padding="2"></Box>
            <Suspense>
              <Await resolve={text}>
                {(value) => (
                  <>
                    <label>{"Text"}</label>
                    <Box padding="1"></Box>
                    <div data-color-mode="light">
                      <MDEditor
                        value={
                          value?.includes("children") ? toHTML(value) : value
                        }
                        name={`${fieldName}.text`}
                        onChange={(e) => {
                          handleChangeText(e);
                        }}
                      />
                      <Box padding="2"></Box>
                    </div>
                  </>
                )}
              </Await>
            </Suspense>
            <Box padding="2"></Box>
            <TagSearchField
              label={"Collections"}
              options={_.map(
                _.get(formik, "values.product_collections", []),
                (it) => ({
                  value: _.get(it, "id"),
                  label: _.get(it, "name"),
                  id: _.get(it, "id"),
                  name: _.get(it, "name"),
                })
              )}
              selectedOptions={collection}
              handleChangeCollection={handleChangeCollection}
            />
          </Box>
        </Modal.Section>
      </Modal>
    </>
  );
};

export default BlockForm;
