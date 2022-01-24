import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

const styles = {
	ColorBox: {
		width: '20%',
		height: (props) => (props.showFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-3.5px',
		'&:hover button': {
			opacity: 1,
		},
	},
	copyText: {
		color: (props) =>
			chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
	},
	colorName: {
		color: (props) =>
			chroma(props.background).luminance() <= 0.08 ? 'white' : 'black',
	},
	seeMore: {
		color: (props) =>
			chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
		background: 'rgba(255, 255, 255, 0.3)',
		position: 'absolute',
		right: '0px',
		bottom: '0px',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
		border: 'none',

		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px',
	},
	copyButton: {
		color: (props) =>
			chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
		width: '100px',
		opacity: '0',
		height: '30px',
		position: 'absolute',
		display: 'inline-block',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginTop: '-15px',
		textAlign: 'center',
		outline: 'none',
		background: 'rgba(255, 255, 255, 0.3)',
		fontSize: '1rem',
		lineHeight: '30px',
		textTransform: 'uppercase',
		border: 'none',
		textDecoration: 'none',
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0px',
		bottom: '0px',
		padding: '10px',
		color: 'black',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
	},
	copyOverlay: {
		opacity: '0',
		zIndex: '0',
		width: '100%',
		height: '100%',
		transition: 'transform 0.6s ease-in-out',
		transform: 'scale(0.1)',
	},
	showOverlay: {
		opacity: '1',
		transform: 'scale(50)',
		zIndex: '10',
		position: 'absolute',
	},
	copyMsg: {
		position: 'fixed',
		left: '0',
		right: '0',
		top: '0',
		bottom: '0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '4rem',
		transform: 'scale(0.1)',
		opacity: '0',
		color: 'white',
		'& h1': {
			fontWeight: '400',
			textShadow: '1px 2px black',
			background: 'rgba(255, 255, 255, 0.3)',
			width: '100%',
			textAlign: 'center',
			marginBottom: '0',
			padding: '1rem',
			textTransform: 'uppercase',
		},
		'& p': {
			fontSize: '2rem',
			fontWeight: '100',
		},
	},
	showCopyMsg: {
		transform: 'scale(1)',
		opacity: '1',
		transition: 'all 0.4s ease-in-out',
		transitionDelay: '0.3s',
		zIndex: '25',
	},
};

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}
	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}
	render() {
		const { background, name, paletteId, id, showFullPalette, classes } =
			this.props;
		const { copied } = this.state;

		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className={classes.ColorBox}>
					<div
						style={{ background }}
						className={`${classes.copyOverlay} ${
							copied && classes.showOverlay
						}`}
					/>
					<div
						className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}
					>
						<h1>copied!</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div className='copy-container'>
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
						<button className={classes.copyButton}>Copy</button>
					</div>
					{showFullPalette && (
						<Link
							to={`/palette/${paletteId}/${id}`}
							onClick={(e) => e.stopPropagation()}
						>
							<span className={classes.seeMore}>More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
