import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputField from '../components/input-field.component';
import DateInputField from '../components/date-input-field.component';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const EventList = (props: { events?: [string] }) => {
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
					justifyContent: 'start'
				}}
			>
				<Stack
					direction="row"
					spacing={1}
					sx={{
						paddingLeft: '2vh',
						paddingBottom: '2.5vh',
						color: 'text.secondary'
					}}
				>
					<Typography variant="body1">Show</Typography>
					{/* <a href={props.href} style={{ textDecoration: 'none' }}>
						{props.buttonTitle}
					</a> */}
				</Stack>
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
				></Button>
			</Box>
		</Stack>
	);
};

export default EventList;
