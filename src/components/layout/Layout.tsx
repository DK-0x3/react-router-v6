import { Outlet } from 'react-router-dom';
import './Layout.scss';
import CustomLink from '../custom-link/CustomLink.tsx';

const Layout = () => {

	return (
		<>
			<header className="app-header">
				<CustomLink to="/" >Home</CustomLink>
				<CustomLink to="/posts" >Blog</CustomLink>
				<CustomLink to="/about" >About</CustomLink>
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