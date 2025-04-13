import { ROUTE_PARAMS } from './RouteParams.ts';

const ROUTES = {
	HOME: '/',
	ABOUT: 'about',
	POSTS: {
		ROOT: 'posts',
		TEMPLATE: `posts/:${ROUTE_PARAMS.PostId}`,
		SINGLE_POST: (postId: string) => `/posts/${postId}`,
	},
	NOT_FOUND: '*',
};

export default ROUTES;