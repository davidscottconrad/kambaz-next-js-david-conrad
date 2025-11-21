"use client";
import { useState, useEffect } from "react";
import { findAllUsers, findUsersByRole, findUsersByPartialName, createUser } from "../client";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function UsersPage() {
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState("");
    const [name, setName] = useState("");

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

    const filterUsersByName = async (name: string) => {
        setName(name);
        if (name) {
            const users = await findUsersByPartialName(name);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };

    const createNewUser = async () => {
        try {
            const user = await createUser({
                firstName: "New",
                lastName: `User${users.length + 1}`,
                username: `newuser${Date.now()}`,
                password: "password123",
                email: `email${users.length + 1}@neu.edu`,
                section: "S101",
                role: "STUDENT",
            });
            setUsers([...users, user]);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div id="wd-account-users-page">
            <h2>Users Page</h2>
            <button onClick={createNewUser} className="float-end btn btn-danger wd-add-people mb-3">
                <FaPlus className="me-2" />
                Users
            </button>
            <div className="d-flex mb-3">
                <div className="me-4 d-flex flex-column">
                    <label htmlFor="wd-name-filter" className="form-label">Filter by Name:</label>
                    <FormControl onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
                        className="float-start w-100 me-2 wd-filter-by-name" />
                </div>
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