import { useMatrix } from '../context/MatrixContext';

const RowHeader = () => {
	const { matrix } = useMatrix();
	if (matrix.length === 0) return null;
	const columnCount = matrix[0].length;
	return (
		<thead className="table-header">
			<tr>
				<th></th>
				{Array.from({ length: columnCount }, (_, index) => (
					<th key={index}>Cell values N = {index + 1}</th>
				))}
				<th>Sum Values</th>
				<th>Actions</th>
			</tr>
		</thead>
	);
};

export default RowHeader;
