import { useState } from "react";
export default function Counter() {
    //const count = 7;
    //console.log(count);
    // variable updates on console but fails to update the DOM as desired
    //1. 因为count是const所以不可以直接modify
    //2. update DOM 很费劲，所以不是所有modification都会记录到DOM
    //  只有用 useState 明确说明要update到DOM里才会被updated
    //  否则，counter在screen上并不会更新： <h2>Counter: {count}</h2>
    //     return (
    //         <div id="wd-counter-use-state">
    //             <h2>Counter: {count}</h2> 
    //             <button
    //                 onClick={() => { count++; console.log(count); }}
    //                 id="wd-counter-up-click">Up</button>
    //             <button
    //                 onClick={() => { count--; console.log(count); }}
    //                 id="wd-counter-down-click">Down</button>
    //             <hr /></div>);
    //      }

    //declar count as state variable
    //square bracket: array deconstructing
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            {/*因为count是const所有需要setter function to modify it */}
            <button onClick={() => setCount(count + 1)}
                id="wd-counter-up-click">Up</button>
            <button onClick={() => setCount(count - 1)}
                id="wd-counter-down-click">Down</button>
            <hr /></div>);
}