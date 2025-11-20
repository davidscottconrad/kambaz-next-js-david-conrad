"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import * as client from "@/app/(Kambaz)/Account/client";
import * as db from "../../../Database";

type User = {
    _id: string;
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    dob?: string;
    role?: string;
    loginId?: string;
    section?: string;
    lastActivity?: string;
    totalActivity?: string;
};

export default function PeopleTable() {
    const [users, setUsers] = useState<User[]>([]);
    const { cid } = useParams();
    const { enrollments } = db;

    const fetchUsers = async () => {
        const allUsers = await client.findAllUsers();
        setUsers(allUsers);
    };

    useEffect(() => {
        fetchUsers();
    }, [cid]);


    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        .filter((user) =>
                            enrollments.some((enrollment: any) =>
                                enrollment.user === user._id && enrollment.course === cid
                            )
                        )
                        .map((user) => (
                            <tr key={user._id}>
                                <td className="wd-full-name text-nowrap">
                                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                                    <span className="wd-first-name">{user.firstName}</span>{" "}
                                    <span className="wd-last-name">{user.lastName}</span>
                                </td>
                                <td className="wd-login-id">{user.loginId}</td>
                                <td className="wd-section">{user.section}</td>
                                <td className="wd-role">{user.role}</td>
                                <td className="wd-last-activity">{user.lastActivity}</td>
                                <td className="wd-total-activity">{user.totalActivity}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
}
