import Pallete from './Pallete';
import seedColor from './seedColor';
import generatePalette from './colorHelpers';

function App() {
	return (
		<div>
			<Pallete palette={generatePalette(seedColor[4])} />
		</div>
	);
}

export default App;
