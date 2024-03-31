'use client';

import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Header from "@/components/Header";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  useEffect(()=>{
    let value = localStorage.getItem("rede-social-yt:token")
      if(!value){
        router.push('/login')
      }
  }, [router]) // Add 'router' to the dependency array
  return (
    <main className="flex min-h-screen flex-col items-center p-3">
      <Header/>
      <div className="w-full flex justify-start pt-5">
        <Sidebar />
        <Feed />
      </div>
    </main>
  );
}
