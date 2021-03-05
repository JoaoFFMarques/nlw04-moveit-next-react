import { createContext, ReactNode, useState } from "react";


interface SideBarContextData {
    isHome: boolean;
    visitHome: () => void;
    visitRank: () => void;
}

interface SideBarProviderProps {
    children: ReactNode;
}

export const SideBarContext = createContext({} as SideBarContextData);

let isHome = true;

export function SideBarProvider({ children }: SideBarProviderProps) {




    function visitHome() {
        isHome = true;
        console.log("vai rpa casa")
    }

    function visitRank() {
        isHome = false;
    }

    return (
        <SideBarContext.Provider value={{
            isHome,
            visitHome,
            visitRank
        }}>
            {children}
        </SideBarContext.Provider>
    )
}