import {
	AddRowOperationProps,
	IncreaseCellOperationProps,
	RemoveRowOperationProps,
} from '../types/matrix';

export const increaseCell = ({
	setMatrix,
	rowIndex,
	colIndex,
}: IncreaseCellOperationProps) => {
	setMatrix((prevMatrix) =>
		prevMatrix.map((row, rIdx) =>
			rIdx === rowIndex
				? row.map((cell, cIdx) =>
						cIdx === colIndex ? { ...cell, amount: cell.amount + 1 } : cell,
					)
				: row,
		),
	);
};

export const removeRow = ({ setMatrix, rowIndex }: RemoveRowOperationProps) => {
	setMatrix((prevMatrix) =>
		prevMatrix.filter((_, index) => index !== rowIndex),
	);
};

export const addRow = ({ setMatrix }: AddRowOperationProps) => {
	setMatrix((prevMatrix) => {
		const newRowIndex = prevMatrix.length;
		const newRow = prevMatrix[0].map((_, colIndex) => ({
			id: newRowIndex * prevMatrix[0].length + colIndex,
			amount: Math.floor(Math.random() * 900) + 100,
			rowIndex: newRowIndex,
			colIndex,
		}));
		return [...prevMatrix, newRow];
	});
};
