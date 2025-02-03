import { useState } from 'react';
import { HeatmapProps } from '../types/matrix';
// Define the Heatmap component
const Heatmap = ({
	row,
	rowSum,
	rowIndex,
	increaseCell,
	onCellHover,
	onCellLeave,
	highlightedCells,
	hoveredCellId,
}: HeatmapProps) => {
	// State variable to track if the row is hovered
	const [isHovered, setIsHovered] = useState(false);
	// Handler for mouse enter event
	const handleMouseEnter = () => {
		// Set isHovered to true
		setIsHovered(true);
	};
	// Handler for mouse leave event
	const handleMouseLeave = () => {
		// Set isHovered to false
		setIsHovered(false);
	};
	// Calculate the maximum cell value in the row
	const maxCellValue = Math.max(...row.map((cell) => cell.amount));
	// Render the heatmap cells
	return (
		<>
			{row.map((cell, colIndex) => {
				// Check if the cell is highlighted, hovered, or the row is hovered
				const isHighlighted = highlightedCells.includes(cell.id);
				const hoveredCell = hoveredCellId === cell.id;
				// Determine the background color based on the cell state
				const backgroundColor = hoveredCell
					? 'lightblue'
					: isHighlighted
						? 'yellow'
						: isHovered
							? `rgba(255, 0, 0, ${cell.amount / maxCellValue})`
							: 'transparent';
				// Render the cell
				return (
					<td
						key={cell.id}
						style={{ backgroundColor }}
						onClick={() => increaseCell(rowIndex, colIndex)}
						onMouseEnter={() => onCellHover(cell)}
						onMouseLeave={onCellLeave}
					>
						{/* Display the cell value or percentage based on hover state */}
						{isHovered
							? `${((cell.amount / rowSum) * 100).toFixed(2)}%`
							: cell.amount}
					</td>
				);
			})}
			{/* Render the cell for the row sum */}
			<td onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				{rowSum}
			</td>
		</>
	);
};
// Export the Heatmap component as default
export default Heatmap;
