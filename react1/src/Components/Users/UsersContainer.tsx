import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import { Users } from './Users';
import { useSelector } from 'react-redux';
import { getIsFetching } from './../../Redux/users-selectors';


type PropsType = {
    pageTitle: string
}

export const UsersPage: React.FC<PropsType> = props => {
    const isFetching = useSelector(getIsFetching)
    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader /> : null}
        <Users />
    </>;
};


