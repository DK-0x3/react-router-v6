import { ROUTE_PARAMS } from './RouteParams.ts';

const ROUTES = {
	HOME: '/',
	ABOUT: 'about',
	POSTS: {
		ROOT: 'posts',
		TEMPLATE: {
			ROOT: `posts/:${ROUTE_PARAMS.PostId}`,
			EDIT: `posts/:${ROUTE_PARAMS.PostId}/edit`
		},
		CREATE: 'posts/create',

		SINGLE_POST: (postId: string) => `/posts/${postId}`,
		EDIT_POST: (postId: string) => `/posts/${postId}/edit`,
	},
	LOGIN: 'login',
	NOT_FOUND: '*',
};

export default ROUTES;