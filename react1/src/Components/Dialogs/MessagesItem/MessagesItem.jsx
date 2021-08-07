import s from './../Dialogs.module.css'
import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/dialogs-reducer'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from './../../../utils/validators/validators';


const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const maxLength100 = maxLengthCreator(100)

const MessageForm = (props) => {

    return (
        <form action="" onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength100]} placeholder='enter your message' name='newMessageBody' />
            <button>Send</button>
        </form>
    )
}

let MessageReduxForm = reduxForm({ form: 'dialogs' })(MessageForm)

const MessagesItem = (props) => {

    let onSendMessageClick = (values) => {

        props.sendMessage(values.newMessageBody)

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