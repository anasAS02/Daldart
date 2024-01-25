'use client'
import { useEffect, useState } from "react";
import { useStatusContext } from "../utils/globalStatus"
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    const { listing, setListing, postsArr } = useStatusContext();
    const handleListing = (listing: string) => {
        setListing(listing);
    }

    const [posts, setPosts] = useState<any[]>([]);
    const [searchKey, setSearckey] = useState<string | null>(null);
    const search = () => {
        if(searchKey === ''){
            setSearckey(null);
        }
        const result = (postsArr).filter((post) => post['data'].title.includes(searchKey));
        setPosts(result);
    }

    useEffect(() => {
        search();
    }, [searchKey])

    return(
        <div className='relative w-full p-5 flex justify-center gap-10 items-center bg-zinc-900'>
            <div className='flex items-center gap-4 text-white'>
                <span onClick={() => handleListing('hot')} className={`cursor-pointer duration-200 hover:text-yellow-500 ${listing === 'hot' && 'text-yellow-500'}`}>Hot</span>
                <span onClick={() => handleListing('new')} className={`cursor-pointer duration-200 hover:text-yellow-500 ${listing === 'new' && 'text-yellow-500'}`}>New</span>
                <span onClick={() => handleListing('raising')} className={`cursor-pointer duration-200 hover:text-yellow-500 ${listing === 'raising' && 'text-yellow-500'}`}>Raising</span>
            </div>
            <span>
                <input type='search' onChange={(e) => setSearckey(e.target.value)} placeholder='Search...' className='w-50 max-md:w-24 bg-zinc-800 p-3 rounded-2xl focus:w-96 max-md:focus:w-32 outline-none' />
                {posts.length > 0 &&
                <div className='p-5 grid grid-cols-4 gap-5 items-center absolute top-28 left-0 w-full h-[200px] overflow-auto rounded-md bg-zinc-900 z-50'>
                    {posts.map((post: any, i) => (
                        <Link key={i} target={"_blank"} href={post['data'].url}>
                            <Image src={post['data'].thumbnail.startsWith('http') ? post['data'].thumbnail : 'https://thecsrjournal.in/wp-content/uploads/2018/10/speed-post.png'} className='duration-200 hover:scale-105 w-[100px] h-[100px] rounded-xl' width={300} height={300} alt={post.title || 'post'} />
                        </Link>
                    ))}
                </div>
                }
            </span>
        </div>
    )
}