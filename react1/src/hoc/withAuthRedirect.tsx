import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../Redux/redux-store';

let mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    } as MapPropsType
}

type MapPropsType = {
    isAuth: boolean
}

type DispatchPropsType = { 

}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    function RedirectComponent(props:MapPropsType & DispatchPropsType) {
        let {isAuth, ...restProps} = props 
        if (!isAuth) return <Redirect to={'/login'} />
        return <WrappedComponent {...restProps as WCP} />

    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent)

    return ConnectedAuthRedirectComponent
}

