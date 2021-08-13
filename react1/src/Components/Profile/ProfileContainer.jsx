import React from 'react';
import Profile from './Profile';
import {setUserProfileThunk, getStatus, updateStatus} from './../../Redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

})

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) this.props.history.push('/login')
        }
        this.props.setUserProfileThunk(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile 
                {...this.props} 
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus} />
            </div >
        )
    }
}

export default compose(connect(mapStateToProps, { setUserProfileThunk, getStatus, updateStatus }), withRouter, withAuthRedirect)(ProfileContainer)
