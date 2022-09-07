/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateChatroom = /* GraphQL */ `
  subscription OnCreateChatroom {
    onCreateChatroom {
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
export const onUpdateChatroom = /* GraphQL */ `
  subscription OnUpdateChatroom {
    onUpdateChatroom {
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
export const onDeleteChatroom = /* GraphQL */ `
  subscription OnDeleteChatroom {
    onDeleteChatroom {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($authId: String) {
    onCreateUser(authId: $authId) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($authId: String) {
    onUpdateUser(authId: $authId) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($authId: String) {
    onDeleteUser(authId: $authId) {
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
export const onCreateChatroomUser = /* GraphQL */ `
  subscription OnCreateChatroomUser($authId: String) {
    onCreateChatroomUser(authId: $authId) {
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
export const onUpdateChatroomUser = /* GraphQL */ `
  subscription OnUpdateChatroomUser($authId: String) {
    onUpdateChatroomUser(authId: $authId) {
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
export const onDeleteChatroomUser = /* GraphQL */ `
  subscription OnDeleteChatroomUser($authId: String) {
    onDeleteChatroomUser(authId: $authId) {
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
export const onCreateClientUser = /* GraphQL */ `
  subscription OnCreateClientUser($authId: String) {
    onCreateClientUser(authId: $authId) {
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
export const onUpdateClientUser = /* GraphQL */ `
  subscription OnUpdateClientUser($authId: String) {
    onUpdateClientUser(authId: $authId) {
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
export const onDeleteClientUser = /* GraphQL */ `
  subscription OnDeleteClientUser($authId: String) {
    onDeleteClientUser(authId: $authId) {
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
