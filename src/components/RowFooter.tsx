import { useMatrix } from '../context/MatrixContext';
// Define the RowFooter component
const RowFooter = () => {
	// Get matrix data and calculation function from context
	const { matrix, calculatePercentile } = useMatrix();
	// If matrix is empty, don't render anything
	if (matrix.length === 0) return null;
	// Render the footer row
	return (
		<tfoot className="table-footer">
			<tr>
				{/* Render header for the percentile row */}
				<td>50th Percentile</td>
				{/* Render percentile values for each column */}
				{matrix[0].map((_, index) => (
					<td key={index}>{calculatePercentile(index)}</td>
				))}
				{/* Empty cells for sum and actions columns */}
				<td></td>
				<td></td>
			</tr>
		</tfoot>
	);
};
// Export the RowFooter component as default
export default RowFooter;
