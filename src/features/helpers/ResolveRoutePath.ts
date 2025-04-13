/**
 * Делает путь относительным к текущему, если он вложен
 * @param targetPath - целевой путь (например, '/posts/create')
 * @param currentPath - текущий путь (например, '/posts')
 */
export function ResolveRoutePath(targetPath: string, currentPath: string): string {
	const normalize = (path: string) => path.replace(/^\/+|\/+$/g, '');

	const normalizedTarget = normalize(targetPath);
	const normalizedCurrent = normalize(currentPath);

	if (normalizedTarget.startsWith(normalizedCurrent)) {
		const relative = normalizedTarget.slice(normalizedCurrent.length);
		return relative.replace(/^\/+/, '') || '.';
	}

	return targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
}
