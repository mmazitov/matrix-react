import { useMatrix } from '../context/MatrixContext';

const RowFooter = () => {
	const { matrix, calculatePercentile } = useMatrix();

	if (matrix.length === 0) return null;

	return (
		<tfoot className="table-footer">
			<tr>
				<td>50th Percentile</td>
				{matrix[0].map((_, index) => (
					<td key={index}>{calculatePercentile(index)}</td>
				))}
				<td></td>
				<td></td>
			</tr>
		</tfoot>
	);
};

export default RowFooter;
