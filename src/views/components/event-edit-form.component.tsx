import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputField from '../components/input-field.component';
import DateInputField from '../components/date-input-field.component';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const EventEditForm = (props: {
	name?: string;
	location?: string;
	date?: string;
	actionType?: string;
	buttonTitle?: string;
}) => {
	return (
		<Stack
			spacing={1}
			sx={{
				// bgcolor: 'blue',
				width: '100%',
				alignItems: 'center'
			}}
		>
			<Box
				sx={{
					width: '95%',
					// display: 'flex',
					// flexDirection: 'column',
					justifyContent: 'center'
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<InputField label="Name" placeholder="Event name" />
					</Grid>
					<Grid item xs={8}>
						<InputField label="Location" placeholder="Event location" />
					</Grid>
					<Grid item xs={4}>
						<DateInputField label="Date" placeholder="Event date" />
					</Grid>
				</Grid>
			</Box>
			<Box
				sx={{
					bgcolor: 'background.default',
					width: '100%',
					display: 'flex',
					justifyContent: 'flex-end',
					borderRadius: '0px 0px 5px 5px'
				}}
			>
				<Button
					variant="contained"
					sx={{
						width: '10%',
						marginTop: '2.5vh',
						marginBottom: '2.5vh',
						marginRight: '3.5vh'
					}}
				>
					{props.buttonTitle}
				</Button>
			</Box>
		</Stack>
	);
};

export default EventEditForm;
