import { EventsAPI } from '../http/events';

export const getEvents = async (params: any) => {
	try {
		const data = await EventsAPI.getEvents(params);
		return data;
	} catch (error) {
		return null;
	}
};

export const getEvent = async (id: number) => {
	try {
		const data = await EventsAPI.getEvent({ id });
		return data;
	} catch (error) {
		return null;
	}
};

export const createEvent = async (
	name: string,
	location: string,
	date: string
) => {
	try {
		const data = await EventsAPI.createEvent({
			data: { name, location, date }
		});
		return data;
	} catch (error) {
		return null;
	}
};

export const updateEvent = async (
	id: number,
	name: string,
	location: string,
	date: string
) => {
	try {
		const data = await EventsAPI.updateEvent({
			id,
			data: { name, location, date }
		});
		return data;
	} catch (error) {
		return null;
	}
};

export const deleteEvent = async (id: number) => {
	try {
		const data = await EventsAPI.deleteEvent({ id });
		return data;
	} catch (error) {
		return null;
	}
};
