import React from 'react';
import { TEXT_CONFIG } from '../../config/text.config';
import Background from '../components/background.component';
import PageContent from '../components/page-content.component';
import Header from '../components/header.component';
import EventList from '../components/event-list.component';

export default function List() {
	return (
		<Background>
			<PageContent height="90%">
				<Header
					title={TEXT_CONFIG.lbl_title_header}
					subTitle={TEXT_CONFIG.lbl_list_of_events}
					buttonTitle={TEXT_CONFIG.btn_event_create}
					href="/edit"
				/>
				<EventList></EventList>
			</PageContent>
		</Background>
	);
}
