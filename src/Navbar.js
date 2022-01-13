import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex', open: false };
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}

	handleFormatChange(e) {
		this.setState({ format: e.target.value, open: true });
		this.props.handleChange(e.target.value);
	}
	closeSnackbar() {
		this.setState({ open: false });
	}
	render() {
		const { level, changeLvl } = this.props;
		const { format } = this.state;
		return (
			<header className='Navbar'>
				<div className='Logo'>
					<Link to='/'>ReactColorPicker</Link>
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
				<div className='select-container'>
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value='hex'>HeX- #fffff </MenuItem>
						<MenuItem value='rgb'>Rgb (255,255,255)</MenuItem>
						<MenuItem value='rgba'>Rgba (255,255,255, 1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={this.state.open}
					autoHideDuration={6000}
					message={
						<span className='message-id'>
							Format Changed to {format.toUpperCase()}
						</span>
					}
					ContentProps={{
						'aria-describedby': 'message-id',
					}}
					onClose={this.closeSnackbar}
					action={
						<IconButton
							onClick={this.closeSnackbar}
							color='inherit'
							key='close'
							aria-label='colose'
						>
							<CloseIcon />
						</IconButton>
					}
				/>
			</header>
		);
	}
}

export default Navbar;
