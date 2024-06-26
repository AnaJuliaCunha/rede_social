import {db} from "../connect.js";

export const creatPost = (req, res)=>{
    const {post_desc, img, userId} = req.body;

    if(!post_desc && !img){
        return res.status(422).json({msg:"O post precisa ter um texto ou uma imagem!"})
    }

    db.query("INSERT INTO posts SET ?", {post_desc, img, userId}, (error) =>{
        if (error){
            console.log(error)
            return res.status(500).json({msg:"Aconteceu algum erro no servidor, tente novamente mais tarde"})
        }else{
            return res.status(200).json({msg:"Post enviado com sucesso!"})
        }
    })
}

export const getPost = () => {
    db.query("SELECT p.*, u.username, userImg FROM posts as p JOIN user as u ON (u.id = p.userId)",(error, data) => {
        if (error){
            console.log(error)
            return res.status(500).json({msg:"Aconteceu algum erro no servidor, tente novamente mais tarde"});
        }else if(data){
            return res.status(200).json({ data })
        }
    });
};