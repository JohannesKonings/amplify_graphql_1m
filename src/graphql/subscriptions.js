/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlock = /* GraphQL */ `
  subscription OnCreateBlock {
    onCreateBlock {
      id
      tasks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlock = /* GraphQL */ `
  subscription OnUpdateBlock {
    onUpdateBlock {
      id
      tasks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlock = /* GraphQL */ `
  subscription OnDeleteBlock {
    onDeleteBlock {
      id
      tasks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      blockId
      title
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      blockId
      title
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      blockId
      title
      createdAt
      updatedAt
    }
  }
`;
