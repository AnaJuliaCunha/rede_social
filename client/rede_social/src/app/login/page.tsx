"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import  AuthPage from "@/components/AuthPage";
import  AuthInput  from "@/components/AuthInput";

function Login (){

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const handleLogin = (e:any)=>{
      e.preventDefault()
      //makeRequest.post("auth/login")
      axios.post("http://localhost:8001/api/auth/login", {email,password}).then((res)=>{
        console.log(res.data)      
      }).catch((err)=>{
        console.log(err)
      })
    }

    //TA DANDO ERRO AQUI EM ALGUM LUGAR

    return (
        <AuthPage>
                <h1 className="font-bold text-2xl text-grey-600">LOGIN</h1>
                <AuthInput label="Email:" newState={setEmail}></AuthInput>
                <AuthInput label="Password:" newState={setPassword} IsPassword ></AuthInput>
                
                <button 
                  className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800" onClick={(e)=>handleLogin(e)}>
                    ENTRAR
                    </button>
                <Link href="/register" className="text-center underline">Cadastrar-se</Link>
        </AuthPage>
    );
}

export default Login;