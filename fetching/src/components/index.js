import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useEffect, useState } from "react";
import axios from 'axios'

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] =useState(true)
//Bu kısım FETCH ile yapılmakta
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((e)=>console.log(e))
//       .finally(()=>setIsLoading(false))
//   }, []);

//Bu kısım AXIOS ile yapılmakta
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((e)=>console.log(e))
      .finally(()=>setIsLoading(false))
  }, []);

  

  return (
    <div>
      
      <h1>Users</h1>

      {isLoading && <div>...Loading</div>}

      {users.map((user)=>(
        <div key={user.id}>{user.name}</div>
        ))}
    </div>
  );
}

export default Users;
