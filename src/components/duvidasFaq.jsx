import Footer from "./footer.jsx";

const DuvidasFaq = () => {
    return (
        <>
            <div className=" text-center mx-auto bg-[#F9FAFB] space-y-8 mt-40 h-132.75 md:h-178.25">
                <div className="md:w-224 mx-auto">
                    <h1 className="text-[40px] text-[#232126] font-black md:text-[61px]">Ainda tem dúvidas?</h1>
                    <p className="text-[22px] text-[#4A5565] font-light md:text-[26px]">Nossa equipe está pronta para ajudar você a entender melhor o tour gastronômico</p>

                    <div className="w-83.25 h-43.25 mt-10 mx-auto bg-white rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.25)] space-y-4.25 pt-8 px-4 md:w-154.25 md:h-56.25">
                        <div className="px-6">
                            <p className="text-[18px] text-[#364153] font-light md:text-[27px]">Entre em contato conosco por e-mail:</p>
                        </div>
                        <p className="text-[19px] text-[#12495E] font-bold md:text-[31px]">contato@uaiemdoobro.com.br</p>

                    </div>
                    <h1 className="text-[18px] text-[#4A5565] font-normal mt-12">Respondemos todas as mensagens em até 24 horas úteis</h1>
                    <button className="bg-[#F6B22B] w-53.25 h-16.5 text-[#232126] font-bold text-[20px] p-auto rounded-xl mb-25 md:w-82 md:h-20 md:text-[30px] md:mt-10">Assinar agora</button>
                </div>
                    <div className="w-full text-center flex"
                        style={{ background: "var(--bg-linear)" }}>
                        <div className="mt-22.25 md:mb-10">
                            <h1 className="text-[33px] text-white font-black ">Pronto para Começar?</h1>
                            <p className="text-[22px] text-white font-light">Assine o tour gastronômico por apenas R$ 29,90/mês</p>
                            <button className="bg-[#F6B22B] w-56.5 h-16.5 text-[#232126] font-bold text-[20px] p-auto rounded-xl mt-8">Assinar agora</button>
                            <button className="bg-[#12495E] w-45.75 h-16.5 text-white font-bold text-[20px] p-auto rounded-xl mb-25 mt-4.5">Saiba mais</button>
                        </div>

                    </div>
                <Footer home={false}/>
            </div>
        </>
    );
}

export default DuvidasFaq