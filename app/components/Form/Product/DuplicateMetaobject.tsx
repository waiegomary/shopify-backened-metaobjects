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

const DuplicateMetaobject = ({ modalTitle, metaobject, activatorRef }) => {
  const actionErrors = useActionData()?.errors || {};
  const action = useActionData() || {};
  const location = useLocation();
  const [name, setName] = useState(`Copy of - ${_.get(metaobject, "name")}`);
  const [errors, setErrors] = useState({} as { name: string });
  const [laoding, setLoading] = useState(false);
  const handleLoadingChange = useCallback((value) => setLoading(value), []);
  const handleValueChange = useCallback((value) => setName(value), []);
  const handleSetErrors = useCallback((value) => setErrors(value), []);
  const [active, setActive] = useState(false);
  const submit = useSubmit();
  const handleOpen = useCallback(() => {
    setActive(true);
    setLoading(false);
  }, []);

  const handleClose = useCallback(() => {
    setActive(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [action?.data]);

  useEffect(() => {
    handleClose();
    setLoading(false);
  }, [location]);

  const handleSubmit = async () => {
    handleSetErrors({});
    handleLoadingChange(true);
    if (!name) {
      return handleSetErrors({ title: FIELD_REQUIRED });
    }
    const data = {
      name,
      metaobject,
      description: _.get(metaobject, "description"),
      content: _.get(metaobject, "content"),
      ownerId: _.get(metaobject, "id"),
      properties: _.get(metaobject, "properties"),
      strapi_id: _.get(metaobject, "strapi_id"),
      handle: _.get(metaobject, "handle"),
      additionalmedia: _.get(metaobject, "additionalmedia"),
      mainmedia: _.get(metaobject, "mainmedia[0]", ""),
      prop_use: _.get(metaobject, "prop_use"),
    };
    await submit(data, { method: "post", action: "/app/item/duplicate" });
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
              label="Name"
              value={name}
              onChange={handleValueChange}
              autoComplete="off"
              error={errors.name}
            />
            <Box padding="2"></Box>

            <Text variant="bodyLg" as="p">
              All item details will be copied from the original item.
            </Text>
          </Box>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default DuplicateMetaobject;
