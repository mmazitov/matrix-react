import { useMatrix } from '../context/MatrixContext';
import { CellProps } from '../types/matrix';
// Define the Cell component
const Cell = ({ cell, rowIndex, colIndex }: CellProps) => {
	const { increaseCell } = useMatrix();
	// Define the handleClick function
	const handleClick = () => {
		// Call the increaseCell function with the row and column indices
		increaseCell(rowIndex, colIndex);
	};

	// Return a table cell element with the cell amount and an onClick handler
	return <td onClick={handleClick}>{cell.amount}</td>;
};
// Export the Cell component as default
export default Cell;
