import React from 'react';
import { ComponentType } from 'react';
import Profile from './Profile';
import { setUserProfileThunk, getStatus, updateStatus, savePhoto, saveProfile } from '../../Redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { AppStateType } from '../../Redux/redux-store';
import { ProfileType } from '../../types/types';
import { withAuthRedirectNoTS } from './../../hoc/withAuthRedirectNoTS';

type StateType = {}

type MapStatePropsType = {
    profile: any
    status: string
    isAuth: boolean
    authorizedUserId: any
}

type MapDispatchPropsType = {
    setUserProfileThunk: (userId: number) => void
    getStatus: (userId: number) => void
}

type OwnPropsType = {
    match: any
    authorizedUserId: any
    history: any
    status: string
    updateStatus: string
    savePhoto: File
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) this.props.history.push('/login')
        }
        this.props.setUserProfileThunk(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType, snapshot: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto} />
            </div >
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId


})

export default compose(connect(mapStateToProps, { setUserProfileThunk, getStatus, updateStatus, savePhoto, saveProfile }), withRouter, withAuthRedirectNoTS)(ProfileContainer) as React.ComponentType