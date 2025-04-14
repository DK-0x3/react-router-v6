import { SetURLSearchParams } from 'react-router-dom';

export interface IBlogFilterProps {
    postQuery: string;
    latestQuery: boolean;
    setSearchParams: SetURLSearchParams;
}