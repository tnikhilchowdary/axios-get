import React, { useEffect, useReducer, useState } from "react";
import axios from 'axios';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState("");

   useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        setUsers(res.data);
        setloading(false);
    })
    .catch((err) => {
        setError("Something went wrong");
        setloading(false)
    })
   }, [])

    return(
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UserList;
