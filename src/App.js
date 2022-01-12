import Palette from './Palette';
import { Route, Routes } from 'react-router-dom';
import seedColor from './seedColor';
import generatePalette from './colorHelpers';

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<h1>Palette List</h1>} />
			<Route exact path='/palette/:id' element={<h1>1palette</h1>} />
		</Routes>

		// <div>
		// 	<Palette palette={generatePalette(seedColor[4])} />
		// </div>
	);
}

export default App;
