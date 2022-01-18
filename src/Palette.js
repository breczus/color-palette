import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: 'hex' };
		this.changeLvl = this.changeLvl.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}
	changeLvl(newLevel) {
		this.setState({ level: newLevel });
	}
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { level, format } = this.state;
		const colorboxes = colors[level].map((c) => (
			<ColorBox
				background={c[format]}
				name={c.name}
				key={c.id}
				id={c.id}
				paletteId={id}
			/>
		));
		return (
			<div className='Palette'>
				<Navbar
					level={level}
					changeLvl={this.changeLvl}
					handleChange={this.changeFormat}
				/>
				<div className='Palette-colors'>{colorboxes}</div>
				<footer className='Palette-footer'>
					{paletteName}
					<span className='emoji'>{emoji}</span>
				</footer>
			</div>
		);
	}
}

export default Palette;
