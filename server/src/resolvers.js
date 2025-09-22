const axios = require("axios");

const resolvers = {
  ToDo: {
    user: async (todo) =>
      (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)).data,
  },
  Query: {
    getToDos: async () =>
      (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
    getAllUsers: async () =>
      (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
    getUser: async (_, { id }) =>
      (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data,
  },
};

module.exports = { resolvers };
