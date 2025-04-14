import { FormEvent, useEffect, useState } from 'react';
import { IBlogFilterProps } from './interface/IBlogFilterProps.ts';

const BlogFilter = (props: IBlogFilterProps) => {
	const {
		postQuery,
		latestQuery, 
		setSearchParams,
	} = props;

	const [searchTitle, setSearchTitle] = useState(postQuery);
	const [isSearchLatest, setIsSearchLatest] = useState(latestQuery);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const queryPost = (formData.get('search') as string)?.trim() || '';
		const isLatest = formData.get('latest') !== null;

		// Формируем объект параметров
		const params: { [key: string]: string } = {};

		// Добавляем параметр 'post', если он есть
		if (queryPost) {
			params.post = queryPost;
		}

		// Добавляем параметр 'latest', если чекбокс отмечен
		if (isLatest) {
			params.latest = 'true';
		}

		// Если параметры есть, обновляем строку запроса
		if (Object.keys(params).length > 0) {
			setSearchParams(params);
		} else {
			// Если нет параметров, сбрасываем параметры
			setSearchParams({});
		}
	};
    
	// Эффект для обновления параметров поиска
	useEffect(() => {
		const params: { [key: string]: string } = {};

		// Если введён поисковый запрос
		if (searchTitle) {
			params.post = searchTitle;
		}

		// Если чекбокс "New Only" выбран
		if (isSearchLatest) {
			params.latest = 'true';
		}

		// Обновляем параметры
		setSearchParams(params);
	}, [isSearchLatest, searchTitle, setSearchParams]);

	return (
		<form autoComplete="off" onSubmit={handleSubmit} className='searchForm'>
			<input
				type="search"
				name="search"
				placeholder="Search by title..."
				value={searchTitle}
				onChange={(e) => setSearchTitle(e.target.value)}
				className="searchInput"
			/>
			<input
				type="submit"
				value="Search"
				className='searchButton'
			/>
			<label>
				<input
					type='checkbox'
					name='latest'
					checked={isSearchLatest}
					onChange={(e) => setIsSearchLatest(e.target.checked)
					}
				/>
				New Only
			</label>
		</form>
	);
};

export default BlogFilter;