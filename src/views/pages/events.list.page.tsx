import React, { useEffect, useState } from 'react';
import { TEXT_CONFIG, PAGE_SIZE_CONFIG } from '../../config';
import Background from '../components/background.component';
import PageContent from '../components/page-content.component';
import Header from '../components/header.component';
import BasicTable from '../components/basic-table.component';
import { getEvents, deleteEvent } from '../../services/events';
import Snackbar from '@mui/material/Snackbar';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

const columnHeaders = ['NAME', 'LOCATION', 'DATE', 'ACTION'];

export default function List() {
	const [pageSize, setPageSize] = useState(PAGE_SIZE_CONFIG[0]);
	const [pageCursor, setPageCursor] = useState(1);
	const [events, setEvents] = useState([]);
	const [eventsCount, setEventsCount] = useState(0);
	const [showAlert, setShowAlert] = useState(false);
	const [alert, setAlert] = useState('');

	useEffect(() => {
		(async () => {
			const data = await getEvents({
				params: { offset: pageCursor - 1, limit: pageSize }
			});
			if (data) {
				setEvents(data.data?.data?.rows);
				setEventsCount(data.data?.data?.count);
			} else {
				setAlert('Events fetch failed');
				setShowAlert(true);
			}
		})();
	}, []);

	const pageChangeHandler = async (page: number) => {
		const data = await getEvents({
			params: { offset: page - 1, limit: pageSize }
		});
		if (data) {
			setPageCursor(page);
			setEvents(data.data?.data?.rows);
			setEventsCount(data.data?.data?.count);
		} else {
			setAlert('Events fetch failed');
			setShowAlert(true);
		}
	};

	const pageSizeChangeHandler = async (size: number) => {
		const data = await getEvents({
			params: { offset: pageCursor - 1, limit: size }
		});
		if (data) {
			setPageSize(size);
			setEvents(data.data?.data?.rows);
			setEventsCount(data.data?.data?.count);
		} else {
			setAlert('Events fetch failed');
			setShowAlert(true);
		}
	};

	const eventDeleteHandler = async (id: number) => {
		const data = await deleteEvent(id);
		if (data) {
			setAlert('Event delete succeeded');

			const data = await getEvents({
				params: { offset: pageCursor - 1, limit: pageSize }
			});
			if (data) {
				setEvents(data.data?.data?.rows);
				setEventsCount(data.data?.data?.count);
			} else {
				setAlert('Events fetch failed');
				setShowAlert(true);
			}
		} else {
			setAlert('Event delete failed');
		}
		setShowAlert(true);
	};

	return (
		<Background>
			<Snackbar
				open={showAlert}
				autoHideDuration={1000}
				onClose={() => {
					setShowAlert(false);
				}}
				message={alert}
			/>
			<PageContent>
				<Header
					title={TEXT_CONFIG.lbl_title_header}
					subTitle={TEXT_CONFIG.lbl_list_of_events}
					buttonTitle={TEXT_CONFIG.btn_event_create}
					href="/event"
				/>
				<BasicTable
					columnHeaders={columnHeaders}
					pageSizeConfig={PAGE_SIZE_CONFIG}
					pageSize={PAGE_SIZE_CONFIG[0]}
					pageNumber={pageCursor}
					totalCount={eventsCount}
					data={events}
					pageChangeHandler={pageChangeHandler}
					pageSizeChangeHandler={pageSizeChangeHandler}
					deleteHandler={eventDeleteHandler}
				/>
			</PageContent>
		</Background>
	);
}
