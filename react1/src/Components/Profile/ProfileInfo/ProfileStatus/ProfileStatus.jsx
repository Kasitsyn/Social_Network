import s from "./ProfileStatus.module.css"
import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
        
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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        
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

