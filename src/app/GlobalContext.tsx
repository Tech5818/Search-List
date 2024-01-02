"use client";

import React, { useState, createContext } from "react"

type ContextType = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const defaultValue: ContextType = {
    search: "",
    setSearch: () => {}
}

export const GlobalContexts = createContext(defaultValue);

export const GlobalContext = ({ children } : { children: React.ReactNode }) => {
    const [search, setSearch] = useState("");

    return(
        <GlobalContexts.Provider value={{search, setSearch}}>
            {children}
        </GlobalContexts.Provider>
    )
}