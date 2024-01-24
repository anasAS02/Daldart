'use client'
import { useStatusContext } from "../utils/globalStatus"

export default function Navbar(){
    const { listing, setListing } = useStatusContext();
    const handleListing = (listing: string) => {
        setListing(listing)
    }
    return(
        <div className='w-full p-5 flex justify-center gap-10 items-center bg-zinc-900'>
            <div className='flex items-center gap-4 text-white'>
                <span onClick={() => handleListing('hot')} className={`cursor-pointer delay-200 hover:text-yellow-500 ${listing === 'hot' && 'text-yellow-500'}`}>Hot</span>
                <span onClick={() => handleListing('new')} className={`cursor-pointer delay-200 hover:text-yellow-500 ${listing === 'new' && 'text-yellow-500'}`}>New</span>
                <span onClick={() => handleListing('raising')} className={`cursor-pointer delay-200 hover:text-yellow-500 ${listing === 'raising' && 'text-yellow-500'}`}>Raising</span>
            </div>
            <input type='search' placeholder='Search...' className='w-50 bg-zinc-800 p-3 rounded-2xl focus:w-96 outline-none' />
        </div>
    )
}