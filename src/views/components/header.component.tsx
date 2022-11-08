import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export type mouseEventHandlerParam = React.MouseEvent<
	HTMLButtonElement,
	MouseEvent
>;

const NavLink = (props: { nav: string; buttonTitle: string }) => {
	const history = useNavigate();
	if (props.nav === 'back') {
		return (
			<a href={'#'} onClick={() => history(-1)} style={{ textDecoration: 'none' }}>
				{props.buttonTitle}
			</a>
		);
	} else {
		return (
			<a href={props.nav} style={{ textDecoration: 'none' }}>
				{props.buttonTitle}
			</a>
		);
	}
};

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
					variant="h4"
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
					<NavLink nav={props.href || '/'} buttonTitle={props.buttonTitle || ''} />
				</Stack>
			</Stack>
			<Divider sx={{ color: 'lightgray' }} />
		</Box>
	);
};

export default Header;
