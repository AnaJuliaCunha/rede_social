"use client";
import { makeRequest } from "../../../../axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import  AuthInput  from "@/components/AuthInput";

function Login (){

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState("");

    const router = useRouter();

    const handleLogin = (e:any)=>{
      e.preventDefault()
      makeRequest.post("auth/login", {email,password})
      .then((res)=>{
        localStorage.setItem(
          "rede-social-yt:user", 
          JSON.stringify(res.data.data.user)
          );      
        localStorage.setItem(
          "rede-social-yt:token", 
          JSON.stringify(res.data.data.token)
          );
          console.log(res.data);
          setError('');
          router.push('/')      
      }).catch((err)=>{
        console.log(err)
        setError(err.response.data.msg)
      })
    }


    return (
        <>
                <h1 className="font-bold text-2xl text-grey-600">LOGIN</h1>
                <AuthInput label="Email:" newState={setEmail}></AuthInput>
                <AuthInput label="Password:" newState={setPassword} IsPassword ></AuthInput>
                
                {error.length> 0 && <span className="text-red-600">* {error}</span>}
                

                <button 
                  className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800" onClick={(e)=>handleLogin(e)}>
                    ENTRAR
                    </button>
                <Link href="/register" className="text-center underline">Cadastrar-se</Link>
        </>
    );
}

export default Login;