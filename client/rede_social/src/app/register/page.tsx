//Na linha 19 alterar o 'axios' para 'makeRequest' criado no arquivo axios.ts. 
//E na linha 20 alterar rota no método Post dentro da função handleRegister para "auth/register";
//Remover importação do axios
"use client";

import Link from "next/link";
import AuthInput from "@/components/AuthInput";
import AuthPage from "@/components/AuthPage";
import {useState } from "react";
import axios from "axios";

function Register () {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = (e:any) => {
        e.preventDefault()
        axios.post("http://localhost:8001/api/auth/register", {username, email, password, confirmPassword}).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
       <AuthPage>
        <h1 className="font-bold text-2xl">REGISTER</h1>
        <AuthInput label="Nome:" newState={setUsername}></AuthInput>
        <AuthInput label="Email:" newState={setEmail}></AuthInput>
        <AuthInput label="Senha:" newState={setPassword} IsPassword></AuthInput>
        <AuthInput label="Confirme a sua Senha:" newState={setConfirmPassword} IsPassword></AuthInput>

        <button 
            className="bg-green-600 py-3 font-bold text-white rounded-lg hover:bg-green-800"
            onClick={(e)=>handleRegister(e)}>
                Cadastrar-se
                </button>
            <Link href="/register" className="text-center underline">Logar</Link>
       </AuthPage>
    )
}

export default Register;