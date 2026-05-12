import { infoApp } from "@/data/homeContent";
import Image from "next/image";

const AppSection = () => {
    return (
        <div className="bg-[#F9FAFB] text-center mt-10 w-80 mx-auto md:w-288 md:mt-40">
            <div className="md:px-70">
                <h1 className="font-black text-[30px] text-[#232126] md:text-[48px]">
                    Tudo pelo Aplicativo
                </h1>

                <p className="font-light text-[20px] text-[#4A5565]">
                    Baixe o app, explore os restaurantes e ative seus cupons em segundos
                </p>
            </div>

            <div className="md:flex md:justify-between">
                <div className="md:w-138">
                    {infoApp.map((card, index) => {
                        return (
                            <div key={index} className="mt-10 flex">
                                <div className={card.estilo}>
                                    <Image
                                        height={18}
                                        width={18}
                                        src={card.icon}
                                        alt="icone"
                                        className="object-contain"
                                    />
                                </div>

                                <div className="max-w-65 md:max-w-122 text-left ml-4">
                                    <h1 className="font-bold text-[20px] text-[#232126]">
                                        {card.titulo}
                                    </h1>

                                    <p className="font-light text-[16px] text-[#4A5565]">
                                        {card.p}
                                    </p>
                                </div>
                            </div>
                        );
                    })}

                    <div className="flex space-x-4 mt-8">
                        <button className="bg-black rounded-xl flex h-15 w-38 px-6 py-3 items-center">
                            <Image
                                className="object-contain"
                                src="/assets/appStore.png"
                                alt="appStore"
                                width={17}
                                height={24}
                            />

                            <div className="text-left grid grid-cols-1 ml-2">
                                <p className="font-bold text-[11px] text-white">
                                    Baixar na
                                </p>

                                <p className="font-bold text-[13px] text-white">
                                    App Store
                                </p>
                            </div>
                        </button>

                        <button className="bg-black rounded-xl flex h-15 w-42 px-6 py-3 items-center">
                            <Image
                                className="object-contain"
                                src="/assets/playStore.png"
                                alt="GooglePlay"
                                width={18}
                                height={19}
                            />

                            <div className="text-left grid grid-cols-1 ml-2">
                                <p className="font-bold text-[11px] text-white">
                                    Disponível no
                                </p>

                                <p className="font-bold text-[13px] text-white">
                                    Google Play
                                </p>
                            </div>
                        </button>
                    </div>
                </div>

                <div
                    className="mt-12 h-90 p-8 rounded-3xl text-center md:w-138"
                    style={{ background: "var(--bg-linear)" }}
                >
                    <div className="bg-white w-full h-full rounded-2xl flex flex-col p-6 items-center">
                        <div className="bg-[#12495E] rounded-2xl w-24 h-24 p-3">
                            <Image
                                src="/assets/iconApp.png"
                                alt="iconApp"
                                width={72}
                                height={72}
                            />
                        </div>

                        <h1 className="text-black font-black text-[24px]">
                            Uai em doobro
                        </h1>

                        <p className="text-black font-light text-[16px]">
                            Visualização do app com lista de restaurantes, cupons ativos e muito mais
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSection;