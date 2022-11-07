import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateInputField = (props: {
	label?: string;
	placeholder?: string;
	text?: string;
}) => {
	const [value, setValue] = React.useState<Dayjs | null>(null);
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
				<DatePicker
					value={value}
					onChange={(newValue: any) => {
						setValue(newValue);
					}}
					renderInput={(params: any) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</Stack>
	);
};

export default DateInputField;
