import React, { useContext } from "react";
import { counterContext, counterContextDispacher } from "./CounterProvider";
const CounterActions = () => {
    const count = useContext(counterContext);
    const setCount = useContext(counterContextDispacher);

    const handleIncreament = () => {
        setCount(count + 1);
    };

    const handleDecreament = () => {
        count > 1 ? setCount(count - 1) : setCount(0);
    };
    return (
        <div>
            <h2>Count is : {count}</h2>
            <button onClick={handleIncreament}>Increament</button>
            <button onClick={handleDecreament}>Decreament</button>
        </div>
    );
};

export default CounterActions;
