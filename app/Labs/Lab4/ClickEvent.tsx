"use client";
const hello = () => {
    alert("Hello World!");
};
const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};
export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
            {/*onClick={hello} passes a function reference. 
            React will call it later when the button is clicked.
            onClick={hello()} would call the function right now during render 
            and pass its return value (likely undefined) as the handler
            —so nothing happens on click and you’ll also trigger the alert immediately.*/}
            <button onClick={hello} id="wd-hello-world-click">Hello World!</button>

            {/*ArrowFunctions with parameters
            wrap in function if you need to pass parameters*/}
            <button onClick={() => lifeIs("Good!")} id="wd-life-is-good-click">Life is Good!</button>

            {/*Bad Practice that there are more than 1 line of code in the function
            // wrap in {} if you need more than one line of code
            // calling hello()
            // calling lifeIs()
            */}
            <button onClick={() => {
                hello();
                lifeIs("Great!");
            }} id="wd-life-is-great-click">
                Life is Great!
            </button>
            <hr />
        </div>
    );
}