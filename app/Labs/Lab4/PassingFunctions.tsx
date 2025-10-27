"use client"
export default function PassingFunctions(
    // function passed in as a parameter
    { theFunction }: { theFunction: () => void }) { //the function return nothing
    return (
        <div>
            <h2>Passing Functions</h2>
            {/* invoking function with no arguments */}
            <button onClick={theFunction} className="btn btn-primary">
                Invoke the Function
            </button>
            <hr />
        </div>
    );
}