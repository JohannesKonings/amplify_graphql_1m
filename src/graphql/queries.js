/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlock = /* GraphQL */ `
  query GetBlock($id: ID!) {
    getBlock(id: $id) {
      id
      tasks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlocks = /* GraphQL */ `
  query ListBlocks(
    $filter: ModelBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      blockId
      title
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        blockId
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tasksByBlockId = /* GraphQL */ `
  query TasksByBlockId(
    $blockId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByBlockId(
      blockId: $blockId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        blockId
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
