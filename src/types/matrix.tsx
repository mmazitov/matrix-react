export type CellId = number;
export type CellValue = number;

export interface Cell {
	id: CellId;
	amount: CellValue;
	rowIndex: number;
	colIndex: number;
}

export interface MatrixContextProps {
	matrix: Cell[][];
	increaseCell: CellOperation;
	removeRow: RowOperation;
	generateMatrix: MatrixGeneration;
	resetMatrix: VoidFunction;
	addRow: MatrixModification;
	getNearestCells: NearestCellsOperation;
	calculateRowSum: RowSumCalculation;
	calculatePercentile: PercentileCalculation;
}

export type MatrixSetter = React.Dispatch<React.SetStateAction<Cell[][]>>;

export interface MatrixOperationProps {
	setMatrix: MatrixSetter;
}

export interface RowOperationProps extends MatrixOperationProps {
	rowIndex: number;
}

export interface AddRowProps extends MatrixOperationProps {
	matrix: Cell[][];
}

export interface CellOperationProps extends MatrixOperationProps {
	rowIndex: number;
	colIndex: number;
}

export interface NearestCellsOperationProps {
	matrix: Cell[][];
	cellAmount: number;
	x: number;
}

export interface PercentileCalculationProps {
	matrix: Cell[][];
	columnIndex: number;
}

export interface RowSumCalculationProps {
	row: Cell[];
}

export interface HeatmapComponentProps {
	row: Cell[];
	rowSum: number;
	rowIndex: number;
	increaseCell: CellOperation;
	onCellHover: (cell: Cell) => void;
	onCellLeave: VoidFunction;
	highlightedCells: CellId[];
	hoveredCellId: CellId | null;
}

export interface CellComponentProps {
	cell: Cell;
	rowIndex: number;
	colIndex: number;
}

// Function Types
export type CellOperation = (rowIndex: number, colIndex: number) => void;
export type RowOperation = (rowIndex: number) => void;
export type MatrixGeneration = (rows: number, cols: number) => void;
export type MatrixModification = () => void;
export type NearestCellsOperation = (cellAmount: number, x: number) => Cell[];
export type RowSumCalculation = (row: Cell[]) => number;
export type PercentileCalculation = (columnIndex: number) => number;
