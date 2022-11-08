import React from 'react';
import { TEXT_CONFIG } from '../../config/text.config';
import Background from '../components/background.component';
import PageContent from '../components/page-content.component';
import Header from '../components/header.component';
import EventEditForm from '../components/event-edit-form.component';

export default function Edit() {
	return (
		<Background>
			<PageContent>
				<Header
					title={TEXT_CONFIG.lbl_title_header}
					subTitle={TEXT_CONFIG.lbl_create_an_event}
					buttonTitle={TEXT_CONFIG.btn_back}
					// href="javascript:history.back()"
					href="back"
				/>
				<EventEditForm buttonTitle={TEXT_CONFIG.btn_event_create} />
			</PageContent>
		</Background>
	);
}
