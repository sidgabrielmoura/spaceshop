import { FaRegEye } from "react-icons/fa";
export function LoginComp(){

    return(
        <>
            <main className="w-[500px] min-w-[300px]">
                <section className="flex flex-col gap-10 items-center h-[90%] rounded-b-2xl">
                    <div className="w-full flex flex-col items-center -space-y-2">
                        <div className="bg-[url(../assets/spaceshopLogo.svg)] size-20 bg-no-repeat bg-center"/>
                        <h1 className="text-[35px] font-black tracking-[2px]">SHOPSPACE</h1>
                        <span className="text-zinc-800 font-light">Seu espaço de compra e venda</span>
                    </div>

                    <div className="space-y-10 min-w-[300px] w-full">
                        <div className="space-y-3">
                            <h1 className="text-center">Acesse sua conta</h1>

                            <input type="email" placeholder="Email" className="w-full rounded-lg h-12 px-2 bg-zinc-100 outline-none text-zinc-600"/>
                            <div className="flex items-center justify-center bg-zinc-100 pr-2 rounded-lg overflow-hidden">
                                <input type="password" placeholder="Senha" className="w-full h-12 px-2 bg-zinc-100 outline-none text-zinc-600"/>
                                <FaRegEye className="size-5 cursor-pointer"/>
                            </div>
                        </div>

                        <div className="relative overflow-hidden flex items-center justify-center">
                            <div className="absolute bg-zinc-300/30 h-[100px] min-w-[200px] rounded-full animate-pulse cursor-pointer"/>
                            <button className="w-full h-14 rounded-md bg-[#6E21D2] text-zinc-50">Entrar</button>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center">
                    <h1>Ainda não tem uma conta?</h1>
                    <button className="w-3/4 h-14 rounded-md bg-zinc-500/50 text-zinc-50">Crie uma!</button>
                </section>
            </main>
        </>
    )
}