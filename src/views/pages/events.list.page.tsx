import React from 'react';
import { TEXT_CONFIG, PAGE_SIZE_CONFIG } from '../../config';
import Background from '../components/background.component';
import PageContent from '../components/page-content.component';
import Header from '../components/header.component';
import BasicTable from '../components/basic-table.component';
import { Event } from '../../models/event';

export default function List() {
	const columnHeaders = ['Name', 'Location', 'Date', 'Action'];
	const events: Event[] = [
		{ id: 1, name: 'Concert', location: 'Dhaka', date: '123' },
		{ id: 2, name: 'Concert', location: 'Dhaka', date: '123' },
		{ id: 3, name: 'Concert', location: 'Dhaka', date: '123' },
		{ id: 4, name: 'Concert', location: 'Dhaka', date: '123' }
	];
	return (
		<Background>
			<PageContent>
				<Header
					title={TEXT_CONFIG.lbl_title_header}
					subTitle={TEXT_CONFIG.lbl_list_of_events}
					buttonTitle={TEXT_CONFIG.btn_event_create}
					href="/edit"
				/>
				<BasicTable
					columnHeaders={columnHeaders}
					pageSizeConfig={PAGE_SIZE_CONFIG}
					pageSize={PAGE_SIZE_CONFIG[0]}
					offset={0}
					data={events}
				/>
			</PageContent>
		</Background>
	);
}
