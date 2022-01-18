import Palette from './Palette';
import { Route, Routes, useParams } from 'react-router-dom';
import seedColor from './seedColor';
import generatePalette from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColor from './SingleColor';

function findPalett(id) {
	return seedColor.find(function (palette) {
		return palette.id === id;
	});
}
function Profile({ animate }) {
	let params = useParams();
	return <Palette palette={generatePalette(findPalett(params.id))} />;
}
function App() {
	return (
		<Routes>
			<Route
				exact
				path='/'
				element={<PaletteList paletts={seedColor} authed={true} />}
			/>
			<Route exact path='/palette/:id' element={<Profile animate={true} />} />
			<Route
				exact
				path='/palette/:paletteId/:colorId'
				element={<SingleColor />}
			/>
		</Routes>
	);
}

export default App;
