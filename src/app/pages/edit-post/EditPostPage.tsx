import { useParams } from 'react-router-dom';
import { IRouteParams } from '../../routers/RouteParams.ts';

const EditPostPage = () => {
	const { PostId } = useParams<IRouteParams>();

	return (
		<div>
			Edit Post {PostId}
		</div>
	);
};

export default EditPostPage;