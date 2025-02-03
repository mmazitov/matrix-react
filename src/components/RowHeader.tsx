import { useMatrix } from '../context/MatrixContext';

// Define the RowHeader component.
const RowHeader = () => {
	// Get the matrix data from the context.
	const { matrix } = useMatrix();
	// If the matrix is empty, don't render anything.
	if (matrix.length === 0) return null;
	// Get the number of columns in the matrix.
	const columnCount = matrix[0].length;
	// Render the table header row.
	return (
		<thead className="table-header">
			<tr>
				<th></th>
				{/* Render the column headers. */}
				{Array.from({ length: columnCount }, (_, index) => (
					<th key={index}>Cell values N = {index + 1}</th>
				))}
				{/* Render the header for the sum values column. */}
				<th>Sum Values</th>
				{/* Render the header for the actions column. */}
				<th>Actions</th>
			</tr>
		</thead>
	);
};

// Export the RowHeader component as default.
export default RowHeader;
