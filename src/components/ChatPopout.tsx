import React from 'react'
import { Grid, Drawer } from '@geist-ui/core'
import { Client, User, ClientUser, Chatroom } from '../models'
import Chatrooms from './Chatrooms'
import Chat from './Chat'

interface tProps {
  user: User | undefined;
  client: Client | undefined;
  chatroom: Chatroom | undefined;
}

export default function ChatPopout({
  user,
  client,
  chatroom
}: tProps) {

  return (
    <>
      <Grid.Container height={'100%'} alignContent={'flex-start'}>
        <Grid xs={24} h={3} justify='center'>
          <Drawer.Title>Support Chat</Drawer.Title>
        </Grid>
        <Grid xs={24} h={2} justify='center'>
          <Drawer.Subtitle>{client?.name}</Drawer.Subtitle>
        </Grid>
        <Grid xs={24} h={31} justify="center">
          <Chat
            user={user}
            chatroom={chatroom}
          />
        </Grid>
      </Grid.Container>
    </>
  )
}