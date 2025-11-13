import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters"
import QueryParameters from "./QueryParameters"
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays"
import HttpClient from "./HttpClient";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
function Lab5() {
    return (
        <div>
            <h1>Lab 5</h1>
            <a href={`${HTTP_SERVER}/Lab5/welcome`}>Welcome</a>
            {/* <a href="http://localhost:4000/Lab5/welcome"> Welcome</a> */}
            <EnvironmentVariables /> <br /><br />
            <PathParameters /> <br /><br />
            <QueryParameters /><br /><br />
            <WorkingWithObjects /><br /><br />
            <WorkingWithArrays /><br /><br />
            <HttpClient /><br /><br />
            <WorkingWithObjectsAsynchronously /><br /><br />
            <WorkingWithArraysAsynchronously /><br /><br />
        </div>
    );
}
export default Lab5;