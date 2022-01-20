import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';

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
				showLink={true}
			/>
		));
		return (
			<div className='Palette'>
				<Navbar
					level={level}
					changeLvl={this.changeLvl}
					handleChange={this.changeFormat}
					showSlider
				/>
				<div className='Palette-colors'>{colorboxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default Palette;
