import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { IPost } from '../../../entities/models/post/IPost.ts';
import ROUTES from '../../routers/Routes.ts';
import PostCard from '../../../features/post/ui/post-card/PostCard.tsx';
import './BlogPage.scss';
import { SearchParamKey } from '../../../shared/types.ts';
import { useSearchParam } from '../../../features/hooks/useSearchParam.ts';
import BlogFilter from '../../../shared/components/blog-filter/BlogFilter.tsx';

const BlogPage = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const postQuery = useSearchParam(SearchParamKey.Post);

	const latestQuery = searchParams.has('latest') ? searchParams.has('latest') : false;
	const startFrom: number = latestQuery ? 80 : 1;

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	const filteredPosts = posts.filter((post) =>
		post.title.toLowerCase().includes(postQuery.toLowerCase()) && parseInt(post.id) >= startFrom
	);

	return (
		<div className="blog-page">
			<h1>Blog Page</h1>

			<BlogFilter postQuery={postQuery} latestQuery setSearchParams={setSearchParams}/>

			{filteredPosts.map((post) => (
				<Link key={post.id} to={ROUTES.POSTS.SINGLE_POST(post.id)}>
					<PostCard post={post} />
				</Link>
			))}
		</div>
	);
};

export default BlogPage;
