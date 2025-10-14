export default function FunctionDestructing() {
    // 1) Positional params
    const add = (a: number, b: number) => a + b;
    const sum = add(1, 2);
    // 2) Named params via object destructuring
    const subtract = ({ a, b }: { a: number; b: number }) => a - b;
    const difference = subtract({ a: 4, b: 2 });//object destructing to declare constants a and b
    {/* add(3, 5);                 // OK
        add(5, 3);                 // Different result
        subtract({ a: 10, b: 3 }); // OK
        subtract({ b: 3, a: 10 }); // Also OK (orderless)
    */}

    return (
        <div id="wd-function-destructing">
            <h2>Function Destructing</h2>
            const add = (a, b) =&gt; a + b;<br />
            const sum = add(1, 2);<br />
            const subtract = (&#123; a, b &#125;) =&gt; a - b;<br />
            const difference = subtract(&#123; a: 4, b: 2 &#125;);<br />
            sum = {sum}<br />
            difference = {difference} <hr />
        </div>
    );
}