"use client"
import { faqTour, faqAssinatura, faqApp, faqRegras } from "@/data/faqContent.js"
import Image from "next/image"
import { useState } from "react"
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(false)
    return (
        <div className="w-85.25 mx-auto mt-20 md:w-224">
                {/* faq: sobre o tour */}
                <div className="mt-15">
                    <h1 className="text-[32px] font-black text-[#232126] mb-8">Sobre o Tour Gastronômico</h1>
                    {faqTour.map((i, index) => {
                        const id = `tour-${index}`
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
                {/* faq: sobre a assinatura */}
                <div className="mt-15">
                    <h1 className="text-[32px] font-black text-[#232126] mb-8">Sobre a Assinatura</h1>
                    {faqAssinatura.map((i, index) => {
                        const id = `assinatura-${index}`
                        return (
                            <div key={index} className="w-full rounded-xl border mt-4.5">
                                
                                <button className="flex items-center gap-5 px-6.75 min-h-16.5 md:w-full md:justify-between"
                                    onClick={() => setOpenIndex(openIndex === id ? null : id)}>
                                    <h1 className="font-bold text-[#232126] text-[18px]">{i.pergunta}</h1>
                                    <p className={`transition ${openIndex === index ? "rotate-180" : ""}`}>
                                        <Image
                                            src="/assets/iconeFAQ.png"
                                            width={15}
                                            height={7}
                                            className="object-contain"
                                        ></Image>
                                    </p>
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
                {/* faq: app */}
                <div className="mt-15">
                    <h1 className="text-[32px] font-black text-[#232126] mb-8">Uso do App e Cupons</h1>
                    {faqApp.map((i, index) => {
                        const id = `app-${index}`
                        return (
                            <div key={index} className="w-full rounded-xl border mt-4.5">
                                
                                <button  className="flex items-center gap-5 px-6.75 min-h-16.5 md:w-full md:justify-between"
                                    onClick={() => setOpenIndex(openIndex === id ? null : id)}>
                                    <h1 className="font-bold text-[#232126] text-[18px]">{i.pergunta}</h1>
                                    <p className={`transition ${openIndex === index ? "rotate-180" : ""}`}>
                                        <Image
                                            src="/assets/iconeFAQ.png"
                                            width={15}
                                            height={7}
                                            className="object-contain"
                                        ></Image>
                                    </p>
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
                {/* faq: regras */}
                <div className="mt-15">
                    <h1 className="text-[30px] font-black text-[#232126] mb-8">Regras e Restrições</h1>
                    {faqRegras.map((i, index) => {
                        const id = `regras-${index}`
                        return (
                            <div key={index} className="w-full rounded-xl border mt-4.5">
                                
                                <button  className="flex items-center gap-5 px-6.75 min-h-16.5 md:w-full md:justify-between"
                                    onClick={() => setOpenIndex(openIndex === id ? null : id)}>
                                    <h1 className="font-bold text-[#232126] text-[18px]">{i.pergunta}</h1>
                                    <p className={`transition ${openIndex === index ? "rotate-180" : ""}`}>
                                        <Image
                                            src="/assets/iconeFAQ.png"
                                            width={15}
                                            height={7}
                                            className="object-contain"
                                        ></Image>
                                    </p>
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

export default Faq