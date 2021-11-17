import React from "react";
import { useSelector } from "react-redux";

export default function Users() {
    const users = useSelector((state) => state.Test.users);
    console.log('users', users);
    return (
        <div>
            <h1>Users</h1>
            {users && users.map((item, index) => {
                return <div key={index}>
                    <h4>{item.name}</h4>
                    <h4>{item.email}</h4>
                </div>
            })}
        </div>
    )
}