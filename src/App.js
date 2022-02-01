import React from 'react';
import Palette from './Palette';
import { Route, Routes, useParams } from 'react-router-dom';
import seedColor from './seedColor';
import generatePalette from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColor from './SingleColor';
import NewPaletteForm from './NewPaletteForm';

function App() {
	const [palettes, updatePalettes] = React.useState(seedColor);
	function findPalett(id) {
		return palettes.find(function (palette) {
			return palette.id === id;
		});
	}

	function addPalette(newPalette) {
		updatePalettes([...palettes, newPalette]);
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

	return (
		<Routes>
			<Route
				exact
				path='/palette/new'
				element={
					<NewPaletteForm savePalette={addPalette} palettes={palettes} />
				}
			/>
			<Route
				exact
				path='/'
				element={<PaletteList paletts={palettes} authed={true} />}
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
