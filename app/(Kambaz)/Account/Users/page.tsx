"use client";
import { useState, useEffect } from "react";
import { findAllUsers, findUsersByRole } from "../client";

export default function UsersPage() {
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState("");

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

    const filterUsersByRole = async (selectedRole: string) => {
        setRole(selectedRole);
        if (selectedRole) {
            try {
                const filteredUsers = await findUsersByRole(selectedRole);
                setUsers(filteredUsers);
            } catch (error) {
                console.error("Error filtering users by role:", error);
            }
        } else {
            fetchUsers();
        }
    };

    return (
        <div id="wd-account-users-page">
            <h2>Users Page</h2>

            <div className="mb-3">
                <label htmlFor="wd-role-filter" className="form-label">Filter by Role:</label>
                <select
                    id="wd-role-filter"
                    className="form-select"
                    value={role}
                    onChange={(e) => filterUsersByRole(e.target.value)}
                >
                    <option value="">All Roles</option>
                    <option value="STUDENT">Student</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="ADMIN">Admin</option>
                </select>
            </div>

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