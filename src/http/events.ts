import { AxiosResponse } from 'axios';
import { eventURLs } from './urls';
import { http } from './http';

export class EventsAPI {
	static getEvents(payload: any): Promise<AxiosResponse<any>> {
		if (!payload) {
			throw new Error('Please provide a payload');
		}

		return http.get(eventURLs.GET_EVENTS, { params: { ...payload.params } });
	}

	static getEvent(payload: any): Promise<AxiosResponse<any>> {
		if (!payload) {
			throw new Error('Please provide a payload');
		}

		return http.get(eventURLs.GET_EVENT(payload.id), {
			params: { ...payload.params }
		});
	}

	static createEvent(payload: any): Promise<AxiosResponse<any>> {
		if (!payload) {
			throw new Error('Please provide a payload');
		}

		return http.post(eventURLs.CREATE_EVENT, { ...payload.data });
	}

	static updateEvent(payload: any): Promise<AxiosResponse<any>> {
		if (!payload) {
			throw new Error('Please provide a payload');
		}

		return http.put(eventURLs.UPDATE_EVENT(payload.id), {
			...payload.data
		});
	}

	static deleteEvent(payload: any): Promise<AxiosResponse<any>> {
		if (!payload) {
			throw new Error('Please provide a payload');
		}

		return http.delete(eventURLs.DELETE_EVENT(payload.id));
	}
}
