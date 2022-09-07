/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      body
      userId
      from {
        id
        authId
        name
        email
        pushToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      chatroomId
      chatroom {
        id
        name
        clientId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      body
      userId
      from {
        id
        authId
        name
        email
        pushToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      chatroomId
      chatroom {
        id
        name
        clientId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      body
      userId
      from {
        id
        authId
        name
        email
        pushToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      chatroomId
      chatroom {
        id
        name
        clientId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createChatroom = /* GraphQL */ `
  mutation CreateChatroom(
    $input: CreateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    createChatroom(input: $input, condition: $condition) {
      id
      name
      clientId
      client {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateChatroom = /* GraphQL */ `
  mutation UpdateChatroom(
    $input: UpdateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    updateChatroom(input: $input, condition: $condition) {
      id
      name
      clientId
      client {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteChatroom = /* GraphQL */ `
  mutation DeleteChatroom(
    $input: DeleteChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    deleteChatroom(input: $input, condition: $condition) {
      id
      name
      clientId
      client {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      authId
      name
      email
      pushToken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      authId
      name
      email
      pushToken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      authId
      name
      email
      pushToken
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createChatroomUser = /* GraphQL */ `
  mutation CreateChatroomUser(
    $input: CreateChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    createChatroomUser(input: $input, condition: $condition) {
      id
      authId
      userId
      user {
        id
        authId
        name
        email
        pushToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      chatroomId
      chatroom {
        id
        name
        clientId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateChatroomUser = /* GraphQL */ `
  mutation UpdateChatroomUser(
    $input: UpdateChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    updateChatroomUser(input: $input, condition: $condition) {
      id
      authId
      userId
      user {
        id
        authId
        name
        email
        pushToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      chatroomId
      chatroom {
        id
        name
        clientId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteChatroomUser = /* GraphQL */ `
  mutation DeleteChatroomUser(
    $input: DeleteChatroomUserInput!
    $condition: ModelChatroomUserConditionInput
  ) {
    deleteChatroomUser(input: $input, condition: $condition) {
      id
      authId
      userId
      user {
        id
        authId
        name
        email
        pushToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      chatroomId
      chatroom {
        id
        name
        clientId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createClientUser = /* GraphQL */ `
  mutation CreateClientUser(
    $input: CreateClientUserInput!
    $condition: ModelClientUserConditionInput
  ) {
    createClientUser(input: $input, condition: $condition) {
      id
      authId
      userId
      user {
        id
        authId
        name
        email
        pushToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      clientId
      client {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateClientUser = /* GraphQL */ `
  mutation UpdateClientUser(
    $input: UpdateClientUserInput!
    $condition: ModelClientUserConditionInput
  ) {
    updateClientUser(input: $input, condition: $condition) {
      id
      authId
      userId
      user {
        id
        authId
        name
        email
        pushToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      clientId
      client {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteClientUser = /* GraphQL */ `
  mutation DeleteClientUser(
    $input: DeleteClientUserInput!
    $condition: ModelClientUserConditionInput
  ) {
    deleteClientUser(input: $input, condition: $condition) {
      id
      authId
      userId
      user {
        id
        authId
        name
        email
        pushToken
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      clientId
      client {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
