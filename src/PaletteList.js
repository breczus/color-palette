import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		backgroundColor: 'blue',
		height: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		border: '1px solid white',
	},
	nav: {
		display: 'flex',
		color: 'white',
		width: '100%',
		justifyContent: 'space-between',
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%',
	},
};

class PaletteList extends Component {
	render() {
		const { paletts, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
					</nav>
					<div className={classes.palettes}>
						{paletts.map((palette) => (
							<MiniPalette {...palette} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
