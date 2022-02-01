import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBox';

const DraggableColorBox = SortableElement((props) => {
	return (
		<div
			className={props.classes.root}
			style={{ backgroundColor: props.color }}
		>
			<div className={props.classes.boxContent}>
				<span>{props.name}</span>
				<DeleteIcon
					style={{ transition: 'all 0.3s ease-in-out' }}
					onClick={props.delete}
				/>
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
