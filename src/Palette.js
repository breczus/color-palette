import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';

const styles = {
	Palette: {
		height: '97vh',
		display: 'flex',
		flexDirection: 'column',
	},
	PaletteColors: {
		height: '90%',
	},
};

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
		const { classes } = this.props;
		const { level, format } = this.state;
		const colorboxes = colors[level].map((c) => (
			<ColorBox
				background={c[format]}
				name={c.name}
				key={c.id}
				id={c.id}
				paletteId={id}
				showFullPalette={true}
			/>
		));
		return (
			<div className={classes.Palette}>
				<Navbar
					level={level}
					changeLvl={this.changeLvl}
					handleChange={this.changeFormat}
					showSlider
				/>
				<div className={classes.PaletteColors}>{colorboxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
