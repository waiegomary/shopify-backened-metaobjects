import { SortableHandle } from "react-sortable-hoc";
import DragIcon from "../Icons/DragIcon";

const DragHandle = SortableHandle(() => <DragIcon />);

export default DragHandle