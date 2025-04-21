"use client"

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({children}) {
    const [state, setState] = useState({
        text: "Hello World From Context",
    })
    return (
        <AppContext.Provider value={{state, setState}}>
            {children}
        </AppContext.Provider>
    )
}

export function useApContext() {
    return useContext(AppContext)
}