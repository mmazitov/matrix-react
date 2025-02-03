// /home/mykola/Desktop/edu/js/react/matrix/src/actions/matrixGenerate.tsx
import { Cell, MatrixProps, MatrixSetterProps } from '../types/matrix';

// Function to generate a new matrix.
export const generateMatrix = ({ setMatrix, M, N }: MatrixProps) => {
	// Create a new matrix with random values.
	const initialMatrix: Cell[][] = Array.from({ length: M }, (_, rowIndex) =>
		Array.from({ length: N }, (_, colIndex) => ({
			id: rowIndex * N + colIndex,
			amount: Math.floor(Math.random() * 900) + 100,
			rowIndex,
			colIndex,
		})),
	);
	// Update the matrix state.
	setMatrix(initialMatrix);
};

// Function to reset the matrix to an empty state.
export const resetMatrix = (setMatrix: MatrixSetterProps) => {
	// Update the matrix state to an empty array.
	setMatrix([]);
};
