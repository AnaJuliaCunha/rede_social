"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {FaSearch, FaBell} from "react-icons/fa";
import {TbMessageCircle2Filled} from "react-icons/tb";


function Header(){

    const [user, setUser] = useState({username: "", userImg: ""});
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        let value = localStorage.getItem("rede-social-yt:user")
        if(value){
            setUser(JSON.parse(value))
        }
    }, [])

    const logout = (e:any)=>{
        e.preventDefault();
        localStorage.removeItem("rede-social-yt:token");
        router.push('/login')
    }

    return(
        <header className="w-full bg-white flex justify-between py-2 px-3 items-center shadow-md">
            <Link href='/' className="font-bold text-sky-900 text-lg">BLUEMARBLE</Link>
            <div className="flex bg-zinc-100 items-center text-gray-600 px-3 py-1 rounded-full">
                <input type="text" placeholder= "Pesquisar" className="bg-zinc-100 focus-visible:outline-none"/>
                <FaSearch />
            </div>
            <div className="flex gap-3 items-center text-gray-600">
                <div className=" flex gap-2">
                    <button className="bg-zinc-200 p-2 rounded-full hover:bg-zinc-300">
                        <TbMessageCircle2Filled />
                    </button>
                    <button className="bg-zinc-200 p-2 rounded-full hover:bg-zinc-300">
                        <FaBell />
                    </button>
                </div>
                <div className="relative" onMouseLeave={()=>setShowMenu(false)}>
                    <button className="flex gap-2 items-center" onClick={()=>setShowMenu(!showMenu)}>
                        <img src={user.userImg.length >0? user.userImg: "https://img.freepik.com/free-icon/user_318-159711.jpg"} className="w-11 h-10 rounded-full" alt="Imagem de Perfil"/>
                        <span className="font-bold">{user.username}</span>
                    </button>
                    {showMenu && (
                    <div className="absolute flex flex-col bg-white p-4 shadow-md rounded-md gap-2 border-t whitespace-nowrap right-[-8px]">
                        <Link href="" className="border-b">Editar Perfil</Link>
                        <Link href="" onClick={(e)=>logout(e)}>Logout</Link>
                    </div>
                    )}
                </div>
            </div>
        </header>
    );
}
export default Header;