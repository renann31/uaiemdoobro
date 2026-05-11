"use client";

import { investimento } from "@/data/homeContent";
import Image from "next/image";
import { useState } from "react";

const InvestimentoSection = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [email, setEmail] = useState("");

    return (
        <div className="w-85 mx-auto text-center mt-30 md:w-134.5">
            <div className="mb-16 p-3">
                <h1 className="text-black font-black text-[30px] md:text-[48px]">
                    Investimento
                </h1>

                <p className="text-[#4A5565] font-light text-[20px]">
                    Acesso aos melhores restaurantes do triângulo mineiro por um preço justo
                </p>
            </div>

            <div className="h-auto md:px-8 rounded-2xl border-[#F6B22B] border-4 bg-linear-to-br from-[#FFEAB6] to-[#F6B22B] shadow-[10px_10px_25px_rgba(0,0,0,0.3)] pb-10 md:min-h-201.75">
                <div className="px-14 mb-10 mt-3 md:w-64 md:px-4 md:mx-auto">
                    <h1 className="text-[43px] font-medium text-[#12495E]">
                        menos de <span className="font-black">1 real</span> /dia
                    </h1>

                    <p className="text-[12px] font-light text-[#364153]">
                        Cobrado anualmente:{" "}
                        <span className="font-bold">R$ 189,90</span>
                        {" "} (valor sem cupom de desconto)
                    </p>
                </div>

                {!mostrarFormulario ? (
                    <>
                        {investimento.map((i, index) => {
                            return (
                                <div
                                    key={index}
                                    className="space-y-3 flex gap-2.5">
                                    <div className="h-5.5 w-5.5 grid place-items-center">
                                        <Image
                                            className="object-contain"
                                            src="/assets/verificado.png"
                                            alt="verificado"
                                            width={13}
                                            height={9}
                                        />
                                    </div>

                                    <h1 className="text-[#364153] font-normal text-[14px] md:text-[16px]">
                                        {i}
                                    </h1>
                                </div>
                            );
                        })}

                        <form
                            className="mt-38"
                            onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="DIGITE SEU EMAIL"
                                className="shadow-[inset_2px_5px_5px_rgba(246,178,43,0.8),0_15px_12px_rgba(0,0,0,0.25)] text-[#232126] font-bold text-[14px] bg-white/10 w-79.5 h-9.5 mx-auto rounded-xl py-2 px-5 md:w-full focus:outline-none focus:border-[#F6B22B] focus:border-2"
                            />
                        </form>
                    </>
                ) : (
                    <form
                        className="flex flex-col gap-5 mt-10"
                        onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="EMAIL"
                            className="shadow-[inset_2px_5px_5px_rgba(246,178,43,0.8),0_15px_12px_rgba(0,0,0,0.25)] text-[#232126] font-bold text-[14px] bg-white/10 w-79.5 h-9.5 mx-auto rounded-xl py-2 px-5 md:w-full focus:outline-none focus:border-[#F6B22B] focus:border-2"
                        />

                        <input
                            type="password"
                            required
                            minLength={6}
                            placeholder="SENHA"
                            className="shadow-[inset_2px_5px_5px_rgba(246,178,43,0.8),0_15px_12px_rgba(0,0,0,0.25)] text-[#232126] font-bold text-[14px] bg-white/10 w-79.5 h-9.5 mx-auto rounded-xl py-2 px-5 md:w-full focus:outline-none focus:border-[#F6B22B] focus:border-2"
                        />
                        <input
                            type="text"
                            required
                            placeholder="CÓDIGO DE IDENTIFICAÇÃO"
                            className="shadow-[inset_2px_5px_5px_rgba(246,178,43,0.8),0_15px_12px_rgba(0,0,0,0.25)] text-[#232126] font-bold text-[14px] bg-white/10 w-79.5 h-9.5 mx-auto rounded-xl py-2 px-5 md:w-full focus:outline-none focus:border-[#F6B22B] focus:border-2"
                        />
                        <input
                            type="text"
                            required
                            placeholder="NOME COMPLETO"
                            className="shadow-[inset_2px_5px_5px_rgba(246,178,43,0.8),0_15px_12px_rgba(0,0,0,0.25)] text-[#232126] font-bold text-[14px] bg-white/10 w-79.5 h-9.5 mx-auto rounded-xl py-2 px-5 md:w-full focus:outline-none focus:border-[#F6B22B] focus:border-2"
                        />
                        <input
                            type="text"
                            required
                            inputMode="numeric"
                            pattern="\d{11}"
                            title="Digite um CPF válido com 11 números"
                            placeholder="CPF"
                            className="shadow-[inset_2px_5px_5px_rgba(246,178,43,0.8),0_15px_12px_rgba(0,0,0,0.25)] text-[#232126] font-bold text-[14px] bg-white/10 w-79.5 h-9.5 mx-auto rounded-xl py-2 px-5 md:w-full focus:outline-none focus:border-[#F6B22B] focus:border-2"
                        />
                        <input
                            type="tel"
                            required
                            pattern="[0-9]{10,11}"
                            title="Digite um telefone válido"
                            placeholder="TELEFONE"
                            className="shadow-[inset_2px_5px_5px_rgba(246,178,43,0.8),0_15px_12px_rgba(0,0,0,0.25)] text-[#232126] font-bold text-[14px] bg-white/10 w-79.5 h-9.5 mx-auto rounded-xl py-2 px-5 md:w-full focus:outline-none focus:border-[#F6B22B] focus:border-2"
                        />

                        <select
                            required
                            defaultValue=""
                            className="shadow-[inset_2px_5px_5px_rgba(246,178,43,0.8),0_15px_12px_rgba(0,0,0,0.25)] text-[#232126] font-bold text-[14px] bg-white/10 w-79.5 h-9.5 mx-auto rounded-xl py-2 px-5 md:w-full focus:outline-none focus:border-[#F6B22B] focus:border-2">

                            <option value="" disabled>
                                GÊNERO
                            </option>

                            <option value="masculino">
                                Masculino
                            </option>

                            <option value="feminino">
                                Feminino
                            </option>

                            <option value="outro">
                                Outro
                            </option>

                            <option value="prefiro-nao-informar">
                                Prefiro não informar
                            </option>
                        </select>

                        <input
                            type="text"
                            required
                            placeholder="DATA DE NASCIMENTO"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => {
                                if (!e.target.value) {
                                    e.target.type = "text";
                                }
                            }}
                            className="shadow-[inset_2px_5px_5px_rgba(246,178,43,0.8),0_15px_12px_rgba(0,0,0,0.25)] text-[#232126] font-bold text-[14px] bg-white/10 w-79.5 h-9.5 mx-auto rounded-xl py-2 px-5 md:w-full focus:outline-none focus:border-[#F6B22B] focus:border-2"
                        />

                        <button
                            type="submit"
                            className="bg-[#F6B22B] rounded-xl text-[#232126] font-bold text-[16px] h-14.25 w-78.5 mx-auto shadow-[inset_2px_5px_2px_rgba(255,255,255,0.4),0_15px_12px_rgba(0,0,0,0.25)] mt-5 md:w-full">
                            Comprar agora
                        </button>
                    </form>
                )}

                {!mostrarFormulario && (
                    <button
                        onClick={() => setMostrarFormulario(true)}
                        className="bg-[#F6B22B] rounded-xl text-[#232126] font-bold text-[16px] h-14.25 w-78.5 mx-auto shadow-[inset_2px_5px_2px_rgba(255,255,255,0.4),0_15px_12px_rgba(0,0,0,0.25)] mt-10 md:w-full"
                    >
                        Comprar agora
                    </button>
                )}
            </div>

            <p className="font-light text-[16px] text-[#4A5565] mt-8 ml-3">
                Garantia de 7 dias - Se não ficar satisfeito, devolvemos seu dinheiro
            </p>

            <div className="flex justify-between mt-4 ml-2 md:justify-center md:gap-6">
                <div className="flex w-37.5 pr-2 md:pr-0 md:w-40.75 md:gap-2">
                    <Image
                        alt="cadeado"
                        src="/assets/cadeado.svg"
                        width={13}
                        height={14}
                        className="object-contain"
                    />

                    <p className="font-normal text-[14px] text-[#6A7282]">
                        Pagamento seguro
                    </p>
                </div>

                <div className="flex w-37.5 pr-2 md:pr-0 md:w-45.5 md:gap-2">
                    <Image
                        alt="verificado"
                        src="/assets/semTaxa.svg"
                        width={14}
                        height={14}
                        className="object-contain"
                    />

                    <p className="font-normal text-[14px] text-[#6A7282]">
                        Sem taxas escondidas
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InvestimentoSection;