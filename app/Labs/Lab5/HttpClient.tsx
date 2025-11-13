"use client"
import * as client from "./client"
import { useEffect, useState } from "react";


export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
    const fetchWelcomeOnClick = async () => {
        const message = await client.fetchWelcomeMessage();
        setWelcomeOnClick(message);
    };
    const fetchWelcomeOnLoad = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };
    //The useEffect Hook does not require direct user interaction to run.
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);

    return (
        <div>
            <h3>HTTP Client</h3> <hr />
            <h4>Requesting on Click</h4>
            <button className="btn btn-primary" onClick={fetchWelcomeOnClick}>
                Fetch Welcome</button> <br />
            Response from server:
            <b>{welcomeOnClick}</b> <br /> <br />
            <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
            <hr />

        </div>);
}
