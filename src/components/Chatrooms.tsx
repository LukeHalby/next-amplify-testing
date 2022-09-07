import { Button, Card, Grid, Input, Text } from '@geist-ui/core'
import React from 'react'
import { User, Client, ChatroomUser, Chatroom } from '../models'
import { DataStore } from '@aws-amplify/datastore'
import { sortBy, uniqBy, compact } from 'lodash';

interface tClientProps {
  setChatroom: React.Dispatch<React.SetStateAction<Chatroom | undefined>>;
  user: User | undefined;
  client: Client | undefined;
}

export default function Chatrooms({ setChatroom, user, client }: tClientProps) {
  const [allChatrooms, setAllChatrooms] = React.useState<Chatroom[]>([])
  const [chatroomInput, setChatroomInput] = React.useState<string>('')
  const [joinInput, setJoinInput] = React.useState<string>('')

  React.useEffect(() => {
    async function fetchChatrooms() {
      if (client && user) {
        const chatroomUsers = await DataStore.query(ChatroomUser)

        const clientChatrooms = chatroomUsers.map(
          item => { 
            if (item.chatroom?.clientId === client.id) return item.chatroom
          }
        )

        setAllChatrooms(compact(uniqBy(sortBy(clientChatrooms, 'createdAt'), 'id')).reverse())
      }
    }

    fetchChatrooms()
    const subscription = DataStore
      .observe(ChatroomUser)
      .subscribe(() => fetchChatrooms())
    return () => subscription.unsubscribe()
  }, [user, client])

  async function handleAddRoomSubmit() {
    if (!!chatroomInput) {
      await addRoom(chatroomInput)
      setChatroomInput('')
    }
  }

  async function handleJoinRoomSubmit() {
    if (!!joinInput) {
      await joinRoom(joinInput)
      setJoinInput('')
    }
  }

  async function addRoom(name: string) {
    try {
      if (client) {
        let newRoom = await DataStore.save(new Chatroom({ 
          name,
          clientId: client.id
        }))
  
        if (user) {
          let connection = await DataStore.save(new ChatroomUser({
            userId: user.id,
            chatroomId: newRoom.id
          }))
        }

        SetRoomAndNavigate(newRoom)
      }
    } catch(e) {
      console.error(e)
    }
  }

  async function joinRoom(chatroomId: string) {
    try {
      if (user) {
        let connection = await DataStore.save(new ChatroomUser({ 
          userId: user.id,
          chatroomId
        }))
        console.log(connection)
        if (connection.chatroom) SetRoomAndNavigate(connection.chatroom)
      }
    } catch(e) {
      console.error(e)
    }
  }

  function SetRoomAndNavigate(chatroom: Chatroom) {
    setChatroom(chatroom);
  }

  function RenderRooms() {
    return allChatrooms.map((room, index) => (
      <Grid xs={24} height={3} key={index}>
        <Button 
          onClick={() => SetRoomAndNavigate(room)}
          width={'100%'}
          height={'100%'}
        >
          {room.name}
        </Button>
      </Grid>
    ))
  }

  return (
      <Grid.Container justify="center" alignContent='flex-start' gap={1}>
        <Grid xs={24} justify="center" height={5}>
          <Text h2>Chatrooms</Text>
        </Grid>
        {!!client 
          ? <>
            <Grid xs={16} height={3}>
              <Input
                placeholder='Room name'
                width={'100%'}
                height={'100%'}
                value={chatroomInput}
                onChange={(e) => setChatroomInput(e.target.value)}
              />
            </Grid>
            <Grid xs={8} height={3}>
              <Button 
                type='secondary'
                width={'100%'}
                height={'100%'}
                onClick={handleAddRoomSubmit}
              >
                Add Room
              </Button>
            </Grid>
            <Grid xs={16} height={3}>
              <Input
                placeholder='Room id'
                width={'100%'}
                height={'100%'}
                value={joinInput}
                onChange={(e) => setJoinInput(e.target.value)}
              />
            </Grid>
            <Grid xs={8} height={3}>
              <Button 
                type='secondary'
                width={'100%'}
                height={'100%'}
                onClick={handleJoinRoomSubmit}
              >
                Join Room
              </Button>
            </Grid>
            {RenderRooms()}
          </>
          : null
        }
      </Grid.Container>
  )
}