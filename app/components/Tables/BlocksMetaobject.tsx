import {
  IndexTable,
  LegacyCard,
  VerticalStack,
  ButtonGroup,
  Button,
  Thumbnail,
} from "@shopify/polaris";
import { get, logger, numberGenerator } from "~/utils";
import { useEffect, useRef } from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import {
  sortableContainer,
  sortableElement,
  arrayMove,
} from "react-sortable-hoc";
import * as _ from "lodash";
import DragHandle from "../Sorting/DragHandle";
import BlockForm from "../Form/SiteMap/PageEditor/BlockForm";

const BlocksMetaobject = ({
  blocks,
  loading: isLoading,
  onEdit,
  fetcher,
  onRemove,
  handleItemChange,
  formik,
  handleSwap,
  sectionIndex,
  pageIndex,
  handleSetBlocks,
  ...rest
}) => {
  const resourceName = {
    singular: "block",
    plural: "blocks",
  };

  const activatorRef = useRef<HTMLDivElement>(null);
  const activatorRefAdd = useRef<HTMLDivElement>(null);

  const remove = (id) => {
    handleSetBlocks(blocks?.filter((b) => b?.id != id));
  };

  const add = (block) => {
    const id = numberGenerator();

    handleSetBlocks([{ ...block, id }, ...blocks]);
  };

  const edit = (block) => {
    const index = _.findIndex(blocks, (_item) => _item?.id == block.id);
    const otherItems = [...blocks];
    otherItems[index] = block;
    logger(index);
    logger(block);
    handleSetBlocks(otherItems);
  };

  const SortableItem = sortableElement((block, index) => (
    <IndexTable.Row
      id={get(block, "id")}
      key={`${index}-${get(block, "id")}-${get(block, "name")}`}
      position={index}
    >
      <IndexTable.Cell className="draggable-item">
        <ButtonGroup segmented>
          <Button size="micro">
            <DragHandle />
          </Button>
          <Button
            size="micro"
            onClick={() => {
              remove(get(block, "id"));
            }}
          >
            <DeleteIcon />
          </Button>

          <BlockForm
            activatorRef={activatorRef}
            activatorTitle={<EditIcon />}
            modalTitle={"Block"}
            pageIndex={pageIndex}
            sectionIndex={sectionIndex}
            block={block}
            blocks={blocks}
            onsubmit={edit}
            formik={formik}
            {...rest}
          />
        </ButtonGroup>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Thumbnail
          source={get(
            block,
            "media",
            "https://placehold.co/600x400/000000/FFFFFF/png"
          )}
          size="small"
          alt="Black choker necklace"
        />
      </IndexTable.Cell>
      <IndexTable.Cell>{get(block, "style")}</IndexTable.Cell>
      <IndexTable.Cell>{get(block, "ctaLabel")}</IndexTable.Cell>
      <IndexTable.Cell>{get(block, "ctaLink")}</IndexTable.Cell>
    </IndexTable.Row>
  ));
  const SortableContainer = sortableContainer(
    ({ children, helperClass = "draggable-item" }) => {
      return (
        <IndexTable
          resourceName={resourceName}
          itemCount={blocks?.length || 0}
          selectable={false}
          headings={[
            { title: "" },
            { title: "media" },
            { title: "style" },
            { title: "ctaLabel" },
            { title: "ctaLink" },
          ]}
        >
          {children}
        </IndexTable>
      );
    }
  );

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const __blocks = arrayMove(blocks, oldIndex, newIndex);
    handleSetBlocks(__blocks);
  };

  return (
    <LegacyCard>
      <VerticalStack>
        <SortableContainer onSortEnd={onSortEnd} useDragHandle>
          {_.map(blocks, (value, index) => (
            <SortableItem
              key={`item-${get(value, "id")}-${numberGenerator()}`}
              index={index}
              {...{ ...value, key: index }}
            />
          ))}
        </SortableContainer>
        <div style={{ padding: 5 }}>
          <BlockForm
            activatorRef={activatorRefAdd}
            activatorTitle={"Add block"}
            modalTitle={"Block"}
            pageIndex={pageIndex}
            sectionIndex={sectionIndex}
            onsubmit={add}
            formik={formik}
            {...rest}
          />
        </div>
      </VerticalStack>
    </LegacyCard>
  );
};

export default BlocksMetaobject;
