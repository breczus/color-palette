import React from 'react';
import Palette from './Palette';
import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import seedColor from './seedColor';
import generatePalette from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColor from './SingleColor';
import NewPaletteForm from './NewPaletteForm';
import { useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

function App() {
	const location = useLocation();
	const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
	console.log(savedPalettes);
	const [palettes, updatePalettes] = React.useState(savedPalettes || seedColor);
	function findPalett(id) {
		return palettes.find(function (palette) {
			return palette.id === id;
		});
	}

	function addPalette(newPalette) {
		updatePalettes([...palettes, newPalette]);
	}
	useEffect(() => {
		syncLocalStorage();
	});

	function deletePalette(id) {
		updatePalettes(
			palettes.filter((palette) => {
				return palette.id !== id;
			})
		);
	}
	useEffect(() => {
		syncLocalStorage();
	});
	function syncLocalStorage() {
		window.localStorage.setItem('palettes', JSON.stringify(palettes));
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
		<TransitionGroup component={null}>
			<CSSTransition key={location.key} classNames='fade' timeout={500}>
				<Routes location={location}>
					<Route
						exact
						path='/palette/new'
						element={
							<div className='page'>
								<NewPaletteForm savePalette={addPalette} palettes={palettes} />
							</div>
						}
					/>
					<Route
						exact
						path='/'
						element={
							<div className='page'>
								<PaletteList
									paletts={palettes}
									authed={true}
									deletePalette={deletePalette}
								/>
							</div>
						}
					/>
					<Route
						exact
						path='/palette/:id'
						element={
							<div className='page'>
								<PaletteParams animate={true} />
							</div>
						}
					/>
					<Route
						exact
						path='/palette/:paletteId/:colorId'
						element={
							<div className='page'>
								<SingleParams animate={true} />
							</div>
						}
					/>
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
}

export default App;
