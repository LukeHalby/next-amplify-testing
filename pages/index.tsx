import { Button, Card, Grid, Input, Text, Drawer } from '@geist-ui/core'
import { MessageCircle } from '@geist-ui/icons'
import { Client, User, ClientUser, ChatroomUser, Chatroom } from '../src/models'
import { Amplify, Auth, Hub, AuthModeStrategyType } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import React from 'react'
import { DataStore, Predicates } from '@aws-amplify/datastore'
import startAmplifyConfig from '../src/utils/startAmplifyConfig';
import ContainerLayout from '../src/layouts/ContainerLayout';
import AppLayout from '../src/layouts/AppLayout';
import ChatPopout from '../src/components/ChatPopout';
import getAuthToken from '../src/utils/getAuthToken';

const federatedIdName = "Auth0"
const AUTH_SERVER_CLIENT_ID = "f36807be-4a06-4247-898f-0b850b8f37d5"
const AUTH_SERVER_CHAT_NAME = "Auth Server Support Chat"

//@ts-ignore
//window.LOG_LEVEL = "DEBUG"

export default function Home() {
  const [authUser, setAuthUser] = React.useState<any>()
  const [customUser, setCustomUser] = React.useState<User>()
  const [client, setClient] = React.useState<Client>()
  const [chatroom, setChatroom] = React.useState<Client>()
  const [expoPushToken, setExpoPushToken] = React.useState<string>('');
  const [token, setToken] = React.useState<string>('');
  const [drawerVisible, setDrawerVisible] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [amplifyReady, setAmplifyReady] = React.useState<boolean>(false)

  React.useEffect(() => {
    async function startAmplify() {
      try {
        let success = await startAmplifyConfig()
        if (success) {
          console.log("finished config")
          setAmplifyReady(true)
        }
      } catch(e) {
        console.error("Error congifuring amplify: ", e)
      }
    }
  
    if (!amplifyReady) {
      startAmplify()
    }
  }, [])

  /*React.useEffect(() => {
    if (amplifyReady) {
      // Get current user
      Auth.currentAuthenticatedUser()
        .then(user => {
          console.log("User: ", user)
          setAuthUser(user)
        })
        .catch(err => {
          console.log("User: ", err)
          setAuthUser(undefined)
        })
      
      // listen for auth events
      const unsubscribe = Hub.listen("auth", ({payload: {event, data}}) => {
        switch (event) {
          case "signIn":
          case "cognitoHostedUI":
            setToken("grating...");
            getToken().then(userToken => {
              //@ts-ignore
              if (userToken) setToken(userToken.idToken.jwtToken)
              console.log(userToken)
            });
            break;
          case "signOut":
            setToken('');
            break;
          case "signIn_failure":
          case "cognitoHostedUI_failure":
            console.log("Sign in failure", data);
            break;
          default:
            break;
        }
      });
  
      return unsubscribe
    }
  }, [amplifyReady]);

  function getToken() {
    return Auth.currentSession()
      .then(session => session)
      .catch(err => console.log(err));
  }*/

  React.useEffect(() => {
    async function updateDataStoreUser() {
      if (authUser && amplifyReady && !isLoading) {
        setIsLoading(true)
        const user = await DataStore.query(User)
        console.log(user)
        setIsLoading(false)

        if (user.length === 0) {
          console.log("user doesnt exist")

          setIsLoading(true)
          const newUser = await DataStore.save(new User({
            authId: getAuthToken(),
            name: authUser.username,
            email: authUser.attributes.email,
            pushToken: expoPushToken
          }))
          setIsLoading(false)

          setCustomUser(newUser)
        } else {
          console.log("user exists", user[0])
          setCustomUser(user[0])
        }
      }
    }

    updateDataStoreUser()
  }, [authUser, amplifyReady])

  React.useEffect(() => {
    async function updateClient() {
      if (customUser && amplifyReady && !isLoading) {
        setIsLoading(true)
        const clientUser = await DataStore.query(
          ClientUser,
          c => c.clientId("eq", AUTH_SERVER_CLIENT_ID)
        )
        setIsLoading(false)

        if (clientUser.length === 0) {
          setIsLoading(true)
          const connection = await DataStore.save(new ClientUser({
            authId: getAuthToken(),
            userId: customUser.id,
            clientId: AUTH_SERVER_CLIENT_ID
          }))
          setIsLoading(false)

          if (connection.client) {
            setClient(connection.client)
          } else {
            throw new Error("No client in connection response")
          }
        } else {
          if (clientUser[0].client) {
            setClient(clientUser[0].client)
          } else {
            throw new Error("No client in queried ClientUser object")
          }
        }
      }
    }

    updateClient()
  }, [customUser, amplifyReady])

  React.useEffect(() => {
    async function updateChatroom() {
      if (customUser && client && amplifyReady && !isLoading) {
        setIsLoading(true)
        const chatConnections = await DataStore.query(ChatroomUser)
        setIsLoading(false)

        const supportConnection = chatConnections.filter(
          (connection) => connection.chatroom?.name === AUTH_SERVER_CHAT_NAME
        )

        if (supportConnection.length === 0) {
          console.log("new chatroom")
          setIsLoading(true)
          const newSupportRoom = await DataStore.save(new Chatroom({
            name: AUTH_SERVER_CHAT_NAME,
            clientId: client.id
          }))
          setIsLoading(false)

          setIsLoading(true)
          const newSupportConnection = await DataStore.save(new ChatroomUser({
            authId: getAuthToken(),
            userId: customUser.id,
            chatroomId: newSupportRoom.id
          }))
          setIsLoading(false)

          setChatroom(newSupportRoom)
        } else {
          console.log("found existing chatroom")
          if (supportConnection[0].chatroom) {
            setChatroom(supportConnection[0].chatroom)
          } else {
            throw new Error("No chatroom in the queried ChatroomUser object")
          }
        }
      }
    }

    updateChatroom()
  }, [customUser, client, amplifyReady])

  async function initiateSignOut() {
    /*await DataStore.clear()
    console.log("cleared")
    Auth.signOut()*/
    setAuthUser(undefined)
    setCustomUser(undefined)
    setClient(undefined)
    setChatroom(undefined)
    await DataStore.clear()
    console.log("cleared")
    await DataStore.stop()
    console.log("stopped")
    await DataStore.start()
    console.log("started")
  }

  return (
    <ContainerLayout>
      {
        !!authUser 
        ? (
          <>
            <Button onClick={() => { initiateSignOut() }}>
              Sign Out
            </Button>
            <Drawer
              visible={drawerVisible}
              onClose={() => setDrawerVisible(false)}
              placement="bottom"
            >
              <AppLayout>
                <ChatPopout
                  user={customUser}
                  client={client}
                  chatroom={chatroom}
                />
              </AppLayout>
            </Drawer>
            <Button
                shadow
                width={'50px'}
                height={'50px'}
                onClick={() => setDrawerVisible(true)}
                style={{
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 25,
                  right: 25,
                  border: 'none',
                  borderRadius: 50,
                  padding: 0
                }}
              >
                <MessageCircle />
              </Button>
          </>
        ) : (
          <Button
            //@ts-ignore
            onClick={() => { 
              //Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Cognito }) 
              setAuthUser({
                username: 'lukehalbytesting',
                attributes: { email: 'dne@gmail.com' }
              })
            }}
          >
            Sign In
          </Button>
        )
      }
    </ContainerLayout>
  )
}
