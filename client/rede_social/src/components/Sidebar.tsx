import Link from "next/link";
import {
    FaAlignLeft, 
    FaUserFriends, 
    FaPeopleArrows, 
    FaStore,
    FaCalendar,
    FaBookmark,
} from "react-icons/fa";

import { TbClockHour4 } from "react-icons/tb";
import { useState, useEffect } from "react";


interface IUser{
    userImg: string,
    username: string
}

export default function Sidebar(){

    const [user, setUser] = useState<IUser | undefined>(undefined);

    useEffect(()=>{
        let value = localStorage.getItem("rede-social-yt:user")
        if(value){
            setUser(JSON.parse(value))
        }
    }, [])

    return(
        <aside className="pl-4 ">
            <nav className="flex flex-col gap-6 text-gray-600 font-semibold">
                <Link href='' className="flex gap-2 pb-6 items-center">
                <img src={user ?.userImg ? user.userImg: "https://img.freepik.com/free-icon/user_318-159711.jpg"} className="w-11 h-10 rounded-full" alt="Imagem de Perfil"/>
                    <span>{user ?.username}</span>
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaUserFriends className="w-6 h-6"/>
                    Amigos
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaAlignLeft className="w-6 h-6"/>
                    Feed
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaPeopleArrows className="w-6 h-6"/>
                    Grupos
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaStore className="w-6 h-6"/>
                    Loja
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaCalendar className="w-6 h-6"/>
                    Eventos
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <FaBookmark className="w-6 h-6"/>
                    Salvo
                </Link>
                <Link href='' className="flex gap-3 items-center">
                    <TbClockHour4 className="w-6 h-6"/>
                    Lembranças
                </Link>
            </nav>
        </aside>
    )
}