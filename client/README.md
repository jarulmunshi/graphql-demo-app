
# GraphQL Client (React + Apollo)

This is the frontend client for the GraphQL demo app.  
It is built with **React + Vite** and uses **Apollo Client** to query the backend.

## Features
- Apollo Client setup with `ApolloProvider`
- Queries todos and displays them with associated users
- Simple table view

## Getting Started

### Install dependencies
```bash
npm install
````

### Run client

```bash
npm run dev
```

Client will be available at:
👉 [http://localhost:5173](http://localhost:5173)

## Example Query Used

```graphql
query GetToDos {
  getToDos {
    id
    title
    completed
    user {
      name
    }
  }
}
```

## Notes

Make sure the backend server is running at `http://localhost:8000/graphql` before starting the client.