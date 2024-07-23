import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const handleNum1Change = (e) => setNum1(e.target.value);
    const handleNum2Change = (e) => setNum2(e.target.value);

    const add = () => setResult(parseFloat(num1) + parseFloat(num2));
    const subtract = () => setResult(parseFloat(num1) - parseFloat(num2));
    const multiply = () => setResult(parseFloat(num1) * parseFloat(num2));
    const divide = () => setResult(parseFloat(num1) / parseFloat(num2));

    return ( <
        div >
        <
        h1 > Simple Calculator < /h1> <
        input type = "number"
        value = { num1 }
        onChange = { handleNum1Change }
        placeholder = "First number" / >
        <
        input type = "number"
        value = { num2 }
        onChange = { handleNum2Change }
        placeholder = "Second number" / >
        <
        div >
        <
        button onClick = { add } > Add < /button> <
        button onClick = { subtract } > Subtract < /button> <
        button onClick = { multiply } > Multiply < /button> <
        button onClick = { divide } > Divide < /button> < /
        div > {
            result !== null && ( <
                div >
                <
                h2 > Result: { result } < /h2> < /
                div >
            )
        } <
        /div>
    );
};

export default Calculator;