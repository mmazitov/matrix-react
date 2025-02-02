import {
	CalculatePercentileProps,
	CalculateRowSumProps,
	NearestCellsProps,
} from '../types/matrix';

export const getNearestCells = ({
	matrix,
	cellAmount,
	x,
}: NearestCellsProps) => {
	const allCells = matrix.flat();
	return allCells
		.sort(
			(a, b) =>
				Math.abs(a.amount - cellAmount) - Math.abs(b.amount - cellAmount),
		)
		.slice(0, x);
};

export const calculateRowSum = ({ row }: CalculateRowSumProps) =>
	row.reduce((sum, cell) => sum + cell.amount, 0);

export const calculatePercentile = ({
	matrix,
	columnIndex,
}: CalculatePercentileProps) => {
	const columnValues = matrix.map((row) => row[columnIndex].amount);
	const sum = columnValues.reduce((acc, value) => acc + value, 0);
	return parseFloat((sum / 2).toFixed(1));
};
