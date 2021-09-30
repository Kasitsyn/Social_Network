import { FC, useEffect, useState } from "react"

let wsChannel: WebSocket
function createChannel() {
    wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
}


type ChatPageType = {}

type ChatMessageType = {
    message: string
    photo: string
    userId: number,
    userName: string
}

const ChatPage: FC = (props) => {
    return <div>
        <Chat />
    </div>

}



const Chat: FC = () => {

    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {

        function createChannel() {
            setWsChannel(new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'))
        }
        createChannel()
    }, [])

    useEffect(() => {


    }, [wsChannel])

    return <div>
        <Messages wsChannel={wsChannel} />
        <AddMessagesForm wsChannel={wsChannel} />
    </div>
}

const Messages: FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(() => {
        wsChannel?.addEventListener("message", (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [wsChannel])

    return <div style={{ height: '400px', overflowY: 'auto' }}>
        {messages.map((m, index) => <Message key={index} message={m} />)}
    </div>
}

const Message: FC<{ message: ChatMessageType }> = ({ message }) => {

    return <div>
        <img style={{ width: '30px' }} src={message.photo} /><b> {message.userName}</b>
        <br />
        {message.message}
        <hr />
    </div>
}

const AddMessagesForm: FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
    const sendMessage = () => {
        if (!message) return
        wsChannel?.send(message)
        setMessage('')
    }

    useEffect(() => {
        wsChannel?.addEventListener('open', () => {
            setReadyStatus('ready')
        })
    }, [wsChannel])

    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button disabled={wsChannel === null || readyStatus !== 'ready'} onClick={sendMessage}>Send</button>
        </div>
    </div>
}



export default ChatPage