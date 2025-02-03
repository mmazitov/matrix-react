import {
	AddRowOperationProps,
	IncreaseCellOperationProps,
	RemoveRowOperationProps,
} from '../types/matrix';

// Function to increase the value of a cell in the matrix.
export const increaseCell = ({
	setMatrix,
	rowIndex,
	colIndex,
}: IncreaseCellOperationProps) => {
	// Update the matrix state by increasing the value of the specified cell.
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

// Function to remove a row from the matrix.
export const removeRow = ({ setMatrix, rowIndex }: RemoveRowOperationProps) => {
	// Update the matrix state by removing the specified row.
	setMatrix((prevMatrix) =>
		prevMatrix.filter((_, index) => index !== rowIndex),
	);
};

// Function to add a new row to the matrix.
export const addRow = ({ setMatrix }: AddRowOperationProps) => {
	// Update the matrix state by adding a new row.
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
