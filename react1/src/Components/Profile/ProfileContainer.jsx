import React from 'react';
import Profile from './Profile';
import { setUserProfile } from './../../Redux/profile-reducer';
import { connect } from 'react-redux';
import axios from 'axios';

class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {

            this.props.setUserProfile(response.data)
            debugger
        })
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
debugger

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
