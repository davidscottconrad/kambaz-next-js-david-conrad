"use client";
import { useState, useEffect } from "react";
import { findAllUsers } from "../client";

export default function UsersPage() {
    const [users, setUsers] = useState<any[]>([]);

    const fetchUsers = async () => {
        try {
            const allUsers = await findAllUsers();
            setUsers(allUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div id="wd-account-users-page">
            <h2>Users Page</h2>
            <div id="wd-users-table">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: any) => (
                            <tr key={user._id}>
                                <td>{user.username}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}