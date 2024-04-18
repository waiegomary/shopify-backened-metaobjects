import { Button, Collapsible, Icon, Text } from "@shopify/polaris";
import { useHandleToggleModal } from "~/utils/hooks";
import { ChevronRightMinor, ChevronDownMinor } from "@shopify/polaris-icons";

const Accordion = ({ children, title }) => {
  const { active: open, handleClose, handleOpen } = useHandleToggleModal();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button
          size="micro"
          onClick={open ? handleClose : handleOpen}
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
          &nbsp;&nbsp;&nbsp; {title}
        </Text>
      </div>
      <Collapsible
        open={open}
        id="basic-collapsible"
        transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
        expandOnPrint
      >
        {children}
      </Collapsible>
    </>
  );
};

export default Accordion;
