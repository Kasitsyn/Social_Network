import s from "./ProfileStatus.module.css"
import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
// import { updateStatus } from './../../../../Redux/profile-reducer';

const ProfileStatusHooks = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)

    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {
                !editMode &&
                <div className={s.wrapper}>
                    <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                </div>}

            {
                editMode &&
                <div className={s.wrapper}>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
                </div>
            }

        </div >
    )
}
export default ProfileStatusHooks;