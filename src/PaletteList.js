import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class PaletteList extends Component {
	render() {
		const { paletts, classes, deletePalette } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.heading}>React Colors</h1>
						<Link to='/palette/new'>Create New Palette </Link>
					</nav>

					<TransitionGroup className={classes.palettes}>
						{paletts.map((palette) => (
							<CSSTransition key={palette.id} classNames='fade' timeout={500}>
								<MiniPalette
									{...palette}
									key={palette.id}
									deletePalette={deletePalette}
									id={palette.id}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
