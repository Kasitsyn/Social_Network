import s from "./ProfileStatus.module.css"
import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
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
    }


    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div className={s.wrapper}>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>}

                {
                    this.state.editMode &&
                    <div className={s.wrapper}>
                        <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status} />
                    </div>
                }

            </div >
        )
    }
}
export default ProfileStatus;