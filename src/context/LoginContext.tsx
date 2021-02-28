import { createContext, ReactNode, useState } from "react";

interface LoginContextData {
    userName: string;
    imageSource: string;
    isLoged: boolean;
    setName: () => void;
    sessionOn: () => boolean;
}

interface LoginProviderProps {
    children: ReactNode;
}


export const LoginContext = createContext({} as LoginContextData);

let countdownTimeout: NodeJS.Timeout

let timer = 0.1;

export function LoginProvider({ children }: LoginProviderProps) {
    const [isLoged, setIsLoged] = useState(false);

    const [userName, setUserName] = useState(null);

    const [imageSource, setImageSource] = useState(null);

    function setName() {

    }

    function sessionOn() {
        return isLoged;
    }

    return (
        <LoginContext.Provider value={{
            userName,
            imageSource,
            isLoged,
            setName,
            sessionOn
        }}>
            {children}
        </LoginContext.Provider>
    );
}