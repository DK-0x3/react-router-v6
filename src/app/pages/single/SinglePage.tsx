import { useNavigate, useParams } from 'react-router-dom';
import { IRouteParams } from '../../routers/RouteParams.ts';
import { IPost } from '../../../entities/models/post/IPost.ts';
import { useEffect, useState } from 'react';
import ROUTES from '../../routers/Routes.ts';

const SinglePage = () => {
	const { PostId } = useParams<IRouteParams>();
	const navigate = useNavigate();
	const [post, setPost] = useState<IPost | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

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
				setError('Post not found');
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
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			<h1>{post?.title}</h1>
			<p>{post?.body}</p>
		</div>
	);
};

export default SinglePage;