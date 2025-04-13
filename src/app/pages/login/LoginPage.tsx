import {useLocation, useNavigate} from "react-router-dom";
import {useTypedLocation} from "../../../features/hooks/useTypedLocation.ts";
import {Location} from "react-router";

export interface ILocationState {
    from: Location;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useTypedLocation<ILocationState | null>();

    let fromPage: string = '/';

    if (location.state) {
        fromPage = location.state.from.pathname;
    }

    return (
        <>

        </>
    )
}

export default LoginPage;