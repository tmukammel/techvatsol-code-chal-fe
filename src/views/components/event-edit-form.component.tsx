import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputField from '../components/input-field.component';
import DateInputField from '../components/date-input-field.component';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import dayjs, { Dayjs } from 'dayjs';
import { EventsAPI } from '../../http/events';

const EventEditForm = (props: {
	name?: string;
	location?: string;
	date?: string;
	actionType?: string;
	buttonTitle?: string;
}) => {
	const [nameState, setNameState] = useState(props.name || '');
	const [locationState, setLocationState] = useState(props.location || '');
	const [dateState, setDateState] = useState<Dayjs | null>(
		dayjs(props.date) || null
	);

	const submitHandler = async () => {
		console.log(nameState);
		console.log(locationState);
		console.log(dateState?.format('MMM DD, YYYY - HH:mm:ss Z'));
		const res = await EventsAPI.createEvent({
			data: { name: nameState, location: locationState, date: dateState }
		});

		console.log(res);
	};

	const dateChangedHandler = (date: Dayjs | null) => {
		setDateState(date);
	};

	return (
		<Stack
			spacing={2}
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
						<InputField
							label="Name"
							placeholder="Event name"
							value={nameState}
							changeHandler={setNameState}
						/>
					</Grid>
					<Grid item xs={8}>
						<InputField
							label="Location"
							placeholder="Event location"
							value={locationState}
							changeHandler={setLocationState}
						/>
					</Grid>
					<Grid item xs={4}>
						<DateInputField
							label="Date"
							placeholder="Event date"
							date={dateState}
							changeHandler={dateChangedHandler}
						/>
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
					onClick={submitHandler}
				>
					{props.buttonTitle}
				</Button>
			</Box>
		</Stack>
	);
};

export default EventEditForm;
