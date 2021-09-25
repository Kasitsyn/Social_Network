import React from 'react';
import { connect } from 'react-redux';
import Header, { DispatchPropsType, MapPropsType } from './Header'
import { logout } from '../../Redux/auth-reducer';
import { AppStateType } from '../../Redux/redux-store';

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    
    
    render() {
        return <Header {...this.props}/>
    }
}

const mapStatetoProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStatetoProps, { logout })(HeaderContainer)
