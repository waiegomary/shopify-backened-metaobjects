import { Box, Button, Modal, TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";
import * as _ from "lodash";
import { FIELD_REQUIRED } from "~/constants";

const ImageForm = ({ onAdd, activatorTitle }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState({} as { value: string });

  const handleValueChange = useCallback((value) => setValue(value), []);
  const handleSetErrors = useCallback((value) => setErrors(value), []);

  const handleChange = useCallback(() => setActive(!active), [active]);
  const onSubmit = () => {
    handleSetErrors({});
    if (!value) {
      return handleSetErrors({ value: FIELD_REQUIRED });
    }
    onAdd(value);
    handleValueChange("");
    setActive(false)
  };
  const activator = (
    <Button size="micro" onClick={handleChange}>
      {activatorTitle}
    </Button>
  );

  return (
    <div>
      <Modal
        activator={activator}
        open={active}
        onClose={handleChange}
        title="Item"
        primaryAction={{
          content: "Ok",
          onAction: onSubmit,
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <Box>
            <TextField
              label="Media URL"
              value={value}
              onChange={handleValueChange}
              autoComplete="off"
              error={errors.value}
            />
            <Box padding="2"></Box>
          </Box>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default ImageForm;
