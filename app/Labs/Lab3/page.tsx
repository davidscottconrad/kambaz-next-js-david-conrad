"use client"
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables"
import IfElse from "./IfElse"
import TernaryOperator from "./TernaryOperator"
import ConditionalOutputIfElse from "./ConditionalOutputIfElse"
import ConditionalOutputInline from "./ConditionalOutputInline"
import LegacyFunctions from "./LegacyFunctions"
import ArrowFunctions from "./ArrowFunctions"
import ImpliedReturn from "./ImpliedReturn"
import TemplateLiterals from "./TemplateLiterals"
import SimpleArrays from "./SimpleArrays"
import ArrayIndexAndLength from "./ArrayIndexAndLength"
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays"
import ForLoops from "./ForLoops"
import MapFunction from "./MapFunction"
import FindFunction from "./FindFunction"
import FindIndex from "./FindIndex"
import FilterFunction from "./FilterFunction"
import JsonStringify from "./JsonStringify"
import House from "./House"
import TodoItem from "./todos/TodoItem"
import TodoList from "./todos/TodoList"
import Spreading from "./Spreading"
import Destructing from "./Destructing"
import FunctionDestructing from "./FunctionDestructing"
import DestructingImports from "./DestructingImports"
import Classes from "./Classes"
import Styles from "./Styles"
import Add from "./Add"
import Square from "./Square"
import Highlight from "./Highlight"
import PathParameters from "./PathParameters"
import AddPathParameters from "./AddPathParameters"
import { Provider } from "react-redux";
import store from "../store";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap"

// export default function Lab3() {

//     const { todos } = useSelector((state: any) => state.todosReducer);
//     //Provider grab the "store" and provides to the components
//     return (
//         <Provider store={store}>
//             <div id="wd-lab3">
//                 <h2>Lab 3</h2>
//                 <ListGroup>
//                     {todos.map((todo: any) => (
//                         <ListGroupItem key={todo.id}>
//                             {todo.title}
//                         </ListGroupItem>
//                     ))}
//                 </ListGroup>
//                 <hr />

//                 <h3>Intro to TypeScript</h3>
//                 <VariablesAndConstants />
//                 <VariableTypes />
//                 <BooleanVariables />
//                 <IfElse />
//                 <TernaryOperator /><br />
//                 <ConditionalOutputIfElse /> <br />
//                 <ConditionalOutputInline /><br />
//                 <LegacyFunctions /><br />
//                 <ArrowFunctions /><br />
//                 <ImpliedReturn /><br />
//                 <TemplateLiterals /><br />
//                 <SimpleArrays />
//                 <ArrayIndexAndLength />
//                 <AddingAndRemovingToFromArrays />
//                 <ForLoops />
//                 <MapFunction />
//                 <FindFunction />
//                 <FindIndex />
//                 <FilterFunction />
//                 <JsonStringify />
//                 <House />
//                 <TodoItem />
//                 <TodoList />
//                 <Spreading />
//                 <Destructing />
//                 <FunctionDestructing />
//                 <DestructingImports />
//                 <Classes />
//                 <Styles />
//                 <Add a={3} b={4} /> {/*把HTML和JS融合一起，passing arguments */}
//                 <h4>Square of 4</h4>
//                 <Square>4</Square> {/*Passing param in Body (有close tag)*/}
//                 <hr />
//                 <Highlight>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
//                     vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
//                 </Highlight>
//                 <PathParameters />
//                 <AddPathParameters />



//             </div>
//         </Provider>

//     )
// }

function Lab3Content() {
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <>
            <h2>Lab 3</h2>
            <ListGroup>
                {todos.map((todo: any) => (
                    <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
                ))}
            </ListGroup>
            <hr />
            <h3>Intro to TypeScript</h3>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator /><br />
            <ConditionalOutputIfElse /> <br />
            <ConditionalOutputInline /><br />
            <LegacyFunctions /><br />
            <ArrowFunctions /><br />
            <ImpliedReturn /><br />
            <TemplateLiterals /><br />
            <SimpleArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingToFromArrays />
            <ForLoops />
            <MapFunction />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <JsonStringify />
            <House />
            <TodoItem />
            <TodoList />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
            <DestructingImports />
            <Classes />
            <Styles />
            <Add a={3} b={4} /> {/*把HTML和JS融合一起，passing arguments */}
            <h4>Square of 4</h4>
            <Square>4</Square> {/*Passing param in Body (有close tag)*/}
            <hr />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <PathParameters />
            <AddPathParameters />



        </>
    );
}

export default function Lab3() {
    return (
        <Provider store={store}>
            <div id="wd-lab3">
                <Lab3Content />
            </div>
        </Provider>
    );
}
