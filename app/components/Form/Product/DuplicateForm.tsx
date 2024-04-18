import {
  Box,
  Button,
  InlineError,
  Modal,
  Text,
  TextField,
} from "@shopify/polaris";
import { useCallback, useEffect, useState } from "react";
import { FIELD_REQUIRED } from "~/constants";

import * as _ from "lodash";
import { useActionData, useLocation, useSubmit } from "@remix-run/react";

const DuplicateForm = ({ modalTitle, product, activatorRef }) => {
  const actionErrors = useActionData()?.errors || {};
  const location = useLocation();
  const [title, setTitle] = useState(`Copy of - ${_.get(product, "title")}`);
  const [errors, setErrors] = useState({} as { title: string });
  const [laoding, setLoading] = useState(false);

  const handleLoadingChange = useCallback((value) => setLoading(value), []);
  const handleValueChange = useCallback((value) => setTitle(value), []);
  const handleSetErrors = useCallback((value) => setErrors(value), []);
  
  const [active, setActive] = useState(false);
  const submit = useSubmit();

  const handleOpen = useCallback(() => setActive(true), []);

  const handleClose = useCallback(() => {
    setActive(false);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [active]);

  useEffect(() => {
    handleClose();
  }, [location]);

  const handleSubmit = async () => {
    handleSetErrors({});
    handleLoadingChange(true);
    if (!title) {
      return handleSetErrors({ title: FIELD_REQUIRED });
    }
    const data = {
      title,
      productId: _.get(product, "id"),
    };
    await submit(data, { method: "post", action: "/app/product/duplicate" });
  };

  return (
    <div>
      <div style={{ height: 0, display: "none" }} ref={activatorRef}>
        <Button onClick={handleOpen}>~</Button>
      </div>
      <Modal
        small
        open={active}
        onClose={handleClose}
        title={modalTitle}
        primaryAction={{
          content: "Ok",
          onAction: handleSubmit,
          loading: laoding,
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
            {Object.keys(actionErrors).length ? (
              <InlineError
                message={JSON.stringify(actionErrors)}
                fieldID="errors"
              />
            ) : null}
            <TextField
              label="Title"
              value={title}
              onChange={handleValueChange}
              autoComplete="off"
              error={errors.title}
            />
            <Box padding="2"></Box>

            <Text variant="bodyLg" as="p">
              All product details will be copied from the original product.
            </Text>
          </Box>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default DuplicateForm;
