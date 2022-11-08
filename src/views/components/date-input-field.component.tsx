import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

const DateInputField = (props: {
	label?: string;
	placeholder?: string;
	date: Dayjs | null;
	changeHandler: (value: Dayjs | null) => void;
}) => {
	console.log('dayjs.utc(props.date).format()');
	console.log(dayjs.utc(props.date).format());

	const [value, setValue] = React.useState<Dayjs | null>(dayjs.utc(props.date));

	const handleChange = (newValue: Dayjs | null) => {
		setValue(dayjs.utc(newValue));
		props.changeHandler(newValue);
	};

	useEffect(() => {
		if (props.date) setValue(dayjs.utc(props.date));
	}, [props.date]);

	return (
		<Stack spacing={0}>
			<Typography
				variant="overline"
				sx={{
					paddingTop: '2vh',
					paddingBottom: '1vh',
					color: 'text.primary'
				}}
			>
				{props.label}
			</Typography>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DateTimePicker
					disableHighlightToday={true}
					disablePast={true}
					inputFormat="DD/MM/YYYY HH:mm:ss"
					ampm={false}
					value={value}
					onChange={handleChange}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</Stack>
	);
};

export default DateInputField;
