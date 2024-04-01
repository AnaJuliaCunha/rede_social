import {FaThumbsUp} from 'react-icons/fa';

interface IPost{
    id: number,
    post_desc: string,
    img: string,
    username: string,
    userImg: string
}

function Post(props:{post:IPost}){

    const{post_desc, img, username, userImg} = props.post;

    return(
        <div>
            <header>
                <img className="w-8 h-8 rounded-full" src={userImg?userImg:"https://img.freepik.com/free-icon/user_318-159711.jpg"}  alt="Imagem do usuario que fez o post"/>
                <div>
                    <span>{username}</span>
                    <span>06/02/2023</span>
                </div>
            </header>
                {post_desc && (
                    <div>
                        <span>{post_desc}</span>
                    </div>
                )}
                {img &&
                    <img src={img} alt="Imagem do post" />
                }
                <div>
                    <div>
                        <FaThumbsUp />3
                    </div>
                </div>
        </div>
    );
}

export default Post;