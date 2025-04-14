import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * Универсальный хук для чтения параметра строки запроса с fallback-значением.
 * @param key - имя параметра
 * @param fallback - значение по умолчанию, если параметр отсутствует
 */
export function useSearchParam(key: string, fallback = ''): string {
	const [searchParams] = useSearchParams();

	return useMemo(() => {
		return searchParams.get(key) ?? fallback;
	}, [searchParams, key, fallback]);
}