import { FC, UIEvent, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, startMessagesListening } from "../../Redux/chat-reducer";
import { stopMessagesListening } from './../../Redux/chat-reducer';
import { AppStateType } from "../../Redux/redux-store";
import { ChatMessageType } from "../../api/chat-api";
import React from "react";


const ChatPage: FC = (props) => {
    return <div>
        <Chat />
    </div>

}



const Chat: FC = () => {

    const status = useSelector((state: AppStateType) => state.chat.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => { dispatch(stopMessagesListening()) }
    }, [])


    return <div>
        {status === 'error' && <div>Some error ocurred. Please refresh the page.</div>}
        <>
            <Messages />
            <AddMessagesForm />
        </>

    </div>
}



const Messages: FC<{}> = () => {
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)

        } else {
            isAutoScroll && setIsAutoScroll(false)

        }
    }

    useEffect(() => {
        if (isAutoScroll) messagesAnchorRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' })
    }, [messages])


    return <div style={{ height: '400px', overflowY: 'auto' }} onScroll={scrollHandler} >
        {messages.map((m, index) => <Message key={m.id} message={m} />)}
        <div ref={messagesAnchorRef}></div>
    </div>
}



const Message: FC<{ message: ChatMessageType }> = React.memo(({ message }) => {

    return <div>
        <img alt='' style={{ width: '30px' }} src={message.photo} /><b> {message.userName}</b>
        <br />
        {message.message}
        <hr />
    </div>
})



const AddMessagesForm: FC<{}> = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const status = useSelector((state: AppStateType) => state.chat.status)

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