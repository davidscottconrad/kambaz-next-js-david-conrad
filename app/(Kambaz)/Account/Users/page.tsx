"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "../../Courses/[cid]/People/Table";
import * as client from "../client";
import { FaPlus } from "react-icons/fa";
export default function Users() {
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const filterUsersByRole = async (role: string) => {
        setRole(role);
        if (role) {
            const users = await client.findUsersByRole(role);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };
    const createUser = async () => {
        const user = await client.createUser({
            firstName: "New",
            lastName: `User${users.length + 1}`,
            username: `newuser${Date.now()}`,
            password: "password123",
            section: "S101",
            role: "STUDENT",
        });
        console.log('After create User: ', user.firstName);
        setUsers([...users, user]);
    };

    const filterUsersByName = async (name: string) => {
        setName(name);
        if (name) {
            const users = await client.findUsersByPartialName(name);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };

    const { uid } = useParams();
    //no need reducer because it's only being used within this 1 page, not shared across.
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, [uid]);
    return (
        <div>
            <button onClick={createUser} className="float-end btn btn-danger">
                <FaPlus className="me-2" />  People </button>

            <h3>Users</h3>
            <input placeholder="Search people" onChange={
                (e) => filterUsersByName(e.target.value)}
                className="form-control float-start w-25" />
            <select value={role} onChange={
                (e) => filterUsersByRole(e.target.value)}
                className="form-select float-start w-25 wd-select-role" >
                <option value="">All Roles</option>
                <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Administrators</option>
            </select>

            <PeopleTable users={users} fetchUsers={fetchUsers} />
        </div>
    );
}
