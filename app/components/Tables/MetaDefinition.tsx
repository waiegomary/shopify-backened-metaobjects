import { Link } from "@remix-run/react";
import {
  IndexTable,
  LegacyCard,
  useIndexResourceState,
  Text,
  Badge,
} from "@shopify/polaris";
import { IMetaObjectDefinition, IMetaobjectResponse } from "~/types";
import { numberFormat } from "~/utils";

const MetaDefinition = ({ edges, pageInfo }: IMetaObjectDefinition) => {
  const orders = [
    {
      id: "1020",
      order: "#1020",
      date: "Jul 20 at 4:34pm",
      customer: "Jaydon Stanton",
      total: "$969.44",
      paymentStatus: <Badge progress="complete">Paid</Badge>,
      fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    },
    {
      id: "1019",
      order: "#1019",
      date: "Jul 20 at 3:46pm",
      customer: "Ruben Westerfelt",
      total: "$701.19",
      paymentStatus: <Badge progress="partiallyComplete">Partially paid</Badge>,
      fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    },
    {
      id: "1018",
      order: "#1018",
      date: "Jul 20 at 3.44pm",
      customer: "Leo Carder",
      total: "$798.24",
      paymentStatus: <Badge progress="complete">Paid</Badge>,
      fulfillmentStatus: <Badge progress="incomplete">Unfulfilled</Badge>,
    },
  ];
  const resourceName = {
    singular: "order",
    plural: "orders",
  };

  // const { selectedResources, allResourcesSelected, handleSelectionChange } =
  //   useIndexResourceState(edges);

  const rowMarkup = edges.map(
    ({ node: { id, name, type, metaobjectsCount } }, index) => {
      return (
        <IndexTable.Row
          onNavigation={() => {}}
          id={id}
          key={id}
          position={index}
        >
          <IndexTable.Cell>
            <Link to={`/app/metaobject/${type}`}>{name}</Link>
          </IndexTable.Cell>
          <IndexTable.Cell>{type}</IndexTable.Cell>
          <IndexTable.Cell>{`${numberFormat(
            metaobjectsCount
          )} `}</IndexTable.Cell>
        </IndexTable.Row>
      );
    }
  );

  return (
    <LegacyCard>
      <IndexTable
        resourceName={resourceName}
        itemCount={orders.length}
        selectable={false}
        // selectedItemsCount={
        //   allResourcesSelected ? 'All' : selectedResources.length
        // }
        // onSelectionChange={handleSelectionChange}
        headings={[
          { title: "Name" },
          { title: "Definition Type" },
          { title: "Entries" },
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </LegacyCard>
  );
};

export default MetaDefinition;
