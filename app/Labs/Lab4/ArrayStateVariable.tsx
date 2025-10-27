"use client"
import { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  // addElement is defined inside ArrayStateVariable,
  // so it "remembers" (closes over) variables from this scope: `array` and `setArray`.
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  // deleteElement also closes over `array` and `setArray`.
  // Later, when you click, it still "knows" what those were.
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement}>Add Element</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}> {item}
            {/* () => deleteElement(index) (the inline handler) creates a brand-new function 
          for that list item that remembers the specific index for that render. 
          Closure: That’s why each “Delete” button deletes the correct item
          —its handler closed over the right index.*/}
            <button onClick={() => deleteElement(index)}>
              Delete</button>
          </li>))}
      </ul><hr /></div>);
}