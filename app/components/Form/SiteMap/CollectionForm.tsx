import { useCallback, useEffect, useState } from "react";
import { useHandleToggleModal } from "~/utils/hooks";
import * as _ from "lodash";
import { Box, Button, Modal } from "@shopify/polaris";
import SelectField from "../Fields/SelectField";
import { get } from "~/utils";

const CollectionForm = ({ fetcher, activatorTitle, formik }) => {
  const [faq, setFaq] = useState();
  const handleSetFaq = useCallback((value) => setFaq(value), []);
  const { active, handleClose, handleOpen } = useHandleToggleModal();
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [error, setError] = useState();

  const handleSelectedOption = useCallback(
    (value) => {
      const _faq = options?.filter((it) => {
        return get(it, "value") == get(value, "[0]");
      });

      if (_faq) {
        handleSetFaq({
          name: get(_faq, "[0].label"),
          id: get(value, "[0]"),
          type: "collection",
        });
      }

      setSelectedOptions(value);
    },
    [options]
  );

  useEffect(() => {
    setLoading(fetcher.state === "loading");
  }, [fetcher.state]);

  useEffect(() => {
    if (fetcher.data) {
      const res = _.map(
        _.get(fetcher.data, "data.collections.edges"),
        (item) => {
          return {
            value: _.get(item, "node.id"),
            label: _.get(item, "node.title"),
          };
        }
      );
      setOptions(res || []);
    }
  }, [fetcher.data, loading]);

  const onSearch = async (data) => {
    await fetcher.load(
      `/app/search-collections?query=${_.get(data, "query")}&after=${_.get(
        data,
        "after"
      )}&before=${_.get(data, "before")}`
    );
  };

  const onSubmit = () => {
    if (faq) {
      formik.setFieldValue("product_collections", [
        faq,
        ...get(formik, "values.product_collections", []),
      ]);
    }
    handleClose();
  };
  const activator = (
    <Button size="micro" onClick={handleOpen}>
      {activatorTitle}
    </Button>
  );

  return (
    <Modal
      activator={activator}
      open={active}
      onClose={handleClose}
      title="Collection"
      primaryAction={{
        content: "Ok",
        onAction: onSubmit,
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
          <Box padding="2"></Box>
          <SelectField
            onSearch={onSearch}
            options={options}
            loading={loading}
            label={"Select Item (Type First Letters to Search)"}
            selectedOptions={selectedOptions}
            setSelectedOptions={handleSelectedOption}
            error={error}
            placeholder={"search.."}
          />
          <Box padding="2"></Box>
        </Box>
      </Modal.Section>
    </Modal>
  );
};

export default CollectionForm;
