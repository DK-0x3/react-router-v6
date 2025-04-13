import {Navigate, useLocation} from "react-router-dom";
import {ReactNode} from "react";

interface IPrivateAuthProps {
    children: ReactNode;
}

const PrivateAuth = (props: IPrivateAuthProps) => {
    const {children} = props;
    const location = useLocation();
    const auth = false;

    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (
        children
    )
}

export default PrivateAuth;