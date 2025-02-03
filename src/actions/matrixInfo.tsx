import {
	CalculatePercentileProps,
	CalculateRowSumProps,
	Cell,
	NearestCellsProps,
} from '../types/matrix';

// Function to get the nearest cells to a given cell amount.
export const getNearestCells = ({
	matrix,
	cellAmount,
}: NearestCellsProps): Cell[] => {
	// Flatten the matrix into a single array of cells.
	const allCells = matrix.flat();

	// Find the nearest cell with an amount smaller than cellAmount.
	const lowerCells = allCells.filter((cell) => cell.amount < cellAmount);
	const nearestLower = lowerCells.reduce<Cell | undefined>((prev, current) => {
		// Select the cell with the largest amount among those less than cellAmount.
		if (!prev || current.amount > prev.amount) {
			return current;
		}
		return prev;
	}, undefined);

	// Find the nearest cell with an amount greater than cellAmount.
	const higherCells = allCells.filter((cell) => cell.amount > cellAmount);
	const nearestHigher = higherCells.reduce<Cell | undefined>(
		(prev, current) => {
			// Select the cell with the smallest amount among those greater than cellAmount.
			if (!prev || current.amount < prev.amount) {
				return current;
			}
			return prev;
		},
		undefined,
	);

	// Return available nearest cells as an array.
	return [nearestLower, nearestHigher].filter(
		(cell): cell is Cell => cell !== undefined,
	);
};

// Function to calculate the sum of values in a row.
export const calculateRowSum = ({ row }: CalculateRowSumProps) =>
	row.reduce((sum, cell) => sum + cell.amount, 0);

// Function to calculate the percentile of a column.
export const calculatePercentile = ({
	matrix,
	columnIndex,
}: CalculatePercentileProps) => {
	// Extract the values from the specified column.
	const columnValues = matrix.map((row) => row[columnIndex].amount);
	// Calculate the sum of values in the column.
	const sum = columnValues.reduce((acc, value) => acc + value, 0);
	// Return the 50th percentile (median).
	return parseFloat((sum / 2).toFixed(1));
};
