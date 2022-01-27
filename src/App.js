import Palette from './Palette';
import { Route, Routes, useParams } from 'react-router-dom';
import seedColor from './seedColor';
import generatePalette from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColor from './SingleColor';
import NewPaletteForm from './NewPaletteForm';

function findPalett(id) {
	return seedColor.find(function (palette) {
		return palette.id === id;
	});
}

function PaletteParams() {
	let params = useParams();
	return <Palette palette={generatePalette(findPalett(params.id))} />;
}
function SingleParams() {
	let params = useParams();
	return (
		<SingleColor
			colorId={params.colorId}
			palette={generatePalette(findPalett(params.paletteId))}
		/>
	);
}
function App() {
	return (
		<Routes>
			<Route exact path='/palette/new' element={<NewPaletteForm />} />
			<Route
				exact
				path='/'
				element={<PaletteList paletts={seedColor} authed={true} />}
			/>
			<Route
				exact
				path='/palette/:id'
				element={<PaletteParams animate={true} />}
			/>
			<Route
				exact
				path='/palette/:paletteId/:colorId'
				element={<SingleParams animate={true} />}
			/>
		</Routes>
	);
}

export default App;
