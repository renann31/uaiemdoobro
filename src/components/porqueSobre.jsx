import { cards } from "@/data/sobreContent.js";
const PorqueSection = () => {
    return(
    <>
        <div className="w-85.5 mx-auto mt-40 mb-20 md:w-230 md:mt-10">
            <div className="text-center space-y-6 ">
                <h1 className="text-[30px] font-black text-[#232126] md:text-[48px]">Por que criamos este programa?</h1>
                <p className="text-[#364153] text-[20px] font-light">Acreditamos que boas experiências gastronômicas não devem ser um luxo inacessível. O Uai em Doobro nasceu da vontade de democratizar o acesso aos melhores restaurantes do triângulo mineiro, permitindo que mais pessoas possam explorar a rica cena gastronômica da cidade.</p>
                <p className="text-[#364153] text-[20px] font-light">Queremos que você descubra novos sabores, apoie restaurantes locais e crie memórias especiais sem pesar no bolso. Cada refeição se torna uma oportunidade de compartilhar, experimentar e celebrar a culinária mineira.</p>
            </div>
        </div>
        <div className="md:w-224 md:flex md:gap-8 md:mx-auto">
            {cards.map((card, index) => {
            return (
                <div key={index} className="w-85.5 h-54 mx-auto flex flex-col mb-8 text-center p-4 px-6 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.25)]">
                    <p className="text-[36px] mb-2">{card.icone}</p>
                    <h1 className="text-[#232126] text-[20px] font-bold mb-3">{card.titulo}</h1>
                    <p className="text-[#4A5565] text-[16px] font-light">{card.subtitulo}</p>
                </div>
            )
        })}
        </div>
    </>
    );
}

export default PorqueSection