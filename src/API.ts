/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageInput = {
  id?: string | null,
  body: string,
  userId?: string | null,
  chatroomId?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelMessageConditionInput = {
  body?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  chatroomId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  body: string,
  userId?: string | null,
  from?: User | null,
  chatroomId?: string | null,
  chatroom?: Chatroom | null,
  createdAt?: string | null,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type User = {
  __typename: "User",
  id: string,
  authId?: string | null,
  name: string,
  email: string,
  pushToken?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Chatroom = {
  __typename: "Chatroom",
  id: string,
  name: string,
  clientId?: string | null,
  client?: Client | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Client = {
  __typename: "Client",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMessageInput = {
  id: string,
  body?: string | null,
  userId?: string | null,
  chatroomId?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type CreateChatroomInput = {
  id?: string | null,
  name: string,
  clientId?: string | null,
  _version?: number | null,
};

export type ModelChatroomConditionInput = {
  name?: ModelStringInput | null,
  clientId?: ModelIDInput | null,
  and?: Array< ModelChatroomConditionInput | null > | null,
  or?: Array< ModelChatroomConditionInput | null > | null,
  not?: ModelChatroomConditionInput | null,
};

export type UpdateChatroomInput = {
  id: string,
  name?: string | null,
  clientId?: string | null,
  _version?: number | null,
};

export type DeleteChatroomInput = {
  id: string,
  _version?: number | null,
};

export type CreateClientInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelClientConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
};

export type UpdateClientInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteClientInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  authId?: string | null,
  name: string,
  email: string,
  pushToken?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  authId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  authId?: string | null,
  name?: string | null,
  email?: string | null,
  pushToken?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateChatroomUserInput = {
  id?: string | null,
  authId?: string | null,
  userId?: string | null,
  chatroomId?: string | null,
  _version?: number | null,
};

export type ModelChatroomUserConditionInput = {
  authId?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  chatroomId?: ModelIDInput | null,
  and?: Array< ModelChatroomUserConditionInput | null > | null,
  or?: Array< ModelChatroomUserConditionInput | null > | null,
  not?: ModelChatroomUserConditionInput | null,
};

export type ChatroomUser = {
  __typename: "ChatroomUser",
  id: string,
  authId?: string | null,
  userId?: string | null,
  user?: User | null,
  chatroomId?: string | null,
  chatroom?: Chatroom | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateChatroomUserInput = {
  id: string,
  authId?: string | null,
  userId?: string | null,
  chatroomId?: string | null,
  _version?: number | null,
};

export type DeleteChatroomUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateClientUserInput = {
  id?: string | null,
  authId?: string | null,
  userId?: string | null,
  clientId?: string | null,
  _version?: number | null,
};

export type ModelClientUserConditionInput = {
  authId?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  clientId?: ModelIDInput | null,
  and?: Array< ModelClientUserConditionInput | null > | null,
  or?: Array< ModelClientUserConditionInput | null > | null,
  not?: ModelClientUserConditionInput | null,
};

export type ClientUser = {
  __typename: "ClientUser",
  id: string,
  authId?: string | null,
  userId?: string | null,
  user?: User | null,
  clientId?: string | null,
  client?: Client | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateClientUserInput = {
  id: string,
  authId?: string | null,
  userId?: string | null,
  clientId?: string | null,
  _version?: number | null,
};

export type DeleteClientUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  body?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  chatroomId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChatroomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  clientId?: ModelIDInput | null,
  and?: Array< ModelChatroomFilterInput | null > | null,
  or?: Array< ModelChatroomFilterInput | null > | null,
  not?: ModelChatroomFilterInput | null,
};

export type ModelChatroomConnection = {
  __typename: "ModelChatroomConnection",
  items:  Array<Chatroom | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items:  Array<Client | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  authId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChatroomUserFilterInput = {
  id?: ModelIDInput | null,
  authId?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  chatroomId?: ModelIDInput | null,
  and?: Array< ModelChatroomUserFilterInput | null > | null,
  or?: Array< ModelChatroomUserFilterInput | null > | null,
  not?: ModelChatroomUserFilterInput | null,
};

export type ModelChatroomUserConnection = {
  __typename: "ModelChatroomUserConnection",
  items:  Array<ChatroomUser | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelClientUserFilterInput = {
  id?: ModelIDInput | null,
  authId?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  clientId?: ModelIDInput | null,
  and?: Array< ModelClientUserFilterInput | null > | null,
  or?: Array< ModelClientUserFilterInput | null > | null,
  not?: ModelClientUserFilterInput | null,
};

export type ModelClientUserConnection = {
  __typename: "ModelClientUserConnection",
  items:  Array<ClientUser | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    body: string,
    userId?: string | null,
    from?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    body: string,
    userId?: string | null,
    from?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    body: string,
    userId?: string | null,
    from?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChatroomMutationVariables = {
  input: CreateChatroomInput,
  condition?: ModelChatroomConditionInput | null,
};

export type CreateChatroomMutation = {
  createChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name: string,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChatroomMutationVariables = {
  input: UpdateChatroomInput,
  condition?: ModelChatroomConditionInput | null,
};

export type UpdateChatroomMutation = {
  updateChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name: string,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChatroomMutationVariables = {
  input: DeleteChatroomInput,
  condition?: ModelChatroomConditionInput | null,
};

export type DeleteChatroomMutation = {
  deleteChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name: string,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    authId?: string | null,
    name: string,
    email: string,
    pushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    authId?: string | null,
    name: string,
    email: string,
    pushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    authId?: string | null,
    name: string,
    email: string,
    pushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChatroomUserMutationVariables = {
  input: CreateChatroomUserInput,
  condition?: ModelChatroomUserConditionInput | null,
};

export type CreateChatroomUserMutation = {
  createChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChatroomUserMutationVariables = {
  input: UpdateChatroomUserInput,
  condition?: ModelChatroomUserConditionInput | null,
};

export type UpdateChatroomUserMutation = {
  updateChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChatroomUserMutationVariables = {
  input: DeleteChatroomUserInput,
  condition?: ModelChatroomUserConditionInput | null,
};

export type DeleteChatroomUserMutation = {
  deleteChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateClientUserMutationVariables = {
  input: CreateClientUserInput,
  condition?: ModelClientUserConditionInput | null,
};

export type CreateClientUserMutation = {
  createClientUser?:  {
    __typename: "ClientUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateClientUserMutationVariables = {
  input: UpdateClientUserInput,
  condition?: ModelClientUserConditionInput | null,
};

export type UpdateClientUserMutation = {
  updateClientUser?:  {
    __typename: "ClientUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteClientUserMutationVariables = {
  input: DeleteClientUserInput,
  condition?: ModelClientUserConditionInput | null,
};

export type DeleteClientUserMutation = {
  deleteClientUser?:  {
    __typename: "ClientUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    body: string,
    userId?: string | null,
    from?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      body: string,
      userId?: string | null,
      chatroomId?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      body: string,
      userId?: string | null,
      chatroomId?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChatroomQueryVariables = {
  id: string,
};

export type GetChatroomQuery = {
  getChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name: string,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChatroomsQueryVariables = {
  filter?: ModelChatroomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatroomsQuery = {
  listChatrooms?:  {
    __typename: "ModelChatroomConnection",
    items:  Array< {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChatroomsQueryVariables = {
  filter?: ModelChatroomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChatroomsQuery = {
  syncChatrooms?:  {
    __typename: "ModelChatroomConnection",
    items:  Array< {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncClientsQuery = {
  syncClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    authId?: string | null,
    name: string,
    email: string,
    pushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChatroomUserQueryVariables = {
  id: string,
};

export type GetChatroomUserQuery = {
  getChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChatroomUsersQueryVariables = {
  filter?: ModelChatroomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatroomUsersQuery = {
  listChatroomUsers?:  {
    __typename: "ModelChatroomUserConnection",
    items:  Array< {
      __typename: "ChatroomUser",
      id: string,
      authId?: string | null,
      userId?: string | null,
      chatroomId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChatroomUsersQueryVariables = {
  filter?: ModelChatroomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChatroomUsersQuery = {
  syncChatroomUsers?:  {
    __typename: "ModelChatroomUserConnection",
    items:  Array< {
      __typename: "ChatroomUser",
      id: string,
      authId?: string | null,
      userId?: string | null,
      chatroomId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetClientUserQueryVariables = {
  id: string,
};

export type GetClientUserQuery = {
  getClientUser?:  {
    __typename: "ClientUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListClientUsersQueryVariables = {
  filter?: ModelClientUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientUsersQuery = {
  listClientUsers?:  {
    __typename: "ModelClientUserConnection",
    items:  Array< {
      __typename: "ClientUser",
      id: string,
      authId?: string | null,
      userId?: string | null,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncClientUsersQueryVariables = {
  filter?: ModelClientUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncClientUsersQuery = {
  syncClientUsers?:  {
    __typename: "ModelClientUserConnection",
    items:  Array< {
      __typename: "ClientUser",
      id: string,
      authId?: string | null,
      userId?: string | null,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserByNameQuery = {
  getUserByName?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChatroomsByUserQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatroomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetChatroomsByUserQuery = {
  getChatroomsByUser?:  {
    __typename: "ModelChatroomUserConnection",
    items:  Array< {
      __typename: "ChatroomUser",
      id: string,
      authId?: string | null,
      userId?: string | null,
      chatroomId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUsersByChatroomQueryVariables = {
  chatroomId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatroomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUsersByChatroomQuery = {
  getUsersByChatroom?:  {
    __typename: "ModelChatroomUserConnection",
    items:  Array< {
      __typename: "ChatroomUser",
      id: string,
      authId?: string | null,
      userId?: string | null,
      chatroomId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetClientsByUserQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetClientsByUserQuery = {
  getClientsByUser?:  {
    __typename: "ModelClientUserConnection",
    items:  Array< {
      __typename: "ClientUser",
      id: string,
      authId?: string | null,
      userId?: string | null,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUsersByClientQueryVariables = {
  clientId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelClientUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUsersByClientQuery = {
  getUsersByClient?:  {
    __typename: "ModelClientUserConnection",
    items:  Array< {
      __typename: "ClientUser",
      id: string,
      authId?: string | null,
      userId?: string | null,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    body: string,
    userId?: string | null,
    from?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    body: string,
    userId?: string | null,
    from?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    body: string,
    userId?: string | null,
    from?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChatroomSubscription = {
  onCreateChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name: string,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChatroomSubscription = {
  onUpdateChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name: string,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChatroomSubscription = {
  onDeleteChatroom?:  {
    __typename: "Chatroom",
    id: string,
    name: string,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateClientSubscription = {
  onCreateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateClientSubscription = {
  onUpdateClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteClientSubscription = {
  onDeleteClient?:  {
    __typename: "Client",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  authId?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    authId?: string | null,
    name: string,
    email: string,
    pushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  authId?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    authId?: string | null,
    name: string,
    email: string,
    pushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  authId?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    authId?: string | null,
    name: string,
    email: string,
    pushToken?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChatroomUserSubscriptionVariables = {
  authId?: string | null,
};

export type OnCreateChatroomUserSubscription = {
  onCreateChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChatroomUserSubscriptionVariables = {
  authId?: string | null,
};

export type OnUpdateChatroomUserSubscription = {
  onUpdateChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChatroomUserSubscriptionVariables = {
  authId?: string | null,
};

export type OnDeleteChatroomUserSubscription = {
  onDeleteChatroomUser?:  {
    __typename: "ChatroomUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    chatroomId?: string | null,
    chatroom?:  {
      __typename: "Chatroom",
      id: string,
      name: string,
      clientId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateClientUserSubscriptionVariables = {
  authId?: string | null,
};

export type OnCreateClientUserSubscription = {
  onCreateClientUser?:  {
    __typename: "ClientUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateClientUserSubscriptionVariables = {
  authId?: string | null,
};

export type OnUpdateClientUserSubscription = {
  onUpdateClientUser?:  {
    __typename: "ClientUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteClientUserSubscriptionVariables = {
  authId?: string | null,
};

export type OnDeleteClientUserSubscription = {
  onDeleteClientUser?:  {
    __typename: "ClientUser",
    id: string,
    authId?: string | null,
    userId?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      authId?: string | null,
      name: string,
      email: string,
      pushToken?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    clientId?: string | null,
    client?:  {
      __typename: "Client",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
