import { useEffect, useState } from "react";
import { Card } from "./basic/Card";
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
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } else {
        console.log("Error occurred when fetching data");
      }
    };
    fetchUsers();
  }, []);

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
