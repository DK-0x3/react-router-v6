import {useLocation} from "react-router-dom";
import type { Location } from 'react-router';

export function useTypedLocation<T>() {
    return useLocation() as Location<T>;
}