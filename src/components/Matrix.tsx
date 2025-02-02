import { useState } from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { useMatrix } from '../context/MatrixContext';
import { Cell } from '../types/matrix';
import Heatmap from './Heatmap';
import MatrixForm from './MatrixForm';
import RowFooter from './RowFooter';
import RowHeader from './RowHeader';
const Matrix = () => {
	const { matrix, increaseCell, removeRow, calculateRowSum, getNearestCells } =
		useMatrix();
	const [highlightedCells, setHighlightedCells] = useState<number[]>([]);
	const [hoveredCellId, setHoveredCellId] = useState<number | null>(null);
	const nearestCount = 3;

	const handleCellHover = (cell: Cell) => {
		setHoveredCellId(cell.id);
		const nearestCells = getNearestCells(cell.amount, nearestCount);
		const nearestIds = nearestCells.map((cell) => cell.id);
		setHighlightedCells(nearestIds);
	};

	const handleCellLeave = () => {
		setHighlightedCells([]);
		setHoveredCellId(null);
	};
	return (
		<div>
			<h2>Matrix table</h2>
			<MatrixForm />
			<table className="table-matrix">
				<RowHeader />
				<tbody className="table-body">
					{matrix.map((row, rowIndex) => (
						<tr key={rowIndex}>
							<td>Cell Value M = {rowIndex + 1}</td>
							<Heatmap
								row={row}
								rowSum={calculateRowSum(row)}
								rowIndex={rowIndex}
								increaseCell={increaseCell}
								onCellHover={handleCellHover}
								onCellLeave={handleCellLeave}
								highlightedCells={highlightedCells}
								hoveredCellId={hoveredCellId}
							/>
							<td>
								<button
									onClick={() => removeRow(rowIndex)}
									disabled={matrix.length === 1}
								>
									<IoTrashBin />
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<RowFooter />
			</table>
		</div>
	);
};

export default Matrix;
