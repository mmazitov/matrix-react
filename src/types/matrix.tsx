// Define type for cell ID.
export type CellId = number;
// Define type for cell value.
export type CellValue = number;

// Define interface for a cell in the matrix.
export interface Cell {
	// Unique identifier for the cell.
	id: CellId;
	// Value stored in the cell.
	amount: CellValue;
	// Row index of the cell in the matrix.
	rowIndex: number;
	// Column index of the cell in the matrix.
	colIndex: number;
}

// Define interface for the Matrix context properties.
export interface MatrixContextProps {
	// 2D array representing the matrix.
	matrix: Cell[][];
	// Function to increase the value of a cell.
	increaseCell: (rowIndex: number, colIndex: number) => void;
	// Function to remove a row from the matrix.
	removeRow: (rowIndex: number) => void;
	// Function to generate a new matrix.
	generateMatrix: (rows: number, cols: number) => void;
	// Function to reset the matrix to an empty state.
	resetMatrix: () => void;
	// Function to add a new row to the matrix.
	addRow: () => void;
	// Function to get the nearest cells to a given cell amount.
	getNearestCells: (cellAmount: number, x: number) => Cell[];
	// Function to calculate the sum of values in a row.
	calculateRowSum: (row: Cell[]) => number;
	// Function to calculate the percentile of a column.
	calculatePercentile: (columnIndex: number) => number;
}

// Define type for a function that sets the matrix state.
export type MatrixSetterProps = React.Dispatch<React.SetStateAction<Cell[][]>>;

// Define interface for the props passed to the RemoveRowOperation component.
export interface RemoveRowOperationProps {
	// Function to set the matrix state.
	setMatrix: MatrixSetterProps;
	// Index of the row to be removed.
	rowIndex: number;
}

// Define interface for the props passed to the AddRowOperation component.
export interface AddRowOperationProps {
	// Function to set the matrix state.
	setMatrix: MatrixSetterProps;
	// Current matrix.
	matrix: Cell[][];
}

// Define interface for the props passed to the IncreaseCellOperation component.
export interface IncreaseCellOperationProps {
	// Function to set the matrix state.
	setMatrix: MatrixSetterProps;
	// Row index of the cell to be increased.
	rowIndex: number;
	// Column index of the cell to be increased.
	colIndex: number;
}

// Define interface for the props passed to the NearestCells component.
export interface NearestCellsProps {
	// The matrix to search for nearest cells.
	matrix: Cell[][];
	// The target cell amount for finding nearest cells.
	cellAmount: number;
}

// Define interface for the props passed to the CalculatePercentile component.
export interface CalculatePercentileProps {
	// The matrix to calculate the percentile from.
	matrix: Cell[][];
	// The index of the column to calculate the percentile for.
	columnIndex: number;
}

// Define interface for the props passed to the CalculateRowSum component.
export interface CalculateRowSumProps {
	// The row of cells to calculate the sum for.
	row: Cell[];
}

// Define interface for the props passed to the Heatmap component.
export interface HeatmapProps {
	// Row of cells to display in the heatmap.
	row: Cell[];
	// Sum of cell values in the row.
	rowSum: number;
	// Index of the row in the matrix.
	rowIndex: number;
	// Function to increase the value of a cell in the heatmap.
	increaseCell: (rowIndex: number, colIndex: number) => void;
	// Function to handle cell hover event.
	onCellHover: (cell: Cell) => void;
	// Function to handle cell leave event.
	onCellLeave: () => void;
	// Array of cell IDs that should be highlighted.
	highlightedCells: number[];
	// ID of the currently hovered cell.
	hoveredCellId: number | null;
}

// Define interface for the props passed to the Cell component.
export interface CellProps {
	// Cell data to be displayed.
	cell: Cell;
	// Row index of the cell in the matrix.
	rowIndex: number;
	// Column index of the cell in the matrix.
	colIndex: number;
}

export interface MatrixProps {
	setMatrix: MatrixSetterProps;
	M: number;
	N: number;
}
