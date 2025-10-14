export default function AddingAndRemovingToFromArrays() {
    const numberArray1 = [1, 2, 3, 4, 5]; //never reassign the variables themselves—only mutate their contents—so they should be const.
    const stringArray1 = ["string1", "string2"];
    const todoArray = [<li key="buy-milk">Buy milk</li>,
    <li key="feed-pets">Feed the pets</li>];

    // mutate contents (const is fine; we're not reassigning the variables)
    numberArray1.push(6); // adding new items
    stringArray1.push("string3");
    todoArray.push(<li key="walk-dogs">Walk the dogs</li>);
    numberArray1.splice(2, 1); // remove 1 item starting at 2
    stringArray1.splice(1, 1);
    return (
        <div id="wd-adding-removing-from-arrays">
            <h4>Add/remove to/from arrays</h4>
            numberArray1 = {numberArray1} <br />
            stringArray1 = {stringArray1} <br />
            Todo list:
            <ol>
                {todoArray.map(t => (
                    <li key={t.key}>{t}</li>
                ))}
            </ol><hr />
        </div>);
}