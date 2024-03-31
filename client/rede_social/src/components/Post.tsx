import {FaThumbsUp, FaRegComment, FaPaperPlane} from 'react-icons/fa';
import {useState, useEffect} from 'react';

interface IPost{
    id: number,
    post_desc: string,
    img: string,
    username: string,
    userImg: string
    created_at: string;
}
interface IUser{
    userImg: string,
    username: string
}

export default function Post(props:{post: IPost}){

    const {post_desc, username, img, userImg, created_at} = props.post;

    const [user, setUser] = useState<IUser | undefined>(undefined);

    useEffect(()=>{
        let value = localStorage.getItem("rede-social-yt:user")
        if(value){
            setUser(JSON.parse(value))
        }
    }, [])

    let date = new Date(created_at);
    let formatedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    return(
        <div className='w-1/3 bg-gray-300 rounded-lg p-4 shadow-md'>
            <header className="flex gap-2 pb-4 border-b items-center">
                <img className="w-8 h-8 rounded-full" src={userImg?userImg: "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem de perfil do usuario que fez o post" />
                <div className="flex flex-col">
                    <span className='font-semibold'>{username}</span>
                    <span className='text-xs'>{formatedDate}</span>
                </div>
            </header>
                {post_desc && (
                <div className='py-4 w-full'>
                    <span>{post_desc}</span>
                </div>
                )}
                {img && <img className='rounded-lg' src={img} alt="imagem do post"/>}
                <div className='flex justify-between py-4 border-b'>
                    <div className='flex gap-1 items-center'>
                        <span className='bg-blue-600 w-6 h-6 text-white flex items-center justify-center rounded-full text-xs'>
                            <FaThumbsUp />4
                        </span>
                    </div>
                    <span>4 comentários</span>
                </div>
                <div className='flex justify-around py-4 text-gray-600 border-b'>
                    <button className='flex items-center gap-1'><FaThumbsUp /> Curtir </button>
                    <button className='flex items-center gap-1'><FaRegComment /> Comentar </button>
                </div>
                <div className='flex gap-4 pt-6'>
                <img src={user ?.userImg ? user.userImg: "https://img.freepik.com/free-icon/user_318-159711.jpg"} className="w-11 h-10 rounded-full" alt="Imagem de Perfil"/>
                    <div className='w-full bg-zinc-100 flex items-center text-gray-600 px-3 py-1 rounded-full'>
                        <input type="text" className='bg-zinc-100 w-full focus-visible:outline-none'/>
                        <FaPaperPlane />
                    </div>
                </div>
        </div>
    );
}