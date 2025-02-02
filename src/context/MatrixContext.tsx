import { createContext, ReactNode, useContext, useState } from 'react';
import {
	calculatePercentile,
	calculateRowSum,
	getNearestCells,
} from '../actions/matrixInfo';
import { addRow, increaseCell, removeRow } from '../actions/matrixUpdate';
import { generateMatrix, resetMatrix } from '../actions/matrixGenerate';
import { Cell, MatrixContextProps } from '../types/matrix';

const MatrixContext = createContext<MatrixContextProps | undefined>(undefined);

export const MatrixProvider = ({ children }: { children: ReactNode }) => {
	const [matrix, setMatrix] = useState<Cell[][]>([]);

	return (
		<MatrixContext.Provider
			value={{
				matrix,
				increaseCell: (rowIndex, colIndex) =>
					increaseCell({ setMatrix, rowIndex, colIndex }),
				removeRow: (rowIndex) => removeRow({ setMatrix, rowIndex }),
				addRow: () => addRow({ setMatrix, matrix }),
				getNearestCells: (cellAmount, x) =>
					getNearestCells({ matrix, cellAmount, x }),
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

export const useMatrix = () => {
	const context = useContext(MatrixContext);
	if (!context) {
		throw new Error('useMatrix must be used within a MatrixProvider');
	}
	return context;
};
