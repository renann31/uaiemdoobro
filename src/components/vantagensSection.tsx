import { vantagens } from "@/data/homeContent";
import Image from "next/image";

const VantagensSection = () => {
  return (
    <div className="w-75 mx-auto text-center md:w-320">
      <div className="mb-16">
        <h1 className="text-black font-black text-[30px] md:text-[48px]">Vantagens do Uai em Doobro</h1>
        <p className="text-[#4A5565] font-light text-[20px]">Por que milhares de pessoas já assinaram o tour gastronômico</p>
      </div>

      <div className="grid md:grid-cols-3 md:px-8">
        {vantagens.map((card, index) => {
          return (
            <div key={index} className="bg-white w-full h-65 drop-shadow-lg py-6 md: pl-6 pr-3 text-left mb-8 rounded-xl space-y-4 md:w-96 md:h-60">
              <div className="h-14 w-14 rounded-xl p-[17px]" style={{ background: "var(--bg-linear)" }}>
                <Image
                  src={card.icone}
                  alt="icone"
                  width={21}
                  height={21}
                ></Image>
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

export default VantagensSection