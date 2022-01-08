import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallete.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Pallete extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500 };
		this.changeLvl = this.changeLvl.bind(this);
	}
	changeLvl(newLevel) {
		this.setState({ level: newLevel });
	}
	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;
		const colorboxes = colors[level].map((c) => (
			<ColorBox background={c.hex} name={c.name} key={c.name} />
		));
		return (
			<div className='Pallete'>
				<Slider
					defaultValue={level}
					min={100}
					max={900}
					step={100}
					onAfterChange={this.changeLvl}
				/>
				{/* Navbar */}
				<div className='Pallete-colors'>{colorboxes}</div>
				<h1>Pallete</h1>
				{/* footer */}
			</div>
		);
	}
}

export default Pallete;
