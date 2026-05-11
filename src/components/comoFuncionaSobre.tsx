import { comoFunciona } from "@/data/sobreContent.js";

const ComoFuncionaSobre = () => {
    return(
    <>
        <div className="w-85.5 mx-auto mt-40 md:w-224">
            <h1 className="text-[30px] font-black text-[#232126] text-center md:text-[48px]">Como funciona na prática?</h1>
            <div className="mt-10">
                {comoFunciona.map((i, index) => {
                    return(
                        <div key={index} className="flex mb-10 gap-6">
                            <div className="flex bg-[#F6B22B] rounded-full w-12 h-12 font-black text-[#232126] text-[20px] items-center justify-center">{i.numero}</div>
                            <div className="w-67.5 md:w-206">
                                <h1 className="text-[#232126] font-bold text-[24px] mb-3">{i.titulo}</h1>
                                <p className="text-[#364153] font-light text-[18px]">{i.p}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="w-85.5 mx-auto mt-15 text-center mb-10 md:w-208 md: mb-30 md:mt-40">
            <h1 className="text-[30px] font-black text-[#232126] mb-4 md:text-[48px]">Pronto para Começar seu Tour Gastronômico?</h1>
            <p className="text-[#4A5565] text-[20px] font-light mb-1 md:mb-10">Assine agora e comece a explorar os melhores restaurantes do triângulo mineiro com 50% de desconto</p>
            <button className="bg-[#F6B22B] rounded-xl w-full h-22 flex items-center justify-center font-bold text-[18px] text-[#232126] md:w-90 md:h-15 md:mx-auto">Assinar agora</button>
        </div>
    </>
    );
}

export default ComoFuncionaSobre