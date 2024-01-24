"use client"
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface contextProps {
    listing: string,
    setListing: Dispatch<SetStateAction<string>>,
    isLoading: boolean,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
}

const StatusContext = createContext<contextProps>({
    listing: 'hot',
    setListing: (): string => 'hot',
    isLoading: false,
    setIsLoading: (): boolean => false
});

export const StatusContextProvider = ({ children }: any) => {
    const [listing, setListing] = useState<string>('hot');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return(
        <StatusContext.Provider value={{listing, setListing, isLoading, setIsLoading}}>
            { children }
        </StatusContext.Provider>
    )
}

export const useStatusContext = () => useContext(StatusContext);