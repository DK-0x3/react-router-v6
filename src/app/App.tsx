import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage.tsx';
import BlogPage from './pages/blog/BlogPage.tsx';
import AboutPage from './pages/about/AboutPage.tsx';
import NotFoundPage from './pages/not-found/NotfoundPage.tsx';
import { Layout } from '../components/layout/Layout.tsx';
import SinglePage from './pages/single/SinglePage.tsx';
import ROUTES from './routers/Routes.ts';

const App = () => {
	return (
		<>
			<Routes>
				<Route path={ROUTES.HOME} element={<Layout/>}>
					<Route index element={<HomePage/>}/>
					<Route path={ROUTES.POSTS.ROOT} element={<BlogPage/>}/>
					<Route path={ROUTES.POSTS.TEMPLATE} element={<SinglePage/>}/>
					<Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
					<Route path={ROUTES.NOT_FOUND} element={<NotFoundPage/>}/>
				</Route>
			</Routes>
		</>
	);
};

export default App;
