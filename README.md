# GraphQL Demo App

This is a full-stack **GraphQL demo application** with:

- **Server**: Node.js + Express + Apollo Server  
- **Client**: React + Vite + Apollo Client  

The project demonstrates:
- GraphQL schema & resolvers (separated in server)  
- Queries and nested resolvers (Todos with User info)  
- Apollo Client integration on frontend  

---

## 📂 Project Structure

```

graphql-demo/
├── client/     # React + Apollo Client frontend
├── server/     # Node + Apollo Server backend
└── README.md   # This file

````

Each subfolder (`client/`, `server/`) has its own README with setup instructions.  

---

## 🚀 Getting Started

### 1. Clone Repo
```bash
git clone https://github.com/jarulmunshi/graphql-demo-app.git
cd graphql-demo
````

### 2. Run Server

```bash
cd server
npm install
node src/index.js
```

Server runs at 👉 [http://localhost:8000/graphql](http://localhost:8000/graphql)

### 3. Run Client

```bash
cd ../client
npm install
npm run dev
```

Client runs at 👉 [http://localhost:5173](http://localhost:5173)

---

## 🧪 Example Query

You can try this query at [http://localhost:8000/graphql](http://localhost:8000/graphql):

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

---

## 📦 Tech Stack

* **Backend**: Node.js, Express, Apollo Server, GraphQL
* **Frontend**: React, Vite, Apollo Client

---

## 👨‍💻 Development

* `client/README.md` → details about React client setup
* `server/README.md` → details about Node server setup
