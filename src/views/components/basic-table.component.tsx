import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputField from './input-field.component';
import DateInputField from './date-input-field.component';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Event } from '../../models/event';
import PaginationItem from '@mui/material/PaginationItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Divider from '@mui/material/Divider';

const getTableInfo = (
	pageNumber: number,
	pageSize: number,
	totalCount: number
) => {
	return {
		from: pageSize * (pageNumber - 1) + 1,
		to: Math.min(pageNumber * pageSize, totalCount),
		of: totalCount
	};
};

const BasicTable = (props: {
	pageSizeConfig: number[];
	columnHeaders: string[];
	pageSize: number;
	pageNumber: number;
	totalCount: number;
	data?: any[] | null;
	pageChangeHandler: (page: number) => void;
	pageSizeChangeHandler: (size: number) => void;
	deleteHandler: (id: number) => void;
}) => {
	const [size, setSize] = React.useState(props.pageSize);
	const [pageCursor, setPageCursor] = React.useState(props.pageNumber);
	const [tableInfo, setTableInfo] = React.useState(
		getTableInfo(props.pageNumber, props.pageSize, props.totalCount)
	);

	const handlePageSizeChange = (event: SelectChangeEvent) => {
		setSize(parseInt(event.target.value));
		props.pageSizeChangeHandler(parseInt(event.target.value));
	};

	const handlePageCursorChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPageCursor(value);
		props.pageChangeHandler(value);
	};

	useEffect(() => {
		setTableInfo(
			getTableInfo(props.pageNumber, props.pageSize, props.totalCount)
		);
	}, [props.data]);

	const handleDelete = (eventId: number) => {
		props.deleteHandler(eventId);
	};

	return (
		<Stack
			spacing={0}
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
					justifyContent: 'start'
				}}
			>
				<Stack
					direction="row"
					spacing={1}
					sx={{
						paddingTop: '2vh',
						paddingBottom: '1vh',
						color: 'text.secondary',
						alignItems: 'center'
					}}
				>
					<Typography variant="body1">Show</Typography>
					<Box sx={{ minWidth: 60 }}>
						<FormControl fullWidth size="small">
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={size + ''}
								onChange={handlePageSizeChange}
							>
								{props.pageSizeConfig &&
									props.pageSizeConfig.map((pageSize) => (
										<MenuItem key={pageSize} value={pageSize}>
											{pageSize}
										</MenuItem>
									))}
							</Select>
						</FormControl>
					</Box>
					<Typography variant="body1">Entries</Typography>
				</Stack>
			</Box>
			<Box
				sx={{
					width: '95%',
					// display: 'flex',
					// flexDirection: 'column',
					justifyContent: 'start'
				}}
			>
				<TableContainer>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								{props.columnHeaders &&
									props.columnHeaders.map((name) => (
										<TableCell key={name} align="left">
											{name}
										</TableCell>
									))}
							</TableRow>
						</TableHead>
						<TableBody>
							{props.data &&
								props.data.map((row) => (
									<TableRow
										key={row.id}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell align="left">{row.name}</TableCell>
										<TableCell align="left">{row.location}</TableCell>
										<TableCell align="left">{row.date}</TableCell>
										<TableCell align="left">
											<Stack direction="row" spacing={1}>
												<a href={`/event/${row.id}`} style={{ textDecoration: 'none' }}>
													Edit
												</a>
												<a
													href={'#'}
													onClick={() => handleDelete(row.id)}
													style={{ textDecoration: 'none' }}
												>
													Delete
												</a>
											</Stack>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
					<Divider sx={{ color: 'lightgray' }} />
				</TableContainer>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						marginTop: '2.5vh',
						marginBottom: '2.5vh',
						color: 'text.secondary'
					}}
				>
					<Typography variant="body1">
						Showing <b>{tableInfo.from}</b> to <b>{tableInfo.to}</b> of{' '}
						<b>{tableInfo.of}</b> results
					</Typography>
					<Pagination
						count={props.data ? Math.ceil(props.totalCount / size) : 0}
						variant="outlined"
						shape="rounded"
						page={pageCursor}
						onChange={handlePageCursorChange}
					/>
				</Box>
			</Box>
		</Stack>
	);
};

export default BasicTable;
