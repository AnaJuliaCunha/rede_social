import Post from "./Post";

const posts = [
{
    id:1,
    post_desc: "teste",
    img:"",
    username: "user",
    userImg: "",
},
{
    id:2,
    post_desc: "teste",
    img:"https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp",
    username: "user",
    userImg: "",
}]

function Feed(){
    return(
        <div>
            {posts.map((post, id)=>{
                return(
                    <Post post={post} key={id}/>
                )
            })}
        </div>
    );
}

export default Feed;