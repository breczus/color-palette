import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	render() {
		const { paletts } = this.props;
		return (
			<div>
				<MiniPalette />
				<h1>React Colors</h1>
				{paletts.map((palette) => (
					<MiniPalette {...palette} />
				))}
			</div>
		);
	}
}

export default PaletteList;
