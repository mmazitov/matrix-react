import { useMatrix } from '../context/MatrixContext';
import { CellProps } from '../types/matrix';

const Cell = ({ cell, rowIndex, colIndex }: CellProps) => {
	const { increaseCell } = useMatrix();

	const handleClick = () => {
		increaseCell(rowIndex, colIndex);
	};

	return <td onClick={handleClick}>{cell.amount}</td>;
};

export default Cell;
