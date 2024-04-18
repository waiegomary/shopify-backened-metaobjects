import { Frame, Loading } from "@shopify/polaris";

function Loader() {
  return (
    <div style={{ height: "1px" }}>
      <Frame>
        <Loading />
      </Frame>
    </div>
  );
}

export default Loader;
