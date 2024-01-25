'use client'
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Posts />
    </main>
  );
}
