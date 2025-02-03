/*
	Main component that renders the matrix interface.
  Combines controls, heatmap visualization, and row labels.
*/
import { useState } from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { useMatrix } from '../context/MatrixContext';
import { Cell } from '../types/matrix';
import Heatmap from './Heatmap';
import MatrixForm from './MatrixForm';
import RowFooter from './RowFooter';
import RowHeader from './RowHeader';
// Define the Matrix component
const Matrix = () => {
	// Get matrix data, functions from context
	const { matrix, increaseCell, removeRow, calculateRowSum, getNearestCells } =
		useMatrix();
	// State for highlighted cells and hovered cell ID
	const [highlightedCells, setHighlightedCells] = useState<number[]>([]);
	const [hoveredCellId, setHoveredCellId] = useState<number | null>(null);
	// Constant for the number of nearest cells to highlight
	const nearestCount = 3;

	// Handler for cell hover event
	const handleCellHover = (cell: Cell) => {
		// Update hovered cell ID and highlight nearest cells
		setHoveredCellId(cell.id);
		const nearestCells = getNearestCells(cell.amount, nearestCount);
		const nearestIds = nearestCells.map((cell) => cell.id);
		setHighlightedCells(nearestIds);
	};

	// Handler for cell leave event
	const handleCellLeave = () => {
		// Reset highlighted cells and hovered cell ID
		setHighlightedCells([]);
		setHoveredCellId(null);
	};
	// Render the matrix
	return (
		<div>
			<h2>Matrix table</h2>
			{/* Render the form for matrix controls */}
			<MatrixForm />
			{/* Render the matrix table */}
			<table className="table-matrix">
				{/* Render the header row */}
				<RowHeader />
				{/* Render the matrix body */}
				<tbody className="table-body">
					{matrix.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{/* Render the row header cell */}
							<td>Cell Value M = {rowIndex + 1}</td>
							{/* Render the heatmap for the row */}
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
							{/* Render the actions cell */}
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
				{/* Render the footer row */}
				<RowFooter />
			</table>
		</div>
	);
};

// Export the Matrix component as default
export default Matrix;
