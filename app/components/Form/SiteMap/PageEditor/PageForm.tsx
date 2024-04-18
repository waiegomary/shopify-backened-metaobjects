import { Box, Button, Modal, Select, Text, TextField } from "@shopify/polaris";
import { useCallback,  useMemo, useState } from "react";

import * as _ from "lodash";
import { get, logger, map, numberGenerator, slugify } from "~/utils";
import SectionForm from "./SectionForm";
import { FIELD_REQUIRED } from "~/constants";
import { useToast } from "~/utils/useToast";

interface IError {
  name: string;
  handle: string;
  style: string;
  title: string;
}
const PageForm = ({
  page: _page,
  activatorRef,
  formik,
  pageIndex,
  _collections,
  onSubmit,
  activatorElement,
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState({} as IError);
  const handleSetErrors = useCallback((value) => setErrors(value), []);
  const handleOpen = useCallback(() => setActive(true), []);
  const [page, setPage] = useState(_page);
  const handleSetPage = (value) => setPage(value);
  const { toastMarkup, showToast } = useToast();
  const handleChangeStyle = useCallback(
    (value) => {
      setPage({ ...page, style: value });
    },
    [page]
  );

  const handleClose = useCallback(() => {
    setActive(false);
  }, []);

  const handleSubmit = () => {
    handleSetErrors({} as IError);
    if (!get(page, "handle")) {
      handleSetErrors({ ...errors, handle: FIELD_REQUIRED });
    }
    if (!get(page, "name")) {
      handleSetErrors({ ...errors, name: FIELD_REQUIRED });
    }
    if (!get(page, "title")) {
      handleSetErrors({ ...errors, title: FIELD_REQUIRED });
    }

    if (!get(page, "style")) {
      handleSetErrors({ ...errors, style: FIELD_REQUIRED });
    }

    if (!_.isEmpty(Object.keys(errors))) {
      logger(errors, "errors");
      return;
    }

    if (!page?.handle) {
      return;
    }

    onSubmit({ ...page, id: numberGenerator() }, pageIndex);
    handleClose();
  };
  const collections = useMemo(() => {
    return _collections;
  }, [rest]);

  return (
    <div>
      <div style={{}} id={`${page?.id}-page-button`} ref={activatorRef}>
        <Button size="micro" onClick={handleOpen}>
          {activatorElement}
        </Button>
      </div>
      <Modal
        large
        open={active}
        onClose={handleClose}
        title={get(page, "name", "New Page") || "New Page"}
        primaryAction={{
          content: "Ok",
          onAction: handleSubmit,
          loading: false,
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
            {toastMarkup}
            <TextField
              label="Name"
              value={get(page, "name")}
              error={get(errors, "name")}
              onChange={(e) => {
                handleSetPage({ ...page, name: e });
              }}
              autoComplete="off"
            />
            <TextField
              label="Title"
              value={get(page, "title")}
              error={get(errors, "title")}
              onChange={(e) => {
                handleSetPage({ ...page, title: e });
              }}
              onBlur={(e) => {
                handleSetPage({
                  ...page,
                  handle: slugify(e?.target?.value || ""),
                });
              }}
              autoComplete="off"
            />
            <Select
              label="Style"
              options={[
                { label: "Dark Header", value: "dark_header" },
                { label: "Light Header", value: "light_header" },
              ]}
              onChange={(e) => {
                handleChangeStyle(e);
              }}
              value={get(page, "style", "light_header")}
              error={get(errors, `style`)}
            />
            <TextField
              label="Keywords"
              value={get(page, "keywords")}
              onChange={(e) => {
                handleSetPage({ ...page, keywords: e });
              }}
              autoComplete="off"
            />
            <TextField
              label="Handle"
              value={get(page, "handle")}
              error={get(errors, "handle")}
              onChange={(e) => {
                handleSetPage({ ...page, handle: e });
              }}
              autoComplete="off"
            />
            <TextField
              label="Description"
              value={get(page, "description")}
              onChange={(e) => {
                handleSetPage({ ...page, description: e });
              }}
              multiline={4}
              autoComplete="off"
            />
            <Box padding={2}></Box>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text variant="headingMd" as="h6">
                Sections
              </Text>

              <Button
                onClick={() => {
                  handleSetPage({
                    ...page,
                    sections: [
                      ...page?.sections,
                      {
                        id: numberGenerator(),
                        blocks: [
                          {
                            id: numberGenerator(),
                            style: "hero",
                            title: "",
                            ctaLabel: "",
                            ctaLink: "",
                            collections: [],
                            text: "",
                          },
                        ],
                      },
                    ],
                  });
                  showToast("Section added");
                }}
                size="micro"
              >
                Add section
              </Button>
            </div>

            <div>
              {map(get(page, `sections`), (section, sectionIndex) => (
                <SectionForm
                  key={`page-section-${sectionIndex}-${get(section, "id")}`}
                  section={section}
                  index={sectionIndex}
                  formik={formik}
                  pageIndex={pageIndex}
                  sectionIndex={sectionIndex}
                  handleSetPage={handleSetPage}
                  page={page}
                  collections={collections}
                  {...rest}
                />
              ))}
            </div>
          </Box>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default PageForm;
