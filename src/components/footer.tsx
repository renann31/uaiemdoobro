import Image from "next/image";
import Link from "next/link";

type FooterProps = {
    home?: boolean;
};

function Footer({ home }: FooterProps) {
    return (
        <>
            {home &&
             <div className="h-172.5 w-full text-center mt-20 pt-10 px-3" style={{ background: "var(--bg-linear)" }}>
                <h1 className="text-white font-black text-[26px] md:text-[48px] md:mt-20">Pronto para Explorar  Economizando?</h1>
                <p className="text-white text-[20px] font-light mt-10">Quer saber de todas as  novidades do Uai em Doobro? </p>
                <p className="text-white text-[20px] font-light">Basta fazer o seu cadastro aqui!</p>
                <form className="mt-20">
                    <input
                        type="email"
                        className="w-74.5 shadow-[inset_0px_5px_4px_rgba(255,255,255,0.25),0_4px_4px_rgba(0,0,0,0.25)] text-white font-bold text-[15px] bg-white/10 w-70 h-12.75 mx-auto   rounded-md py-2 px-5 placeholder:text-white md:w-170 md:h-10 md:rounded-2xl md:placeholder:text-white/55"
                        placeholder="DIGITE SEU EMAIL" />
                </form>
                <button className="bg-[#F6B22B] text-[#232126] w-75 h-15 mt-20 rounded-xl font-bold text-[18px] md:w-51 md:h-11 md:rounded-lg">CADASTRAR</button>
            </div>
        }
            <div className="bg-[#232126] h-150 md:flex md:items-center md:h-79">
                <div className="w-full md:flex md:w-304 md:gap-20 xl:gap-40 md:mx-auto md:items-center md:-translate-y-10 md:ml-15 lg:ml-30 2xl:ml-50 md:max-h-33.5">

                    <div className="flex items-center justify-center mx-auto md:mx-0">
                        <Image
                            alt="logo"
                            src="/assets/logo.svg"
                            width={231}
                            height={104}
                            className="object-contain mt-12 w-57.75 h-26 md:w-74.75 md:h-33.5 md:mt-0"
                        ></Image>
                    </div>

                    <div className="md:flex md:flex-col text-left md:-translate-x-10 ">
                        <h1 className="mt-10 font-bold text-[18px] text-white ml-3 md:mt-0">Links Rápidos</h1>
                        <div className="flex flex-col mt-5 space-y-2 ">
                            <Link href="/" className="font-light text-[16px] text-[#99A1AF] ml-3">Início</Link>
                            <Link href="/sobre" className="font-light text-[16px] text-[#99A1AF] ml-3">Sobre o Programa</Link>
                            <Link href="/faq" className="font-light text-[16px] text-[#99A1AF] ml-3">FAQ</Link>
                        </div>
                    </div>

                    <div className="md:flex md:flex-col text-left">
                        <h1 className="mt-8 font-bold text-[18px] text-white ml-3 md:mt-0">Contato</h1>
                        <div className="mt-5 md:gap-3 md:flex md:flex-col">
                            <a href="mailto:contato@uaiemdoobro.com.br" className="font-light text-[16px] text-[#99A1AF] ml-3 underline">
                                contato@uaiemdoobro.com.br
                            </a>
                            <div className="flex gap-1 ml-3">
                                <Image
                                    alt="instagram"
                                    src="/assets/instagram.svg"
                                    width={18}
                                    height={18}
                                    className="object-contain"
                                ></Image>
                                <a href="https://www.instagram.com/uaiemdoobro/" className="font-light text-[16px] text-[#99A1AF] underline">@uaiemdoobro</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:w-304 md:h-px bg-[#364153] absolute md:translate-y-30 md:ml-30 2xl:ml-50"></div>
            </div>
        </>
    );
}

export default Footer