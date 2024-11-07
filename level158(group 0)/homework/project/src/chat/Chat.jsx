import React, { useState } from 'react'

function Chat() {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSend()
    }
    
    const handleSend = () => {
        if (message.trim() !== "") {
            const time = new Date().toLocaleString()
            const newMessage = {
                text:message,
                time:time
            }
            setMessages(prev => [...prev, newMessage])
            setMessage("")
        }

    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const enterDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSend()
        }
    }

    const deleteChat = () => {
        setMessages([])
    }

    return (
        <div className='p-10'>
            <form onSubmit={handleSubmit} className='w-[20%] bg-[rgb(113,143,199)] p-[100px] flex justify-center items-center'>
                <input type="text" name="text" value={message} onChange={handleChange} onKeyDown={enterDown} className='border-[1px] border-black' />
                <button type="submit">submit</button>
            </form>

            <h1>chat</h1>

            <div className='border-[2px] border-black max-w-[20%] h-auto rounded-[20px] p-[20px]'>
                {messages.length > 0 && (
                    messages.map((item, index) => (
                        <div className='flex gap-[20px]'>
                            <p className='block max-w-[100%]' key={index}>{item.text}</p>
                            <p className='block max-w-[100%]' key={index}>{item.time}</p>


                        </div>
                        ))
                    )}
            </div>
            <button onClick={deleteChat}>delete</button>
        </div>
    )
}

export default Chat
