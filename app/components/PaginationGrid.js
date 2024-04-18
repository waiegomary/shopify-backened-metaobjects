
import './PaginationGrid.css'; // Import the CSS file

function PaginationGrid({children}) {
  return (
    <div className="grid-container">
      <div className="pagination-wrapper">
       {children}
      </div>
    </div>
  );
}

export default PaginationGrid;
