import { Button, Card, Grid, Input, Text } from '@geist-ui/core'
import React from 'react'
import { User, Client, ClientUser } from '../models'
import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { sortBy, uniqBy, compact } from 'lodash';
import { ComponentPropsToStylePropsMap } from '@aws-amplify/ui-react'

interface tClientProps {
  setClient: React.Dispatch<React.SetStateAction<Client | undefined>>;
  user: User | undefined;
}

export default function Clients({ setClient, user }: tClientProps) {
  const [allClients, setAllClients] = React.useState<Client[]>([])
  const [clientInput, setClientInput] = React.useState<string>('')
  const [joinInput, setJoinInput] = React.useState<string>('')

  React.useEffect(() => {
    async function fetchClients() {
      if (user) {
        const clientUsers = await DataStore.query(ClientUser)

        const clients = clientUsers.map(item => {
          if (item.client) return item.client
        })
        
        setAllClients(compact(uniqBy(sortBy(clients, 'createdAt'), 'id').reverse()))
      }
    }

    fetchClients()
    const subscription = DataStore
      .observe(ClientUser)
      .subscribe(() => fetchClients())
    return () => subscription.unsubscribe()
  }, [user])

  async function handleClientSubmit() {
    if (!!clientInput) {
      await addClient(clientInput)
      setClientInput('')
    }
  }

  async function handleJoinClientSubmit() {
    if (!!joinInput) {
      await joinClient(joinInput)
      setJoinInput('')
    }
  }

  async function addClient(name: string) {
    try {
      let newClient = await DataStore.save(new Client({ name }))

      if (user) {
        let connection = await DataStore.save(new ClientUser({
          userId: user.id,
          clientId: newClient.id
        }))
      }

      SetClientAndNavigate(newClient)
    } catch(e) {
      console.error(e)
    }
  }

  async function joinClient(clientId: string) {
    try {
      if (user) {
        let connection = await DataStore.save(new ClientUser({ 
          userId: user.id,
          clientId: clientId
        }))
        console.log(connection)
        if (connection.client) SetClientAndNavigate(connection.client)
      }
    } catch(e) {
      console.error(e)
    }
  }

  function SetClientAndNavigate(client: Client) {
    setClient(client);
  }

  function RenderUsers() {
    return allClients.map((user, index) => (
      <Grid xs={24} height={3} key={index}>
        <Button 
          onClick={() => SetClientAndNavigate(user)}
          width={'100%'}
          height={'100%'}
        >
          {user.name}
        </Button>
      </Grid>
    ))
  }

  async function initiateSignOut() {
    await DataStore.clear()
    console.log("cleared")
    Auth.signOut()
  }

  return (
      <Grid.Container justify="center" alignContent='flex-start' gap={1}>
        <Grid xs={24} justify="center" height={5}>
          <Text h2>Clients</Text>
        </Grid>
        <Grid xs={24} height={3}>
          <Button
            type='secondary'
            width={'100%'}
            height={'100%'}
            onClick={() => { initiateSignOut() }}
          >
            Sign Out
          </Button>
        </Grid>
        <Grid xs={16} height={3}>
          <Input
            placeholder='Client name'
            width={'100%'}
            height={'100%'}
            value={clientInput}
            onChange={(e) => setClientInput(e.target.value)}
          />
        </Grid>
        <Grid xs={8} height={3}>
          <Button 
            type='secondary'
            width={'100%'}
            height={'100%'}
            onClick={handleClientSubmit}
          >
            Add Client
          </Button>
        </Grid>
        <Grid xs={16} height={3}>
          <Input
            placeholder='Client id'
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
            onClick={handleJoinClientSubmit}
          >
            Join Client
          </Button>
        </Grid>
        {RenderUsers()}
      </Grid.Container>
  )
}