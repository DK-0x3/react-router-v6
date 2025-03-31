import ICustomLinkProps from './interface/ICustomLinkProps.ts';
import { NavLink, useMatch } from 'react-router-dom';
import { FC } from 'react';
import './CustomLink.scss';

const CustomLink: FC<ICustomLinkProps> = (props: ICustomLinkProps) => {
	const {
		children,
		to,
		...rest
	} = props;

	const match = useMatch(to);

	return (
		<NavLink to={to} {...rest} className={match ? 'nav-link-active' : ''}>
			{children}
		</NavLink>
	);
};

export default CustomLink;