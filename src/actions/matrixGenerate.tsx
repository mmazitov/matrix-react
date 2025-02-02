import { Cell, MatrixSetterProps } from '../types/matrix';

export const generateMatrix = ({
	setMatrix,
	M,
	N,
}: {
	setMatrix: MatrixSetterProps;
	M: number;
	N: number;
}) => {
	const initialMatrix: Cell[][] = Array.from({ length: M }, (_, rowIndex) =>
		Array.from({ length: N }, (_, colIndex) => ({
			id: rowIndex * N + colIndex,
			amount: Math.floor(Math.random() * 900) + 100,
			rowIndex,
			colIndex,
		})),
	);
	setMatrix(initialMatrix);
};

export const resetMatrix = (setMatrix: MatrixSetterProps) => {
	setMatrix([]);
};
