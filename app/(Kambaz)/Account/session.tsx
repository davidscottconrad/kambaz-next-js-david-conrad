import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";

export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();
    const pathname = usePathname(); // Track route changes

    const fetchProfile = async () => {
        try {
            const currentUser = await client.profile();
            dispatch(setCurrentUser(currentUser));
        } catch (err: any) {
            console.error(err);
            dispatch(setCurrentUser(null)); // Clear user on error
        }
        setPending(false);
    };

    useEffect(() => {
        fetchProfile();
    }, [pathname]); // Re-fetch on route change

    if (!pending) {
        return children;
    }

    return <div>Loading...</div>; // Show loading state
}
