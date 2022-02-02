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
import Page from './Page';

function App() {
	const location = useLocation();
	const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
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
			<CSSTransition key={location.key} classNames='page' timeout={500}>
				<Routes location={location}>
					<Route
						exact
						path='/palette/new'
						element={
							<Page>
								<NewPaletteForm savePalette={addPalette} palettes={palettes} />
							</Page>
						}
					/>
					<Route
						exact
						path='/'
						element={
							<Page>
								<PaletteList
									paletts={palettes}
									authed={true}
									deletePalette={deletePalette}
								/>
							</Page>
						}
					/>
					<Route
						exact
						path='/palette/:id'
						element={
							<Page>
								<PaletteParams animate={true} />
							</Page>
						}
					/>
					<Route
						exact
						path='/palette/:paletteId/:colorId'
						element={
							<Page>
								<SingleParams animate={true} />
							</Page>
						}
					/>
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	);
}

export default React.memo(App);
