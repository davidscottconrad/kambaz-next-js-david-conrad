"use client"
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store"
import { setUsers } from "./reducer";
import { useEffect } from "react";
import * as coursesClient from "../../client";
import PeopleTable from "./Table";

export default function People() {
    const { cid } = useParams<{ cid: string }>();
    const { users } = useSelector((state: RootState) => state.peopleReducer);
    const dispatch = useDispatch();
    const fetchUsers = async () => {
        console.log('----people page fetching users---');
        const users = await coursesClient.findUsersForCourse(cid);
        console.log('Found users for course: ', cid);
        console.log('Number of users: ', users.length);
        console.log("Users array content:", users);

        dispatch(setUsers(users));
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <PeopleTable users={users} fetchUsers={fetchUsers} />
        </div>
    )
}