import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type MessageMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatroomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatroomUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClientUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Message {
  readonly id: string;
  readonly body: string;
  readonly userId?: string | null;
  readonly from?: User | null;
  readonly chatroomId?: string | null;
  readonly chatroom?: Chatroom | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class User {
  readonly id: string;
  readonly authId?: string | null;
  readonly name: string;
  readonly email: string;
  readonly pushToken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Chatroom {
  readonly id: string;
  readonly name: string;
  readonly clientId?: string | null;
  readonly client?: Client | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Chatroom, ChatroomMetaData>);
  static copyOf(source: Chatroom, mutator: (draft: MutableModel<Chatroom, ChatroomMetaData>) => MutableModel<Chatroom, ChatroomMetaData> | void): Chatroom;
}

export declare class Client {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Client, ClientMetaData>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client, ClientMetaData>) => MutableModel<Client, ClientMetaData> | void): Client;
}

export declare class ChatroomUser {
  readonly id: string;
  readonly authId?: string | null;
  readonly userId?: string | null;
  readonly user?: User | null;
  readonly chatroomId?: string | null;
  readonly chatroom?: Chatroom | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ChatroomUser, ChatroomUserMetaData>);
  static copyOf(source: ChatroomUser, mutator: (draft: MutableModel<ChatroomUser, ChatroomUserMetaData>) => MutableModel<ChatroomUser, ChatroomUserMetaData> | void): ChatroomUser;
}

export declare class ClientUser {
  readonly id: string;
  readonly authId?: string | null;
  readonly userId?: string | null;
  readonly user?: User | null;
  readonly clientId?: string | null;
  readonly client?: Client | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ClientUser, ClientUserMetaData>);
  static copyOf(source: ClientUser, mutator: (draft: MutableModel<ClientUser, ClientUserMetaData>) => MutableModel<ClientUser, ClientUserMetaData> | void): ClientUser;
}