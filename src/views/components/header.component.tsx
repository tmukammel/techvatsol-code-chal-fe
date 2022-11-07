import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export type mouseEventHandlerParam = React.MouseEvent<
	HTMLButtonElement,
	MouseEvent
>;

const Header = (props: {
	title?: string;
	subTitle?: string;
	buttonTitle?: string;
	href?: string;
}) => {
	return (
		<Box
			sx={{
				width: '100%',
				justifyContent: 'center'
			}}
		>
			<Stack spacing={0}>
				<Typography
					variant="h2"
					sx={{
						paddingTop: '2.5vh',
						paddingBottom: '1vh',
						paddingLeft: '2vh',
						color: 'text.primary'
					}}
				>
					{props.title}
				</Typography>
				<Stack
					direction="row"
					spacing={1}
					sx={{
						paddingLeft: '2vh',
						paddingBottom: '2.5vh',
						color: 'text.secondary'
					}}
				>
					<Typography variant="body1">{props.subTitle}</Typography>
					<a href={props.href} style={{ textDecoration: 'none' }}>
						{props.buttonTitle}
					</a>
				</Stack>
			</Stack>
			<Divider sx={{ color: 'lightgray' }} />
		</Box>
	);
};

export default Header;
