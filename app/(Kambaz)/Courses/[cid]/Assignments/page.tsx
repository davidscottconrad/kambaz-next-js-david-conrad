export default function Modules() {
    return (
        <div>
            <div id="wd-assignments">
                <input placeholder="Search for Assignments"
                    id="wd-search-assignment" />
                <button id="wd-add-assignment-group">+ Group</button>
                <button id="wd-add-assignment">+ Assignment</button>
                <h3 id="wd-assignments-title">
                    ASSIGNMENTS 40% of Total <button>+</button> </h3>
                <ul id="wd-assignment-list">
                    <li className="wd-assignment-list-item">
                        <a href="/Courses/1234/Assignments/123"
                            className="wd-assignment-link" >
                            A1 - ENV + HTML
                        </a>
                        <p>
                            Multiple Modules | Not Available until May 6 at 12:00am
                            | Due May 13 at 11:59pm | 100pts
                        </p>
                    </li>
                    <li className="wd-assignment-list-item">
                        <a href="/Courses/1234/Assignments/1234"
                            className="wd-assignment-link" >
                            A2 - CSS + Bootstrap
                        </a>

                        <p>
                            Multiple Modules | Not Available until May 13 at 12:00am
                            | Due May 20 at 11:59pm | 100pts
                        </p>
                    </li>
                    <li className="wd-assignment-list-item">
                        <a href="/Courses/1234/Assignments/1235"
                            className="wd-assignment-link" >
                            A3 - JS + React
                        </a>
                        <p>
                            Multiple Modules | Not Available until May 20 at 12:00am
                            | Due May 27 at 11:59pm | 100pts
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
