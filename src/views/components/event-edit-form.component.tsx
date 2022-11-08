import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputField from '../components/input-field.component';
import DateInputField from '../components/date-input-field.component';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { EventsAPI } from '../../http/events';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Snackbar from '@mui/material/Snackbar';
dayjs.extend(utc);

const handleEdit = async (
	id: number,
	name: string,
	location: string,
	date: string
) => {
	try {
		const data = await EventsAPI.updateEvent({
			id,
			data: { name, location, date }
		});
		return data;
	} catch (error) {
		return null;
	}
};

const handleCreate = async (name: string, location: string, date: string) => {
	try {
		const data = await EventsAPI.createEvent({
			data: { name, location, date }
		});
		return data;
	} catch (error) {
		return null;
	}
};

const EventEditForm = (props: {
	id?: number;
	name?: string;
	location?: string;
	date?: string;
	buttonTitle?: string;
}) => {
	const [nameState, setNameState] = useState(props.name || '');
	const [locationState, setLocationState] = useState(props.location || '');
	const [dateState, setDateState] = useState<Dayjs | null>(
		dayjs(props.date) || null
	);
	const [showAlert, setShowAlert] = useState(false);
	const [alert, setAlert] = useState('');

	const submitHandler = async () => {
		let data = null;
		if (props.buttonTitle === 'Create') {
			data = await handleCreate(
				nameState,
				locationState,
				dayjs.utc(dateState).format() || ''
			);
			setAlert(
				data !== null ? 'Event created successfully' : 'Event creation failed'
			);
		} else {
			data = await handleEdit(
				props.id ?? 0,
				nameState,
				locationState,
				dayjs.utc(dateState).format() || ''
			);
			setAlert(
				data !== null ? 'Event updated successfully' : 'Event update failed'
			);
		}

		setShowAlert(true);
	};

	const dateChangedHandler = (date: Dayjs | null) => {
		setDateState(date);
	};

	useEffect(() => {
		if (props.name) setNameState(props.name);
		if (props.location) setLocationState(props.location);
		if (props.date) setDateState(dayjs(props.date));
	}, [props.name, props, location, props.date]);

	return (
		<Stack
			spacing={2}
			sx={{
				// bgcolor: 'blue',
				width: '100%',
				alignItems: 'center'
			}}
		>
			<Snackbar
				open={showAlert}
				autoHideDuration={1000}
				onClose={() => {
					setShowAlert(false);
				}}
				message={alert}
			/>
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
