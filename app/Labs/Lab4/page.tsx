"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent"
import PassingFunctions from "./PassingFunctions"
import EventObject from "./EventObject"
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables"
import StringStateVariables from "./StringStateVariables"
import DateStateVariable from "./DateStateVariable"
import ObjectStateVariable from "./ObjectStateVariable"
import ArrayStateVariable from "./ArrayStateVariable"
import ParentStateComponent from "./ParentStateComponent"
import ReduxExamples from "./ReduxExamples/page";
import store from "./store";
import { Provider } from "react-redux"; //Provider is the glue between React and Redux



export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }

    //Provider grab the "store" and provides to the components
    return (
        <Provider store={store}>
            <div id="wd-lab3">
                <h2>Lab 4</h2>
                <h3>Maintaining State in React Applications</h3>
                <ClickEvent />
                <PassingDataOnEvent />
                <PassingFunctions theFunction={sayHello} /> {/*pass callback function as a parameter */}
                <EventObject />
                <Counter />
                <BooleanStateVariables />
                <StringStateVariables />
                <DateStateVariable />
                <ObjectStateVariable />
                <ArrayStateVariable />
                <ParentStateComponent />
                <ReduxExamples />



            </div>
        </Provider>
    )
}