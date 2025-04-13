import './PostCard.scss';
import { IPost } from '../../../../entities/models/post/IPost.ts';
import ReactAndRouter from '../../../../assets/ReactAndRouter.webp';

export interface IPostCardProps {
	post: IPost;
}

const PostCard = (props: IPostCardProps) => {
	const { post } = props;
	
	return (
		<div className="blog-card">
			<img className="blog-img"
				src={ReactAndRouter}/>
			<div className="text-overlay">
				<h2>{post.title}</h2>
				<p>
					{post.body}&nbsp;&nbsp;
					<span className="read-more" role="link">Read More</span>
				</p>
			</div>
		</div>
	);
};

export default PostCard;