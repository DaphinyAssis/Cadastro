import {compare} from "bcryptjs";
import {hash} from "bcryptjs";
import {sign} from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/user/CreateUserRepository";
const nodemailer = require('nodemailer');

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password}: IAuthenticateRequest){
        
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verificar se email existe
        const user = await usersRepositories.findOne({
            email,
        });
    if (!user) {
        throw new Error("Email incorreto");
      }
      //const passwordHash = await hash("fatec", 8);
      const passwordMatch = await compare(password, user?.password);
  
      if (!passwordMatch) {
        throw new Error("Password incorrect");
      }
      // Gerar token
      const token = sign(
        {
          email: user.email,
        },
        "4f93ac9d10cb751b8c9c646bc9dbccb9",
        {
          subject: (user.admin ? "Admin" : "others"),
          expiresIn: "1d",
        }
      );
  
      return token;
    }
  
    async resetPassword(email) {
  
      const usersRepositories = getCustomRepository(UsersRepositories);
  
      const userAlreadyExists = await usersRepositories.findOne({
        email,
      });
  
      if (!userAlreadyExists) {
        throw new Error("Email incorreto");
      }
      const passwordHash = await hash("UMC", 8);
      userAlreadyExists.password = passwordHash
  
      const user = await usersRepositories.update(userAlreadyExists.id, userAlreadyExists)
  
      const mailOptions = {
        from: 'mail@mestresdaweb.io', // sender address
        to: email, // receiver (use array of string for a list)
        subject: 'Eng-Software Reset Password', // Subject line
        html: '<p>Seu Novo Password é :</p><b>UMC</b>'// plain text body
      };
  
      let transporter = nodemailer.createTransport({
        host: "mail.mestresdaweb.io",
        port: 465,
        auth: {
          user: "mail@mestresdaweb.io",
          pass: "OZF6Cyf,ahw^",
        },
      });
  
      return await transporter.sendMail(mailOptions, (err, info) => {
        if (err)
          console.log(err)
        else
          return "Senha enviada com SUCESSO";
      });
    }
  
  }
  
  export { AuthenticateUserService };