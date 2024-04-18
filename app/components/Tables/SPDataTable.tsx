import { Page, LegacyCard, DataTable } from "@shopify/polaris";

const SPDataTable = () => {
  const rows = [
    ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
    ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
    [
      "Navy Merino Wool Blazer with khaki chinos and yellow belt",
      "$445.00",
      124518,
      32,
      "$14,240.00",
    ],
  ];

  return (
    <Page title="">
      <LegacyCard>
        <DataTable
          firstColumnMinWidth="30px"
        //   increasedTableDensity
          fixedFirstColumns={1}
          columnContentTypes={["text", "text", "text", "text", "text"]}
          headings={[
            "Display name",
            "Definition",
            "Storefront access",
            "Status",
            "Last updated",
          ]}
          rows={rows}
        />
      </LegacyCard>
    </Page>
  );
};

export default SPDataTable;
