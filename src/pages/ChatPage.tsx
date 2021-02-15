import React, { useEffect, useState } from "react"
import { MessagesPropsType } from "../redux/Store"
import style from "./ChatPage.module.css"


const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat />
        </div>
    )
}
export default ChatPage

export const Chat: React.FC = () => {
    let [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket
        const closeHandler = () => {
            console.log("CLOSE WS")
            setTimeout(createWSChannel, 3000)
        }

        function createWSChannel() {
            ws?.removeEventListener("close", closeHandler)
            ws?.close()

            ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            setWsChannel(ws)
            ws.addEventListener("close", closeHandler)
        }
        createWSChannel()

        return () => {
            ws.removeEventListener("close", closeHandler)
            ws.close()
        }
    }, [])

    return (
        <div>
            <Messages wsChannel = {wsChannel}/>
            <AddMessagesForm wsChannel = {wsChannel}/>
        </div>
    )
}

export const Messages: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    let [messages, setMessages] = useState<Array<ChatMessageType>>([])
    useEffect(() => {
        const messageHandler = (e: MessageEvent) => { 
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)])
        }
        wsChannel?.addEventListener("message", messageHandler)
        return () => {
            wsChannel?.removeEventListener("message", messageHandler)
        }
    }, [wsChannel])   
    return (
        <div className={style.messages}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
        </div>
    )
}

export const AddMessagesForm: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [newMessage, setNewMessage] = useState<string>("")
    const [readyStatus, setReadyStatus] = useState<"ready" | "pending">("pending")

        useEffect(() => {
            const openHandler = () => {
                setReadyStatus("ready")
            }
        wsChannel?.addEventListener("open", openHandler)
        return () => {
            wsChannel?.removeEventListener("open", openHandler)
        }
    }, [wsChannel])

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.currentTarget.value)
    }
    const sendMessage = () => {
        if (!newMessage) {
            return
        }
        wsChannel?.send(newMessage)
        setNewMessage("")
    }
    return (
        <div>
            <textarea onChange = {onMessageChange} value ={newMessage}></textarea>
            <button disabled = {wsChannel === null || readyStatus !== "ready"} onClick = {sendMessage}>Send</button>
        </div>
    )
}

export const Message: React.FC<{message: ChatMessageType}>= ({message}) => {
        return (
        <div className={style.message}>
             <img src={message.photo}/><b>{message.userName}</b><span>{message.message}</span>
             <hr/>
        </div>
    )
}

//types
type ChatMessageType = {
userId: number
userName: string
photo: string
message: string
}
