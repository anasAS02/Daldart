
export default function Navbar(){
    return(
        <div className='w-full p-5 flex items-center justify-center gap-8 bg-zinc-900 text-white'>
            <span className='cursor-pointer delay-200 hover:text-yellow-500'>Hot</span>
            <span className='cursor-pointer delay-200 hover:text-yellow-500'>New</span>
            <span className='cursor-pointer delay-200 hover:text-yellow-500'>Rising</span>
        </div>
    )
}