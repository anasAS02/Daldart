'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import { useStatusContext } from "./utils/globalStatus";

export default function Home() {
  const {isLoading, listing} = useStatusContext();
  console.log(isLoading, listing)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Posts />
    </main>
  );
}
