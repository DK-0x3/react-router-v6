import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import { IRouteParams } from '../../routers/RouteParams.ts';
import { IPost } from '../../../entities/models/post/IPost.ts';
import { useEffect, useState } from 'react';
import ROUTES from '../../routers/Routes.ts';
import { ResolveRoutePath } from '../../../features/helpers/ResolveRoutePath.ts';

const SinglePostPage = () => {
	const { PostId } = useParams<IRouteParams>();
	const navigate = useNavigate();
	const [post, setPost] = useState<IPost | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const { pathname } = useLocation();

	const goBack = () => navigate(-1);


	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${PostId}`);

				if (!response.ok) {
					// Если пост не найден
					throw new Error('Post not found');
				}

				const data = await response.json();
				setPost(data);
			} catch (err) {
				navigate(ROUTES.NOT_FOUND);
			} finally {
				setLoading(false);
			}
		};

		if (PostId) {
			fetchPost();
		}
	}, [PostId, navigate]);

	if (loading) {
		return (
			<>
				<button onClick={goBack}>Go Back</button>
				<div>Loading...</div>
			</>
		);
	}

	return (
		<div>
			<button onClick={goBack}>Go Back</button>
			<h1>{post?.title}</h1>
			<p>{post?.body}</p>
			{post && <Link to={ResolveRoutePath(ROUTES.POSTS.EDIT_POST(post.id), pathname)}>Edit Post</Link>}
		</div>
	);
};

export default SinglePostPage;