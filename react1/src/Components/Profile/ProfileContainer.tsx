import React from 'react';
import Profile from './Profile';
import { setUserProfileThunk, getStatus, updateStatus, savePhoto, saveProfile } from '../../Redux/profile-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { AppStateType } from '../../Redux/redux-store';
import { ProfileType } from '../../types/types';
import { withAuthRedirectNoTS } from './../../hoc/withAuthRedirectNoTS';
import { RouteComponentProps } from "react-router"

// type StateType = {}

// type MapStatePropsType = ReturnType<typeof mapStateToProps>

// type MapDispatchPropsType = {
//     setUserProfileThunk: (userId: number) => void
//     getStatus: (userId: number) => void
//     updateStatus: (status: string) => void
//     savePhoto: (file: File) => void
//     saveProfile: (profile: ProfileType) => Promise<any>
// }

// type OwnPropsType = {
//     userId: string
// }

type PropsType = {}

const ProfilePage: React.FC<PropsType> = props => {
    return <div>
        <Profile />
    </div>;
};

export default ProfilePage
// refreshProfile() {
    //     let userId: number | null = +this.props.match.params.userId
    //     if (!userId) {
    //         userId = this.props.authorizedUserId
    //         if (!userId) this.props.history.push('/login')
    //     }

    //     if (!userId) {
    //         throw new Error("ID sould exists in URI params or in state ('authorizedUserId')")
    //     } else {
    //         this.props.setUserProfileThunk(userId as number)
    //         this.props.getStatus(userId as number)
    //     }

    // }

    // componentDidMount() {
    //     this.refreshProfile()
    // }

    // componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    //     if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile()
    // }

    // componentWillUnmount(): void { }
   // {...this.props}
                    // isOwner={!this.props.match.params.userId}
                    // profile={this.props.profile}
                    // status={this.props.status}
                    // updateStatus={this.props.updateStatus}
                    // savePhoto={this.props.savePhoto} 

// let mapStateToProps = (state: AppStateType) => ({
//     profile: state.profilePage.profile,
//     isAuth: state.auth.isAuth,
//     status: state.profilePage.status,
//     authorizedUserId: state.auth.userId


// })

//export default compose(connect(mapStateToProps, { setUserProfileThunk, getStatus, updateStatus, savePhoto, saveProfile }), withRouter, withAuthRedirectNoTS)(ProfileContainer) as React.ComponentType
