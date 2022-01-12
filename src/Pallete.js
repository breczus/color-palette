import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Pallete.css';

class Pallete extends Component {
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
		const { colors } = this.props.palette;
		const { level, format } = this.state;
		const colorboxes = colors[level].map((c) => (
			<ColorBox background={c[format]} name={c.name} key={c.name} />
		));
		return (
			<div className='Pallete'>
				<Navbar
					level={level}
					changeLvl={this.changeLvl}
					handleChange={this.changeFormat}
				/>
				<div className='Pallete-colors'>{colorboxes}</div>
				<h1>Pallete</h1>
				{/* footer */}
			</div>
		);
	}
}

export default Pallete;
