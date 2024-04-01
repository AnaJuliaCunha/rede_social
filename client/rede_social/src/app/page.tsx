"use client"

import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    let value = localStorage.getItem("rede-social-yt:token")
    if(!value){
      router.push('/login');
    }
  },[])


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header/>
      <div className="w-full flex justify-start pt-10">
        <Sidebar />
        <Feed />
      </div>
    </main>
  );
}
