import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteMetaForm extends Component {
	constructor(props) {
		super(props);
		this.state = { open: true, newPaletteName: '' };
		this.handleChange = this.handleChange.bind(this);
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
	render() {
		const { newPaletteName } = this.state;
		return (
			<Dialog open={this.state.open} onClose={this.handleClose}>
				<DialogTitle>Choose Palette Name</DialogTitle>
				<ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
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
							errorMessages={['Name is required', 'Palette Name already used']}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose}>Cancel</Button>
						<Button variant='contained' color='primary' type='submit'>
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		);
	}
}

export default PaletteMetaForm;
