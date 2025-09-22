# GraphQL Server

This is the backend server for the GraphQL demo app.  
It uses **Apollo Server + Express** and fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).

## Features
- GraphQL schema defined in `src/schema.js`
- Resolvers separated in `src/resolvers.js`
- Supports queries for Users and Todos
- Demonstrates field-level resolvers (`ToDo.user` → User)

## Getting Started

### Install dependencies
```bash
npm install
````

### Run server

```bash
node src/index.js
```

Server will be available at:
👉 [http://localhost:8000/graphql](http://localhost:8000/graphql)

## Example Query

```graphql
query {
  getToDos {
    id
    title
    completed
    user {
      name
      email
    }
  }
}
```

