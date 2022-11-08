import React, { useEffect, useState } from 'react';
import { TEXT_CONFIG } from '../../config/text.config';
import Background from '../components/background.component';
import PageContent from '../components/page-content.component';
import Header from '../components/header.component';
import EventEditForm from '../components/event-edit-form.component';
import { useParams } from 'react-router-dom';
import { getEvent } from '../../services/events';

export default function Edit() {
	const { id } = useParams();

	const [formData, setFormData] = useState({});
	const [formType, setFormType] = useState(TEXT_CONFIG.btn_event_create);
	const [formSubTitle, setFormSubTitle] = useState(
		TEXT_CONFIG.lbl_create_an_event
	);

	useEffect(() => {
		if (parseInt(id ?? '') > 0) {
			setFormType(TEXT_CONFIG.btn_event_edit);
			setFormSubTitle(TEXT_CONFIG.lbl_edit_an_event);
			(async () => {
				const data = await getEvent(parseInt(id ?? ''));

				if (data) {
					setFormData({
						id,
						name: data.data?.data?.name,
						location: data.data?.data?.location,
						date: data.data?.data?.date
					});
				}
			})();
		}
	}, []);

	return (
		<Background>
			<PageContent>
				<Header
					title={TEXT_CONFIG.lbl_title_header}
					subTitle={formSubTitle}
					buttonTitle={TEXT_CONFIG.btn_back}
					// href="javascript:history.back()"
					href="back"
				/>
				<EventEditForm {...formData} buttonTitle={formType} />
			</PageContent>
		</Background>
	);
}
