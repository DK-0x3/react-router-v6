import { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import { IPost } from '../../../entities/models/post/IPost.ts';
import ROUTES from '../../routers/Routes.ts';
import PostCard from '../../../features/post/ui/post-card/PostCard.tsx';
import { ResolveRoutePath } from '../../../features/helpers/ResolveRoutePath.ts';

const BlogPage = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const { pathname } = useLocation();

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data));
	}, []);

	return (
		<div className="blog-page">
			<h1>Blog Page</h1>

			<Link to={ResolveRoutePath(ROUTES.POSTS.CREATE, pathname)}>Create New Post</Link>

			{
				posts.map((post) => (
					<Link key={post.id} to={ROUTES.POSTS.SINGLE_POST(post.id)}>
						<PostCard post={post} />
					</Link>
				))
			}
		</div>
	);
};

export default BlogPage;