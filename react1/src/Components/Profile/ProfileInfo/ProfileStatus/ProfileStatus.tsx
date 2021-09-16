import s from "./ProfileStatus.module.css"
import React, { ChangeEvent } from 'react';

type PropsType = {
    updateStatus: (newStatus: string) => void
    status: string
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {

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

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
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

