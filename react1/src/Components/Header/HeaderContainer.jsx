import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import { setAuthUserDataThunk, logout } from './../../Redux/auth-reducer';


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthUserDataThunk()
    }
    
    render() {
        return <Header {...this.props}/>
    }
}

const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapStatetoProps, { setAuthUserDataThunk, logout })(HeaderContainer)
