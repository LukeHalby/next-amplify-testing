import React from 'react'
import { Grid } from '@geist-ui/core'
import { Message, User } from '../models'

interface tProps {
  messages: Message[];
  user: User | undefined
}

export default function ChatThread({
  messages,
  user
}: tProps) {

  function RenderMessages() {
    return messages.map((msg: Message, index: number) => 
      <div  
        key={index} 
        style={{
          marginTop: index === 0 ? '4%' :
            (messages[index - 1].userId === msg.userId
              ? '0.5%'
              : '4%'),
          width: '100%',
          display: 'flex',
          justifyContent: msg.userId === user?.id ? 'flex-end' : 'flex-start'
        }}
      >
        <div 
          className={'ChatMessage'}
          style={{
            backgroundColor: msg.userId === user?.id ? '#0070f3' : '#666666',
        }}>
          {msg.body}
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        height: '88%',
        width: '100%',
        overflowY: 'scroll',
        paddingRight: '20px',
        position: 'absolute',
        right: -20,
        left: 0
      }}
    >
      {RenderMessages()}
    </div>
  )
}