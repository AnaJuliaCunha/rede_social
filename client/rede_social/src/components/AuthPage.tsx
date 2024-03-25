function AuthPage({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-[url('https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg?w=996&t=st=1710964488~exp=1710965088~hmac=6e7179a1802f8bd2df815178d6703339b96a32917da72c1ccf56cdbff14a2378')] bg-no-repeat bg-cover h-screen flex min-h-screen flex-col items-center justify-center">
           <form className="flex flex-col bg-white px-6 py-14 rounded-2xl gap-11 text-gray-600 w-1/4">
                {children}
            </form>    
        </main>
    );
}

export default AuthPage;

    //TA DANDO ERRO AQUI EM ALGUM LUGAR