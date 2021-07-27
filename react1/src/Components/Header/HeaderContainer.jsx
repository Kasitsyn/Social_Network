import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import { setAuthUserDataThunk } from './../../Redux/auth-reducer';


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthUserDataThunk()
        // authAPI.me().then(response => {
        //     if (response.data.resultCode === 0) {
        //         let { id, login, email } = response.data.data
        //         this.props.setAuthUserData(id, email, login)
        //     }
        // })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
    }
}

const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

export default connect(mapStatetoProps, { setAuthUserDataThunk })(HeaderContainer)
