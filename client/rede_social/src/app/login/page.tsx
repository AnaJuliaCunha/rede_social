import Link from "next/link";

function Login (){
    return (
        <main className="bg-[url('https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?w=996&t=st=1710964488~exp=1710965088~hmac=6e7179a1802f8bd2df815178d6703339b96a32917da72c1ccf56cdbff14a2378')] bg-no-repeat bg-cover h-screen flex min-h-screen flex-col items-center justify-center">
            <form>
                <h1>LOGIN</h1>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" />
                </div>
                <button>ENTRAR</button>
                <Link href="/register">Cadastrar-se</Link>
            </form>
        </main>
    );
}

export default Login;