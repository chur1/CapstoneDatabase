import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
    const [qty, setQty] = useState(1);
    return <ShopContext.Provider>{children}</ShopContext.Provider>
}