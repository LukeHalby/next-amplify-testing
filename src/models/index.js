// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, User, Chatroom, Client, ChatroomUser, ClientUser } = initSchema(schema);

export {
  Message,
  User,
  Chatroom,
  Client,
  ChatroomUser,
  ClientUser
};