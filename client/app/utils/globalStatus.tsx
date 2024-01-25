"use client"
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface contextProps {
    listing: string,
    setListing: Dispatch<SetStateAction<string>>,
    isLoading: boolean,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    postsArr: any[],
    setPostsArr: Dispatch<SetStateAction<any[]>>,
}

const StatusContext = createContext<contextProps>({
    listing: 'hot',
    setListing: (): string => 'hot',
    isLoading: false,
    setIsLoading: (): boolean => false,
    postsArr: [],
    setPostsArr: (): any[] => []
});

export const StatusContextProvider = ({ children }: any) => {
    const [listing, setListing] = useState<string>('hot');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [postsArr, setPostsArr] = useState<any[]>([]);

    return(
        <StatusContext.Provider value={{listing, setListing, isLoading, setIsLoading, postsArr, setPostsArr}}>
            { children }
        </StatusContext.Provider>
    )
}

export const useStatusContext = () => useContext(StatusContext);