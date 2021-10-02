import { GetItemsType, instance, ApiResponseType } from "./api";

let subscribers = [] as Array<SubcriberType>

let ws: WebSocket | null = null
const closeHandler = () => {
  setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data)
  subscribers.forEach(s => s(newMessages))
}

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.addEventListener('message', messageHandler)
}

function createChannel() {

  cleanUp()
  ws?.close()

  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
}



export const chatAPI = {
  start() {
    createChannel()
  },
  stop() {
    subscribers = []
    ws?.close()
    cleanUp()
  },
  subscribe(callback: SubcriberType) {
    subscribers.push(callback)
    return () => subscribers = subscribers.filter(s => s !== callback)
  },

  unsubscribe(callback: SubcriberType) {
    subscribers = subscribers.filter(s => s !== callback)
  },

  sendMessage(message: string) {
    ws?.send(message)
  }
};


// Types

type SubcriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType = {
  message: string
  photo: string
  userId: number,
  userName: string
}
