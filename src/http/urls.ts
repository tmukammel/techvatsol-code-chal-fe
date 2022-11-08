export const eventURLs = Object.freeze({
	CREATE_EVENT: '/events',
	GET_EVENTS: '/events',
	GET_EVENT: (id: string) => `/events/${id}`,
	UPDATE_EVENT: (id: string) => `/events/${id}`,
	DELETE_EVENT: (id: number | string) => `/events/${id}`
});
