import { FC, useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { sendMessage, startMessagesListening } from "../../Redux/chat-reducer";
import { stopMessagesListening } from './../../Redux/chat-reducer';
import { useSelector } from 'react-redux';
import { AppStateType } from "../../Redux/redux-store";
import { ChatMessageType } from "../../api/chat-api";

const ChatPage: FC = (props) => {
    return <div>
        <Chat />
    </div>

}



const Chat: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => { dispatch(stopMessagesListening()) }
    }, [])


    return <div>
        <Messages />
        <AddMessagesForm />
    </div>
}



const Messages: FC<{}> = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)

    return <div style={{ height: '400px', overflowY: 'auto' }}>
        {messages.map((m, index) => <Message key={index} message={m} />)}
    </div>
}



const Message: FC<{ message: ChatMessageType }> = ({ message }) => {

    return <div>
        <img alt='' style={{ width: '30px' }} src={message.photo} /><b> {message.userName}</b>
        <br />
        {message.message}
        <hr />
    </div>
}



const AddMessagesForm: FC<{}> = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const sendMessageHandler = () => {
        if (!message) return
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button disabled={false} onClick={sendMessageHandler}>Send</button>
        </div>
    </div>
}




export default ChatPage