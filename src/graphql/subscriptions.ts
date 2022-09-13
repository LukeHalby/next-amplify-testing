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
  subscription OnCreateUser {
    onCreateUser {
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
  subscription OnUpdateUser {
    onUpdateUser {
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
  subscription OnDeleteUser {
    onDeleteUser {
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
  subscription OnCreateChatroomUser {
    onCreateChatroomUser {
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
  subscription OnUpdateChatroomUser {
    onUpdateChatroomUser {
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
  subscription OnDeleteChatroomUser {
    onDeleteChatroomUser {
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
  subscription OnCreateClientUser {
    onCreateClientUser {
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
  subscription OnUpdateClientUser {
    onUpdateClientUser {
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
  subscription OnDeleteClientUser {
    onDeleteClientUser {
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
