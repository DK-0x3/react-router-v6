export const getQueryParam = (params: URLSearchParams, key: string, fallback = ''): string =>
	params.get(key) || fallback;
