import React, { useState } from "react";

const BackgroundContext = React.createContext();

const Context = ({ children, ...props }) => {
    const [background, setBackground] = useState('white'); 
    
    const changeBackground = (value) => {
        setBackground(value);
    }

    return (
        <BackgroundContext.Provider value={{ background, changeBackground }}>
            {children}
        </BackgroundContext.Provider>
    );
}

export { BackgroundContext, Context };
