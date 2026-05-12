import { comoFunciona } from "@/data/homeContent";
const ExplicandoSection = () => {
    return (
        <div className="text-center w-75 mx-auto my-50 md:w-320">
            <div className="mb-10 md:max-w-168 md:mx-auto">
                <h1 className="text-black font-black text-[30px] md:text-[48px]">Como Funciona</h1>
                <p className="text-[#4A5565] font-light text-[20px]">É super simples começar a economizar nos melhores restaurantes do triângulo mineiro</p>
            </div>
            <div className="md:flex md:gap-5">
                {comoFunciona.map((card, index) => { 
                    return (
                        <div
                            className="bg-white h-67 flex flex-col items-center rounded-xl w-75 mx-auto mb-8 p-7 shadow-xl md:w-97"
                            key={index}
                        >
                            <div className="bg-[#F6B22B] rounded-full h-16 w-16 p-3.5 mb-5 text-black font-black text-[24px]">{card.numero}
                            </div>
                            <h1 className="text-black font-bold text-[20px]">{card.titulo}</h1>
                            <p className="text-[#4A5565] font-light text-[16px]">{card.p}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default ExplicandoSection