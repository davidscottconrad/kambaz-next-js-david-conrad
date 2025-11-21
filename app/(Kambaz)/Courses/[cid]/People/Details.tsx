import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import { FormControl, FormSelect } from "react-bootstrap";
import Link from "next/link";
import * as client from "../../../Account/client";

export default function PeopleDetails({ uid, onClose }: { uid: string | null; onClose: () => void; }) {
    const [user, setUser] = useState<any>({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [editing, setEditing] = useState(false);
    const [editingEmail, setEditingEmail] = useState(false);
    const [editingRole, setEditingRole] = useState(false);

    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
        setEmail(user.email || "");
        setRole(user.role || "");
    };

    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = { ...user, firstName, lastName };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        onClose();
    };

    const saveEmail = async () => {
        const updatedUser = { ...user, email };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditingEmail(false);
        onClose();
    };

    const saveRole = async () => {
        const updatedUser = { ...user, role };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditingRole(false);
        onClose();
    };

    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        onClose();
    };

    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);

    if (!uid) return null;

    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <button onClick={onClose} className="btn position-fixed end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1" />
            </button>
            <div className="text-center mt-2">
                <FaUserCircle className="text-secondary me-2 fs-1" />
            </div>
            <hr />
            <div className="text-danger fs-4">
                {!editing && (
                    <FaPencil onClick={() => setEditing(true)}
                        className="float-end fs-5 mt-2 wd-edit" />
                )}
                {editing && (
                    <FaCheck onClick={() => saveUser()}
                        className="float-end fs-5 mt-2 me-2 wd-save" />
                )}
                {!editing && (
                    <div className="wd-name"
                        onClick={() => setEditing(true)}
                        style={{ cursor: "pointer" }}>
                        {user.firstName} {user.lastName}
                    </div>
                )}
                {user && editing && (
                    <FormControl className="w-50 wd-edit-name"
                        defaultValue={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { saveUser(); }
                        }} />
                )}
            </div>

            <div className="mt-3">
                <b>Email:</b>{" "}
                {!editingEmail && (
                    <FaPencil onClick={() => setEditingEmail(true)}
                        className="float-end fs-6 mt-1 wd-edit-email" style={{ cursor: "pointer" }} />
                )}
                {editingEmail && (
                    <FaCheck onClick={() => saveEmail()}
                        className="float-end fs-6 mt-1 me-2 wd-save-email" style={{ cursor: "pointer" }} />
                )}
                <br />
                {!editingEmail && (
                    <span className="wd-email"
                        onClick={() => setEditingEmail(true)}
                        style={{ cursor: "pointer" }}>
                        {user.email}
                    </span>
                )}
                {editingEmail && (
                    <FormControl
                        type="email"
                        className="w-75 wd-edit-email-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { saveEmail(); }
                        }} />
                )}
            </div>

            <div className="mt-3">
                <b>Role:</b>{" "}
                {!editingRole && (
                    <FaPencil onClick={() => setEditingRole(true)}
                        className="float-end fs-6 mt-1 wd-edit-role" style={{ cursor: "pointer" }} />
                )}
                {editingRole && (
                    <FaCheck onClick={() => saveRole()}
                        className="float-end fs-6 mt-1 me-2 wd-save-role" style={{ cursor: "pointer" }} />
                )}
                <br />
                {!editingRole && (
                    <span className="wd-roles"
                        onClick={() => setEditingRole(true)}
                        style={{ cursor: "pointer" }}>
                        {user.role}
                    </span>
                )}
                {editingRole && (
                    <FormSelect
                        className="w-75 wd-edit-role-select"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select Role</option>
                        <option value="STUDENT">Student</option>
                        <option value="TA">TA</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="ADMIN">Admin</option>
                    </FormSelect>
                )}
            </div>

            <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
            <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
            <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>
            <hr />
            <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete">
                Delete
            </button>
            <button onClick={onClose} className="btn btn-secondary float-end me-2 wd-cancel">
                Cancel
            </button>
        </div>
    );
}
