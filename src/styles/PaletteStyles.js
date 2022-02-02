import Sizes from './Sizes';
const styles = {
	Palette: {
		height: '97vh',
		display: 'flex',
		flexDirection: 'column',
	},
	PaletteColors: {
		height: '90%',
	},
	goBack: {
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		cursor: 'pointer',
		marginBottom: '-3.5px',
		opacity: '1',
		backgroundColor: 'black',
		position: 'relative',
		'& a': {
			color: 'white',
			width: '100px',
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
		[Sizes.down('lg')]: {
			width: '25%',
			height: '33.3333%',
		},
		[Sizes.down('md')]: {
			width: '50%',
			height: '20%',
		},
		[Sizes.down('xs')]: {
			width: '100%',
			height: '10%',
		},
	},
};
export default styles;
