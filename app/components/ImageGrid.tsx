import {
  Box,
  Button,
  Card,
  EmptyState,
  HorizontalGrid,
} from "@shopify/polaris";
import * as _ from "lodash";
import DeleteIcon from "./Icons/DeleteIcon";
import { ReactSortable } from "react-sortablejs";
// https://github.com/SortableJS/react-sortablejs/tree/master
// https://bundlephobia.com/package/@shopify/draggable@1.0.0-beta.8
const ImageGrid = ({ images, onRemove, setImages }) => {

  return (
    <Box>
      <HorizontalGrid gap="4" columns={1}>
        <ReactSortable
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "10px",
          }}
          list={images}
          setList={setImages}
        >
          {_.map(images, (image, index) => {
            return (
              <Card padding={"0"} key={image + index}>
                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    cursor: "grab",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: 10,
                      top: 10,
                    }}
                  >
                    <Button
                      size="micro"
                      onClick={() => {
                        onRemove(image);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </div>
                  <img
                    alt=""
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src={image}
                  />
                </div>
              </Card>
            );
          })}
        </ReactSortable>
      </HorizontalGrid>
      <HorizontalGrid columns={1}>
        {images?.length === 0 ? (
          <EmptyState
            heading="No image found"
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          ></EmptyState>
        ) : null}
      </HorizontalGrid>
    </Box>
  );
};

export default ImageGrid;
