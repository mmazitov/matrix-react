import { createContext, ReactNode, useContext, useState } from 'react';
import { generateMatrix, resetMatrix } from '../actions/matrixGenerate';
import {
	calculatePercentile,
	calculateRowSum,
	getNearestCells,
} from '../actions/matrixInfo';
import { addRow, increaseCell, removeRow } from '../actions/matrixUpdate';
import { Cell, MatrixContextProps } from '../types/matrix';

// Create a context for managing the matrix state.
const MatrixContext = createContext<MatrixContextProps | undefined>(undefined);

// Define the MatrixProvider component.
export const MatrixProvider = ({ children }: { children: ReactNode }) => {
	// Initialize the matrix state.
	const [matrix, setMatrix] = useState<Cell[][]>([]);

	// Provide the matrix state and related functions to the children components.
	return (
		<MatrixContext.Provider
			value={{
				matrix,
				increaseCell: (rowIndex, colIndex) =>
					increaseCell({ setMatrix, rowIndex, colIndex }),
				removeRow: (rowIndex) => removeRow({ setMatrix, rowIndex }),
				addRow: () => addRow({ setMatrix, matrix }),
				getNearestCells: (cellAmount) =>
					getNearestCells({ matrix, cellAmount }),
				calculateRowSum: (row) => calculateRowSum({ row }),
				calculatePercentile: (columnIndex) =>
					calculatePercentile({ matrix, columnIndex }),
				generateMatrix: (M, N) => generateMatrix({ setMatrix, M, N }),
				resetMatrix: () => resetMatrix(setMatrix),
			}}
		>
			{children}
		</MatrixContext.Provider>
	);
};

// Custom hook to access the Matrix context.
export const useMatrix = () => {
	// Get the Matrix context.
	const context = useContext(MatrixContext);
	// Throw an error if the context is not available.
	if (!context) {
		throw new Error('useMatrix must be used within a MatrixProvider');
	}
	// Return the Matrix context.
	return context;
};
