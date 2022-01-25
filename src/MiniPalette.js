import React from 'react';
import { withStyles } from '@material-ui/styles';
import { useNavigate } from 'react-router-dom';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
	const history = useNavigate();
	const { classes, paletteName, emoji, colors, id } = props;
	function handleClick(e) {
		e.preventDefault();

		history(`/palette/${id}`);
	}

	const miniColorBoxes = colors.map((color) => (
		<div
			className={classes.miniColor}
			style={{ backgroundColor: color.color }}
			key={color.name}
		></div>
	));
	return (
		<div className={classes.root} onClick={handleClick}>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
