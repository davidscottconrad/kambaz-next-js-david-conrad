export default function FindFunction() {
    const numberArray1 = [1, 2, 3, 4, 5];
    const stringArray1 = ["string1", "string2", "string3"];
    const four = numberArray1.find((a) => a === 4);
    const string3 = stringArray1.find((a) => a === "string3");

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');
    return (
        <div id="wd-find-function">
            <h4>Find Function</h4>
            four = {four} <br />
            string3 = {string3} <hr />

            <h4>FindIndex Function</h4>
            fourIndex = {fourIndex} <br />
            string3Index = {string3Index} <br />
        </div>
    );
}
