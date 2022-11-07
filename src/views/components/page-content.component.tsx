import React from 'react';
import Box from '@mui/material/Box';

const PageContent = (props: {
	height: string;
	children?: React.ReactElement | React.ReactFragment;
}) => {
	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				height: props.height,
				width: '90%',
				borderRadius: 2,
				boxShadow: '1px 2px #F3F3F3',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'start'
			}}
		>
			{props.children}
		</Box>
	);
};

export default PageContent;
