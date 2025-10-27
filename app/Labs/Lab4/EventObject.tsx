import { useState } from "react";
export default function EventObject() {
    const [event, setEvent] = useState(null);
    const handleClick = (e: any) => {
        e.target = e.target.outerHTML;
        // replace target with HTML
        // to avoid circular reference

        delete e.view;
        setEvent(e);
        // set event object
        // so it can be displayed
    };
    return (
        <div>
            <h2>Event Object</h2>
            <button onClick={(e) => handleClick(e)}
                className="btn btn-primary"
                id="wd-display-event-obj-click">
                Display Event Object
            </button>
            {/* button that triggers events when clicked passes event
                to handler to update variable

            convert event object into string to display */}
            <pre>{JSON.stringify(event, null, 2)}</pre>
            <hr />
        </div>
    );
}