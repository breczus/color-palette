import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	render() {
		const { level, changeLvl } = this.props;
		return (
			<header className='Navbar'>
				<div className='Logo'>
					<a href='#'>ReactColorPicker</a>
				</div>
				<div className='slider-container'>
					<span>Level: {level}</span>
					<div className='slider'>
						<Slider
							defaultValue={level}
							min={100}
							max={900}
							step={100}
							onAfterChange={changeLvl}
						/>
					</div>
				</div>
			</header>
		);
	}
}

export default Navbar;
