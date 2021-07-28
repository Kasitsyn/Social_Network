import s from "./ProfileStatus.module.css"
import React from 'react';
// import { updateStatus } from './../../../../Redux/profile-reducer';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
        console.log(this.state.editMode)
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div className={s.wrapper}>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "-----"}</span>
                    </div>}

                {
                    this.state.editMode &&
                    <div className={s.wrapper}>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.state.status} />
                    </div>
                }

            </div >
        )
    }
}
export default ProfileStatus;