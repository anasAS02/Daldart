'use client'

import axios from "axios"
import { useEffect, useState } from "react";
import { useStatusContext } from "../utils/globalStatus";
import Image from "next/image";
import { PuffLoader } from "react-spinners";
import Link from "next/link";

export default function Posts(){
    const { listing, isLoading, setIsLoading, setPostsArr } = useStatusContext();
    const [posts, setPosts] = useState<any[]>([]);
    const [limit, setLimit] = useState<number>(8);
    const [page, setPage] = useState<number>(1);

    const fetchAndSavePosts = async () => {
        setIsLoading(true);
        try{
            const res = await axios.post('http://localhost:4000/api/posts/', {listing: listing});
            const data = res.data.data;
            setPosts(data);
            setPostsArr(data);
        }catch(err: any){
            console.log(err.response.data.message);
        }finally{
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAndSavePosts();
    }, [listing, page]);

    const postsPerPage = limit;
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const displayedPosts = posts.slice(startIndex, endIndex);

    const handleNextPage = () => {
        setPage(page + 1);
      };
    
    const handlePrevPage = () => {
    if (page > 1) {
        setPage(page - 1);
    }
    };


    return(
        isLoading ?
        <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
            <PuffLoader color="#eee" />
        </div>
        :
        <div className='mt-12 p-20 grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5'>
            {posts.length > 0 && displayedPosts.map((post: any, i) => (
                <div key={i} className='bg-zinc-900 p-4 rounded-3xl flex flex-col justify-center items-center gap-3'>
                    <Link target={"_blank"} href={post['data'].url}>
                        <Image src={post['data'].thumbnail.startsWith('http') ? post['data'].thumbnail : 'https://thecsrjournal.in/wp-content/uploads/2018/10/speed-post.png'} className='duration-200 hover:scale-105 w-[200px] h-[200px] rounded-full' width={300} height={300} alt={post.title || 'post'} />
                    </Link>
                    <h4 title={post['data'].title} className='line-clamp-3 box-'>{post['data'].title}</h4>
                </div>
            ))}
            <div className='col-span-full flex justify-center mt-5'>
                <button onClick={handlePrevPage} className={`${page === 1 ? 'bg-slate-600' : 'bg-blue-500'} text-white px-4 py-2 mr-2 rounded-md`} disabled={page === 1}>Previous</button>
                <button onClick={handleNextPage} className={`${displayedPosts.length < postsPerPage ? 'bg-slate-600' : 'bg-blue-500'} text-white px-4 py-2 ml-2 rounded-md`} disabled={displayedPosts.length < postsPerPage}>Next</button>
            </div>
        </div>
    )
}