import s from './../Dialogs.module.css'
import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/dialogs-reducer'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form';

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const MessageForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field component='textarea' placeholder='enter your message' name='newMessageBody'/>
            <button>Send</button>
        </form>
    )
}

let MessageReduxForm = reduxForm({form: 'dialogs'})(MessageForm)

const MessagesItem = (props) => {

    // let newMessageElement = React.createRef()

    // let messageOnChange = (e) => {
    //     let body = e.target.value
    //     props.dispatch(updateNewMessageBodyCreator(body))

    // }

    let onSendMessageClick = (values) => {

        props.sendMessage(values.newMessageBody)
        //alert(values.newMessageBody)
    }

    let messageElements = props.messageData.map(m => <Message message={m.message} key={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <MessageReduxForm onSubmit={onSendMessageClick} />


        </div>
    )

}

export default MessagesItem