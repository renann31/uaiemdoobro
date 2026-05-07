"use client"; 
import AppSection from "@/components/appSection";
import ExplicandoSection from "@/components/explicandoSection";
import Footer from "@/components/footer";
import Header from "@/components/header"
import InvestimentoSection from "@/components/investimentoSection";
import UaiSection from "@/components/uaiSection"
import VantagensSection from "@/components/vantagensSection.";
import { faqHome } from "@/data/homeContent";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(false)

  return (
    <div className="bg-[#F9FAFB]">
      <Header />
      <UaiSection />
      <AppSection />
      <ExplicandoSection />
      <VantagensSection />
      <InvestimentoSection />
      <Footer home={true} />

      <div className="w-85 mx-auto text-center mt-20">
        <div className="mb-16 p-3">
          <h1 className="text-black font-black text-[30px]">Perguntas Frequentes</h1>
          <p className="text-[#4A5565] font-light text-[20px]">Tire suas dúvidas sobre o tour gastronômico</p>
        </div>
      </div>

      <div className="bg-zinc-900 p-4 rounded-lg text-white">
        {faqHome.map((i, index) => {
          const id = `${index}`
          return (
            <div key={index} className="w-full rounded-xl border mt-4.5">

              <button className="flex items-center gap-5 px-6.75 min-h-16.5 md:w-full md:justify-between"
                onClick={() => setOpenIndex(openIndex === id ? null : id)}>
                <h1 className="font-bold text-[#232126] text-[18px]">{i.pergunta}</h1>
                <Image
                  src="/assets/iconeFAQ.png"
                  width={15}
                  height={7}
                  className={`transition ${openIndex === index ? "rotate-180" : ""} object-contain`}
                ></Image>
              </button>
              {openIndex === id && (
                <div className="w-full bg-[#F9FAFB] p-3">
                  <p className="text-[20px] text-[#364153] font-light">{i.resposta}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>


    </div>
  );
}
