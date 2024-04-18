import { Frame, ContextualSaveBar } from "@shopify/polaris";

const SaveAppBar = ({ saveAction, discardAction, loading=false }) => {
  return (
    <div style={{ height: "0px" }}>
      <Frame
        logo={{
          width: 124,
          contextualSaveBarSource:
            "https://res.cloudinary.com/oves/image/upload/v1657359850/logos/oves_logo_words_h50_w3axpd.png",
        }}
      >
        <ContextualSaveBar
          
          message="Unsaved changes"
          saveAction={{
            onAction: saveAction,
            loading: loading,
            disabled: false,
          }}
          discardAction={{
            onAction: discardAction,
          }}
        />
      </Frame>
    </div>
  );
};

export default SaveAppBar;
