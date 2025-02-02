import { useState } from 'react';
import { HeatmapProps } from '../types/matrix';

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
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const maxCellValue = Math.max(...row.map((cell) => cell.amount));

	return (
		<>
			{row.map((cell, colIndex) => {
				const isHighlighted = highlightedCells.includes(cell.id);
				const hoveredCell = hoveredCellId === cell.id;
				const backgroundColor = hoveredCell
					? 'lightblue'
					: isHighlighted
						? 'yellow'
						: isHovered
							? `rgba(255, 0, 0, ${cell.amount / maxCellValue})`
							: 'transparent';
				return (
					<td
						key={cell.id}
						style={{ backgroundColor }}
						onClick={() => increaseCell(rowIndex, colIndex)}
						onMouseEnter={() => onCellHover(cell)}
						onMouseLeave={onCellLeave}
					>
						{isHovered
							? `${((cell.amount / rowSum) * 100).toFixed(2)}%`
							: cell.amount}
					</td>
				);
			})}
			<td onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				{rowSum}
			</td>
		</>
	);
};

export default Heatmap;
