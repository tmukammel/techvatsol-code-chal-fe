import React, { useEffect, useState } from 'react';
import { TEXT_CONFIG } from '../../config/text.config';
import Background from '../components/background.component';
import PageContent from '../components/page-content.component';
import Header from '../components/header.component';
import EventEditForm from '../components/event-edit-form.component';
import { useParams } from 'react-router-dom';
import { EventsAPI } from '../../http/events';

export default function Edit() {
	const { id } = useParams();

	const [formData, setFormData] = useState({});
	const [formType, setFormType] = useState(TEXT_CONFIG.btn_event_create);

	useEffect(() => {
		if (parseInt(id ?? '') > 0) {
			setFormType(TEXT_CONFIG.btn_event_edit);
			(async () => {
				const data = await EventsAPI.getEvent({ id });
				console.log(data);

				setFormData({
					id,
					name: data.data?.data?.name,
					location: data.data?.data?.location,
					date: data.data?.data?.date
				});
			})();
		}
	}, []);

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
				<EventEditForm {...formData} buttonTitle={formType} />
			</PageContent>
		</Background>
	);
}
