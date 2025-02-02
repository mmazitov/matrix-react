import './App.css';
import Matrix from './components/Matrix';
import { MatrixProvider } from './context/MatrixContext';

function App() {
	return (
		<MatrixProvider>
			<Matrix />
		</MatrixProvider>
	);
}

export default App;
