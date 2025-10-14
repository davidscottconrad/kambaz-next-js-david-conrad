export default function IfElse() {
    //The true1 paragraph is only rendered if true1 is true.
    // The ternary operators ? and : can be used to render one 
    // of two options based on the value of a boolean expression.

    const true1 = true, false1 = false;

    return (
        <div id="wd-if-else">
            <h4>If Else</h4>
            {true1 && <p>true1</p>}
            {!false1 ? <p>!false1</p> : <p>false1</p>} <hr />
        </div>

    )
}