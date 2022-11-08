import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const InputField = (props: {
	label?: string;
	placeholder?: string;
	value?: string;
	changeHandler: (value: string) => void;
}) => {
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
			<TextField
				required
				id="outlined-required"
				placeholder={props.placeholder}
				value={props.value}
				onChange={(e) => props.changeHandler(e.target.value)}
			/>
		</Stack>
	);
};

export default InputField;
