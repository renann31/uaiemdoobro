import Image from "next/image";
import { faqHome } from "@/data/homeContent";
import { useState } from "react";

const FaqHome = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
    <div className="w-75 md:w-224 mx-auto text-center mt-20">
                <div className="mb-16 p-3">
                    <h1 className="text-black font-black text-[30px]">
                        Perguntas Frequentes
                    </h1>

                    <p className="text-[#4A5565] font-light text-[20px]">
                        Tire suas dúvidas sobre o tour gastronômico
                    </p>
                </div>

                {faqHome.map((i, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full rounded-xl border mt-4.5">
                            <button
                                className="flex items-center gap-5 px-6.75 min-h-16.5 md:w-full md:justify-between"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <h1 className="font-bold text-[#232126] text-[18px]">
                                    {i.pergunta}
                                </h1>
                                <Image
                                    src="/assets/iconeFAQ.png"
                                    alt="Ícone FAQ"
                                    width={15}
                                    height={7}
                                    className={`transition ${openIndex === index ? "rotate-180" : ""} object-contain`}/>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="w-full bg-[#F9FAFB] p-3">
                                    <p className="text-[20px] text-[#364153] font-light">
                                        {i.resposta}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
    </>
  );
}

export default FaqHome;
