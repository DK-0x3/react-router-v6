import { ReactNode } from 'react';
import { NavLinkProps } from 'react-router-dom';

interface ICustomLinkProps extends NavLinkProps {
    children?: ReactNode;
    to: string;
}

export default ICustomLinkProps;