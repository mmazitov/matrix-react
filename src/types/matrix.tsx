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
	increaseCell: (rowIndex: number, colIndex: number) => void;
	removeRow: (rowIndex: number) => void;
	generateMatrix: (rows: number, cols: number) => void;
	resetMatrix: () => void;
	addRow: () => void;
	getNearestCells: (cellAmount: number, x: number) => Cell[];
	calculateRowSum: (row: Cell[]) => number;
	calculatePercentile: (columnIndex: number) => number;
}

export type MatrixSetterProps = React.Dispatch<React.SetStateAction<Cell[][]>>;

export interface RemoveRowOperationProps {
	setMatrix: MatrixSetterProps;
	rowIndex: number;
}

export interface AddRowOperationProps {
	setMatrix: MatrixSetterProps;
	matrix: Cell[][];
}

export interface IncreaseCellOperationProps {
	setMatrix: MatrixSetterProps;
	rowIndex: number;
	colIndex: number;
}

export interface NearestCellsProps {
	matrix: Cell[][];
	cellAmount: number;
	x: number;
}

export interface CalculatePercentileProps {
	matrix: Cell[][];
	columnIndex: number;
}

export interface CalculateRowSumProps {
	row: Cell[];
}

export interface HeatmapProps {
	row: Cell[];
	rowSum: number;
	rowIndex: number;
	increaseCell: (rowIndex: number, colIndex: number) => void;
	onCellHover: (cell: Cell) => void;
	onCellLeave: () => void;
	highlightedCells: number[];
	hoveredCellId: number | null;
}

export interface CellProps {
	cell: Cell;
	rowIndex: number;
	colIndex: number;
}
