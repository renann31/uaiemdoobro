import { cardInfo } from "@/data/homeContent";
import Image from "next/image";

const UaiSection = () => {
  const card = cardInfo.cards
  return (
    <div className="w-85 md:w-224 mx-auto text-center">
      <h1 className="text-[30px] font-black text-black mb-5 md:text-[48px]">O que é Uai em Doobro?</h1>
      <div
        className="rounded-2xl h-205 p-5 md:h-107 md:p-12"
        style={{ background: "var(--bg-linear)" }}>
        <p className="text-[20px] font-light text-white md:text-[24px]">
          O <span className="text-[#FFEAB6] font-black">Uai em Doobro</span> é o tour gastronômico mais querido do triângulo mineiro! Por uma assinatura anual super acessível, você tem acesso à promoção <span className="text-[#FFEAB6] font-black">COMPRE 1 PRATO e GANHE 1</span> em dezenas de restaurantes selecionados da cidade.
        </p>
        <div className="md:flex md:gap-6">
          {card.map((card, index) => {
            return (
              <div
                key={index}
                className="rounded-2xl h-36 p-5 w-full bg-white/10 mt-6 md:w-62.5">

                <h1 className="font-black text-[#FFEAB6] text-[36px]">{card.titulo}</h1>
                {card.imagem && (
                  <Image
                    src={card.imagem}
                    width={34}
                    height={40}
                    alt="imagem"
                    className="object-contain md:mx-auto md:mt-4 md:mb-4"
                  />
                )}
                <p className="font-light text-[16px] text-white">{card.subtitulo}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="text-center mt-10 mb-2">
        <p className="text-[20px] font-light text-[#364153]">{cardInfo.p}</p>
      </div>
    </div>

  );
}

export default UaiSection
