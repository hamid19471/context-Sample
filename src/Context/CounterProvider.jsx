import React, { useState } from "react";

export const counterContext = React.createContext();
export const counterContextDispacher = React.createContext();

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <counterContextDispacher.Provider value={setCount}>
            <counterContext.Provider value={count}>
                {children}
            </counterContext.Provider>
        </counterContextDispacher.Provider>
    );
};

export default CounterProvider;
