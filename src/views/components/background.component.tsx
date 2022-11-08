import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Background = (props: {
	children?: React.ReactElement | React.ReactFragment;
}) => {
	return (
		<Container maxWidth={false} style={{ padding: '0px' }}>
			<Box
				sx={{
					bgcolor: 'background.default',
					minHeight: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				{props.children}
			</Box>
		</Container>
	);
};

export default Background;
