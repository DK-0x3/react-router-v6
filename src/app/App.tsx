import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage.tsx';
import BlogPage from './pages/blog/BlogPage.tsx';
import AboutPage from './pages/about/AboutPage.tsx';
import NotFoundPage from './pages/not-found/NotfoundPage.tsx';
import { Layout } from '../shared/components/layout/Layout.tsx';
import SinglePostPage from './pages/single-post/SinglePostPage.tsx';
import ROUTES from './routers/Routes.ts';
import CreatePostPage from './pages/create-post/CreatePostPage.tsx';
import EditPostPage from './pages/edit-post/EditPostPage.tsx';
import LoginPage from './pages/login/LoginPage.tsx';
import PrivateAuth from '../features/hoc/PrivateAuth.tsx';
import { AuthProvider } from '../features/hoc/AuthProvider.tsx';

const App = () => {
	return (
		<AuthProvider>
			<Routes>
				<Route path={ROUTES.HOME} element={<Layout/>}>
					<Route index element={<HomePage/>}/>
					<Route path={ROUTES.POSTS.ROOT} element={<BlogPage/>}/>
					<Route path={ROUTES.POSTS.TEMPLATE.ROOT} element={<SinglePostPage/>}/>
					<Route path={ROUTES.POSTS.CREATE} element={<PrivateAuth><CreatePostPage/></PrivateAuth>}/>
					<Route path={ROUTES.POSTS.TEMPLATE.EDIT} element={<EditPostPage/>}/>
					<Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
					<Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
					<Route path={ROUTES.NOT_FOUND} element={<NotFoundPage/>}/>
				</Route>
			</Routes>
		</AuthProvider>
	);
};

export default App;
