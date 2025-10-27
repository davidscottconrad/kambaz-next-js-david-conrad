"use client"
import { useSelector, useDispatch } from "react-redux";

//State Transformer: A reducer is the only way to change the state in a Redux application. 
//It acts as a translator, reading an intent (the action) and executing the corresponding state update.

export default function HelloRedux() {
    //child components select slice state from store
    const { message } = useSelector((state: any) => state.helloReducer);
    return (
        <div id="wd-hello-redux">
            <h3>Hello Redux</h3>
            <h4>{message}</h4> <hr />
        </div>
    );
}