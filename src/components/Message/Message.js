import React from 'react'
import './Message.css'
const Message = ({message}) => (
  message
    ?
      <div>
        <span className='message'>{message}</span>
      </div>
    : null
)

export default Message
