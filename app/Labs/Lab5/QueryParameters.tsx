"use client"
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    const HTTP_SERVER =
        process.env.NEXT_PUBLIC_HTTP_SERVER;
    return (
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>

            <FormControl defaultValue={a} type="number"
                onChange={(e) => setA(e.target.value)} />

            <FormControl defaultValue={b} type="number"
                onChange={(e) => setB(e.target.value)} />
            <br />
            <a className="btn btn-primary"
                href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
                Add {a} + {b} </a>

            <a className="btn btn-success "
                href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
                Substract {a} - {b} </a>

        </div>)

}