import { Button, Card, Grid, Input, Text, Description } from '@geist-ui/core'
import { Send } from '@geist-ui/icons'
import React from 'react'
import { User, ChatroomUser, Chatroom, Message } from '../models'
import { DataStore } from '@aws-amplify/datastore'
import { sortBy, uniqBy, compact } from 'lodash';
import ChatThread from './ChatThread'

interface tClientProps {
  user: User | undefined;
  chatroom: Chatroom | undefined;
}

export default function Chatrooms({ user, chatroom }: tClientProps) {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [messageInput, setMessageInput] = React.useState<string>('')
  
    // Chat
    React.useEffect(() => {
      if (chatroom) {
        fetchMessages()
        const subscription = DataStore
          .observeQuery(Message, c => c.chatroomId("eq", chatroom.id))
          .subscribe(() => fetchMessages())
        return () => subscription.unsubscribe()
      }
    }, [chatroom])
  
    async function fetchMessages() {
      if (chatroom) {
        const newMessages = await DataStore
          .query(Message, c => c.chatroomId("eq", chatroom.id))
        setMessages(uniqBy(sortBy(newMessages, 'createdAt'), 'id'))
      }
    }
  
    async function createMessage() {
      if (user && chatroom) {
        await DataStore.save(new Message({
          body: messageInput,
          userId: user.id,
          chatroomId: chatroom.id
        }))
      }
      setMessageInput('')
    }
  
    function handleSubmit() {
      if (!!messageInput) {
        try {
          createMessage()
        } catch(e) {
          console.error(e)
        }
      }
    }

    

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '10%',
            zIndex: 2
          }}
        />
        <ChatThread 
          messages={messages}
          user={user}
        />
        <Grid.Container 
          justify="center" 
          alignContent='flex-end' 
          gap={1} 
          height={'12%'}
          width={'100%'}
          style={{
            position: 'absolute',
            bottom: 0
          }}
        >
          <Grid xs={21} height={3}>
            <Input
              placeholder='Message'
              width={'100%'}
              height={'100%'}
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </Grid>
          <Grid xs={3} height={3}>
            <Button 
              type='secondary'
              width={'100%'}
              height={'100%'}
              onClick={handleSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0
              }}
            >
              <Send />
            </Button>
          </Grid>
        </Grid.Container>
      </div>
      
      
    </>
    
  )
}