export default function Navbar(){
    return(
        <div className='w-full p-5 flex justify-center gap-10 items-center bg-zinc-900'>
            <div className='categories flex items-center gap-4 text-white'>
                <span className='cursor-pointer delay-200 hover:text-yellow-500'>Hot</span>
                <span className='cursor-pointer delay-200 hover:text-yellow-500'>New</span>
                <span className='cursor-pointer delay-200 hover:text-yellow-500'>Raising</span>
            </div>
            <input type='search' placeholder='Search...' className='w-50 bg-zinc-800 p-3 rounded-2xl focus:w-96 outline-none' />
        </div>
    )
}