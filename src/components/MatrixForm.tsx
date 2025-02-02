import { useState } from 'react';
import { useMatrix } from '../context/MatrixContext';

const MatrixForm = () => {
	const { generateMatrix, addRow, matrix, resetMatrix } = useMatrix();
	const [rows, setRows] = useState('');
	const [cols, setCols] = useState('');

	const handleGenerate = () => {
		const M = parseInt(rows, 10);
		const N = parseInt(cols, 10);
		if (isNaN(M) || isNaN(N) || M <= 0 || N <= 0) {
			alert('Введите корректные положительные числа для строк и столбцов');
			return;
		}
		generateMatrix(M, N);
	};

	const handleAddRow = () => {
		addRow();
	};

	const handleReset = () => {
		resetMatrix();
		setRows('');
		setCols('');
	};

	return (
		<form className="form-matrix">
			<div className="form-row">
				<div className="form-control">
					<label htmlFor="matrix-rows">Number of rows</label>
					<input
						type="number"
						id="matrix-rows"
						value={rows}
						onChange={(e) => setRows(e.target.value)}
						className="matrix-row"
						disabled={matrix.length > 0}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="matrix-cols">Number of columns</label>
					<input
						type="number"
						id="matrix-cols"
						value={cols}
						onChange={(e) => setCols(e.target.value)}
						className="matrix-col"
						disabled={matrix.length > 0}
					/>
				</div>
			</div>
			<div className="form-row">
				<div className="form-control">
					<button
						type="submit"
						onClick={handleGenerate}
						disabled={!cols || !rows || matrix.length > 0}
					>
						Generate
					</button>
				</div>
				<div className="form-control">
					<button
						type="button"
						onClick={handleAddRow}
						disabled={(!cols && !rows) || matrix.length === 0}
					>
						Add Row
					</button>
				</div>
				<div className="form-control">
					<button
						type="button"
						disabled={matrix.length === 0}
						onClick={handleReset}
					>
						Reset
					</button>
				</div>
			</div>
		</form>
	);
};

export default MatrixForm;
