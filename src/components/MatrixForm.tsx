import { useState } from 'react';
import { useMatrix } from '../context/MatrixContext';
// Define the MatrixForm component
const MatrixForm = () => {
	// Get matrix generation and manipulation functions from context
	const { generateMatrix, addRow, matrix, resetMatrix } = useMatrix();
	// State variables for number of rows and columns
	const [rows, setRows] = useState('');
	const [cols, setCols] = useState('');
	// Handler for form submission (generating matrix)
	const handleGenerate = () => {
		// Parse input values for rows and columns
		const M = parseInt(rows, 10);
		const N = parseInt(cols, 10);
		generateMatrix(M, N);
	};
	// Handler for adding a row to the matrix
	const handleAddRow = () => {
		// Add a row using the context function
		addRow();
	};
	// Handler for resetting the matrix
	const handleReset = () => {
		// Reset the matrix using the context function
		resetMatrix();
		// Reset the input fields for rows and columns
		setRows('');
		setCols('');
	};
	// Render the form
	return (
		<form className="form-matrix">
			{/* Row for input fields */}
			<div className="form-row">
				{/* Input field for number of rows */}
				<div className="form-control">
					<label htmlFor="matrix-rows">Number of rows</label>
					<input
						type="number"
						id="matrix-rows"
						value={rows}
						onChange={(e) => setRows(e.target.value)}
						className="matrix-row"
						// Disable input if matrix already exists
						disabled={matrix.length > 0}
					/>
				</div>
				{/* Input field for number of columns */}
				<div className="form-control">
					<label htmlFor="matrix-cols">Number of columns</label>
					<input
						type="number"
						id="matrix-cols"
						value={cols}
						onChange={(e) => setCols(e.target.value)}
						className="matrix-col"
						// Disable input if matrix already exists
						disabled={matrix.length > 0}
					/>
				</div>
			</div>
			{/* Row for buttons */}
			<div className="form-row">
				{/* Button to generate the matrix */}
				<div className="form-control">
					<button
						type="submit"
						onClick={handleGenerate}
						// Disable button if input is invalid or matrix already exists
						disabled={!cols || !rows || matrix.length > 0}
					>
						Generate
					</button>
				</div>
				{/* Button to add a row */}
				<div className="form-control">
					<button
						type="button"
						onClick={handleAddRow}
						// Disable button if no input is provided or matrix doesn't exist
						disabled={(!cols && !rows) || matrix.length === 0}
					>
						Add Row
					</button>
				</div>
				{/* Button to reset the matrix */}
				<div className="form-control">
					<button
						type="button"
						// Disable button if matrix doesn't exist
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
// Export the MatrixForm component as default
export default MatrixForm;
