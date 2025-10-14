//Arrow function
//const addNum = (a, b) => a + b;   // implicit return
// or
//const addNum = (a, b) => { return a + b; };

//function addNum(){} is hoisted (you can call it before it’s defined).
//const addNum = () => { } is not callable before declaration (TDZ for const).

const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
        <div id="wd-conditional-output-inline">
            {loggedIn && <h2>Welcome Inline</h2>}
            {!loggedIn && <h2>Please login Inline</h2>}
        </div>
    );
};
export default ConditionalOutputInline;