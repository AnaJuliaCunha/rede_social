import {db} from '../connect.js';

export const creatPost = (req, res) => {
    const {post_desc, img, userID} = req.body;

    if(!post_desc && !img) {
        return res.status(422).json({
            msg: "O post precisa ter um texto ou imagem!"})
    }
    db.query("INSERT INTO post SET ?" ,{desc,img,userID},(error) => {
        if(error) {
            console.log(error);
            return res.status(500).json({
                msg: "Aconteceu algum erro no servidor, tente novamente mais tarde"})
            } else {
                return res.status(200).json({
                    msg: "Post enviado com sucesso!"})
            }
    })
}