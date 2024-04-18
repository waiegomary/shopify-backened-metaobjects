import {
    Box,
  Layout,
  LegacyCard,
  SkeletonBodyText,
  SkeletonDisplayText,
  TextContainer,
} from "@shopify/polaris";

const FormLoader = () => {
  return (
    <Box padding="10">
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <SkeletonBodyText />
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Box>
  );
};

export default FormLoader;
