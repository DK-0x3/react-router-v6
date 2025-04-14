import { Outlet } from 'react-router-dom';
import './Layout.scss';
import CustomLink from '../custom-link/CustomLink.tsx';
import ROUTES from '../../../app/routers/Routes.ts';

const Layout = () => {

	return (
		<>
			<header className="app-header">
				<CustomLink to={ROUTES.HOME} >Home</CustomLink>
				<CustomLink to={ROUTES.POSTS.ROOT} >Blog</CustomLink>
				<CustomLink to={ROUTES.ABOUT} >About</CustomLink>
				<CustomLink to={ROUTES.POSTS.CREATE}>
					Create New Post
				</CustomLink>
			</header>

			<main className="main">
				<Outlet/>
			</main>

			<footer className="footer">
				<h4>©DK-0x3
					<br/>
					2025
				</h4>
			</footer>
		</>
	);
};

export { Layout };