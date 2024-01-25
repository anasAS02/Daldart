'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useStatusContext } from "./utils/globalStatus";

export default function Home() {
  const {isLoading} = useStatusContext();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
}
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Posts />
      {!isLoading && <FontAwesomeIcon onClick={scrollToTop} icon={faCircleArrowUp} className='absolute right-5 bottom-0 max-md:w-[30px] max-md:h-[30px] w-[60px] h-[60px] cursor-pointer duration-300 hover:text-yellow-500 animate-bounce' />}
    </main>
  );
}
