import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const DateInputField = (props: {
	label?: string;
	placeholder?: string;
	date: Dayjs | null;
	changeHandler: (value: Dayjs | null) => void;
}) => {
	const [value, setValue] = React.useState<Dayjs | null>(props.date);

	const handleChange = (newValue: Dayjs | null) => {
		setValue(newValue);
		props.changeHandler(newValue);
	};

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
					value={value}
					onChange={handleChange}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</Stack>
	);
};

export default DateInputField;
