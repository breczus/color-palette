import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
	constructor(props) {
		super(props);
		this.state = { stage: 'form', newPaletteName: '' };
		this.handleChange = this.handleChange.bind(this);
		this.showEmojiPicker = this.showEmojiPicker.bind(this);
		this.savePalette = this.savePalette.bind(this);
	}
	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
			this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	showEmojiPicker() {
		this.setState({ stage: 'emoji' });
	}
	savePalette(emoji) {
		const newPalette = {
			paletteName: this.state.newPaletteName,
			emoji: emoji.native,
		};
		this.props.handleSubmit(newPalette);
	}
	render() {
		const { newPaletteName } = this.state;
		return (
			<div>
				<Dialog
					open={this.state.stage === 'emoji'}
					onClose={this.props.hideForm}
				>
					<DialogTitle>Choose Palette Emoji</DialogTitle>
					<Picker title='Pick Palette emoji' onSelect={this.savePalette} />
				</Dialog>
				<Dialog
					open={this.state.stage === 'form'}
					onClose={this.props.hideForm}
				>
					<DialogTitle>Choose Palette Name</DialogTitle>
					<ValidatorForm onSubmit={this.showEmojiPicker}>
						<DialogContent>
							<DialogContentText>
								Choose name for your new palette
							</DialogContentText>

							<TextValidator
								label='Palette Name'
								value={newPaletteName}
								name='newPaletteName'
								fullWidth
								variant='filled'
								margin='normal'
								onChange={this.handleChange}
								validators={['required', 'isPaletteNameUnique']}
								errorMessages={[
									'Name is required',
									'Palette Name already used',
								]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.props.hideForm}>Cancel</Button>
							<Button variant='contained' color='primary' type='submit'>
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default PaletteMetaForm;
