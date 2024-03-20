import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { db } from "../connect.js";

export const register = (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (!username) {
    return res.status(422).json({ msg: "O nome é obrigatório!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }
  if (!password) {
    res.status(422).json({ msg: "A senha é obrigatório!" });
  }
  if (password !== confirmPassword) {
    return res.status(422).json({ msg: "As senhas não conferem!" });
  }
  db.query(
    "SELECT email FROM user WHERE email = ?",
    [email],
    async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Aconteceu algum erro no servidor, tente novamente mais tarde.",
        });
      }
      if (data.length > 0) {
        return res.status(400).json({
          msg: "Já existe uma conta com esse email!",
        });
      } else {
        const passwordHash = await bcrypt.hash(password, 8);
        db.query(
          "INSERT INTO user SET ?",
          { username, email, password: passwordHash },
          (error) => {
            if (error) {
              console.log(error);
              return res.status(500).json({
                msg: "Aconteceu algum erro no servidor, tente novamente mais tarde.",
              });
            } else {
              return res.status(200).json({
                msg: "Conta criada com sucesso!",
              });
            }
          }
        );
      }
    }
  );
};

export const login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM user WHERE email =?",
    [email],
    async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Aconteceu algum erro no servidor, tente novamente mais tarde.",
        });
      }
      if (data.length == 0) {
        return res.status(404).json({ // aqui
          msg: "Usuário não encontrado.",
        });
      } else {
        const user = data[0];

        const checkPassword = await bcrypt.compare(password, user[0].password);

        if (!checkPassword) {
          return res.status(422).json({
            msg: "Senha inválida.",
          });
        }

        try {
          const refreshToken = jwt.sign(
            {
              exp: Math.floor(Date.now() / 100) + 24 * 60 * 60,
              id: user.password,
            },
            process.env.REFRESH,
            { algorithm: "HS256" }
          );
          const Token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 100) + 3600,
              id: user.password,
            },
            process.env.TOKEN,
            { algorithm: "HS256" }
          );
          res.status(200).json({ msg: "Usuario logado com sucesso!", token, refreshToken });
        } catch (err) {
          console.log(err);
          return res.status(500).json({
            msg: "Aconteceu algum erro no servidor, tente novamente mais tarde!",
          });
        }
      }
    }
  );
};
