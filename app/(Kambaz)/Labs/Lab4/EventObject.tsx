import { useState } from "react";
export default function EventObject() {
    const [event, setEvent] = useState(null);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.target = e.target;
        // Avoid deleting properties from the event object directly
        // Instead, create a shallow copy and remove the 'view' property if present
        /** eslint-disable-next-line @typescript-eslint/no-explicit-any */
        const eventCopy = { ...e } as any; // React.MouseEvent<HTMLButtonElement>;
        if (eventCopy.view) {
            delete eventCopy.view;
        }
        setEvent(eventCopy);
    };
    return (
        <div>
            <h2>Event Object</h2>
            <button onClick={(e) => handleClick(e)}
                className="btn btn-primary"
                id="wd-display-event-obj-click">
                Display Event Object
            </button>
            <pre>{JSON.stringify(event, null, 2)}</pre>
            <hr />
        </div>
    );
}
