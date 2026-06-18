import { useEffect, useState } from "react";
import { Card } from "./basic/Card";
import { getUsers } from "./api/userApi";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};
export const UserPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
//   const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
    // method 01: use fetch
    //   const response = await fetch(url);
    //   if (response.ok) {
    //     const data = await response.json();
    //     setUsers(data);
    //     console.log(data);
    //   } else {
    //     console.log("Error occurred when fetching data");
    //   }

    // method 02: use Axios
    try {
        const response = await getUsers();
        setUsers(response.data)
    } catch (Error) {
        console.error(Error)
    } finally {
        setIsLoading(false);
    }

    };
    fetchUsers();
  }, []);

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <Card>
              <li key={user.id}>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.phone}</p>
              </li>
            </Card>
          ))}
        </ul>
      )}
    </>
  );
};
