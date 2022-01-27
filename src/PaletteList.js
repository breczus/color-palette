import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	render() {
		const { paletts, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
						<Link to='/palette/new'>Create New Palette </Link>
					</nav>
					<div className={classes.palettes}>
						{paletts.map((palette) => (
							<MiniPalette {...palette} key={palette.id} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
