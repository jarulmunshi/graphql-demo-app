// import "./App.css";
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

const query = gql`
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
`;

function App() {
  const { data, loading } = useQuery(query);

  if (loading) {
    return <>Loading....</>;
  }

  return (
    <>
      <table>
        <tbody>
          {data.getToDos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
