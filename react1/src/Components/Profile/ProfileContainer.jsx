import React from 'react';
import Profile from './Profile';
import {setUserProfileThunk } from './../../Redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setUserProfileThunk(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div >
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfileThunk })(WithRouterProfileContainer);
