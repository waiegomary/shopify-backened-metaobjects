import {
  LegacyCard,
  LegacyStack,
  Button,
  Collapsible,
  Text,
  Icon,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { ChevronRightMinor, ChevronDownMinor } from "@shopify/polaris-icons";
import { get } from "~/utils";
import BlocksMetaobject from "~/components/Tables/BlocksMetaobject";
import DeleteIcon from "~/components/Icons/DeleteIcon";

function SectionForm({
  sectionIndex,
  section,
  formik,
  handleSetPage,
  page,
  pageIndex,
  ...rest
}) {
  const [open, setOpen] = useState(sectionIndex == 0);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);
  const [blocks, setBlocks] = useState(
    get(page, `sections[${sectionIndex}].blocks`, [])
  );

  const handleSetBlocks = useCallback((value) => {
    setBlocks(value);
    const _page = { ...page };
    _page.sections[sectionIndex].blocks = value;
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <LegacyCard sectioned>
        <LegacyStack vertical>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              size="micro"
              onClick={handleToggle}
              ariaExpanded={open}
              ariaControls="basic-collapsible"
            >
              {!open ? (
                <Icon source={ChevronRightMinor} color="base" />
              ) : (
                <Icon source={ChevronDownMinor} color="base" />
              )}
            </Button>

            <Text variant="headingMd" as="h6">
              Section {sectionIndex + 1}
            </Text>

            <Button
              size="micro"
              onClick={() => {
                handleSetPage({
                  ...page,
                  sections: get(page, "sections")?.filter(
                    (it) => it?.id !== section?.id
                  ),
                });
              }}
            >
              <DeleteIcon />
            </Button>
          </div>

          <Collapsible
            open={open}
            id="basic-collapsible"
            transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
            expandOnPrint
          >
            <div>
              <BlocksMetaobject
                key={`page-section-${sectionIndex}-${get(section, "id")}`}
                blocks={blocks || []}
                sectionIndex={sectionIndex}
                pageIndex={pageIndex}
                formik={formik}
                handleSetBlocks={handleSetBlocks}
                {...rest}
              />
            </div>
          </Collapsible>
        </LegacyStack>
      </LegacyCard>
    </div>
  );
}

export default SectionForm;
