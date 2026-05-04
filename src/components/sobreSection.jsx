const SobreSection = () => {
    return (
    <>
        <div className="h-89.5 w-full text-center flex flex-col justify-center"
            style={{ background: "var(--bg-header)" }}>
            <div className="w-78.5 mx-auto flex flex-col justify-center md:w-210.5">
            <h1 className="text-[36px] font-black text-white md:text-[60px]">Sobre o Uai em Doobro</h1>
                <p className="text-[20px] font-light text-white md:text-[24px]">O tour gastronômico que transforma sua experiência culinária no triângulo mineiro</p>
            </div>
        </div>
        <div className="w-85.5  mx-auto text-center mt-15 md:w-224 md:h-109 md:space-y-5">
            <h1 className="text-[36px] font-black text-[#232126] md:text-[48px]">O que é o Uai em Doobro?</h1>
            <div className="bg-white p-8 rounded-xl space-y-6 text-left shadow-[0_10px_15px_rgba(0,0,0,0.25)]">
                <p className="font-light text-[20px] text-[#364153]">O <span className="font-bold text-[#12495E]">Uai em Doobro</span> é um tour gastronômico exclusivo que oferece uma experiência única: ao comprar um prato em um dos nossos restaurantes parceiros, você ganha outro prato de igual valor!</p>
                <p className="font-light text-[20px] text-[#364153]">Com uma assinatura anual de apenas <span className="font-bold text-[#F6B22B]">R$ 189,9</span>, você tem acesso ilimitado a dezenas de restaurantes selecionados, podendo aproveitar a promoção quantas vezes quiser durante o período da temporada.</p>
                <p className="font-light text-[20px] text-[#364153]">É a oportunidade perfeita para conhecer novos sabores, revisitar seus lugares favoritos e compartilhar experiências gastronômicas incríveis com quem você ama, sempre economizando!</p>
            </div>
        </div>
                    
        <div className="h-141.75 w-85.5 mx-auto mt-15 md:flex md:w-224 md:gap-8 ">
            <div className="h-67 p-5 px-10 rounded-xl"
                style={{ background: "var(--bg-linear)" }}>
                <div className="flex flex-col justify-center gap-1">
                    <h1 className="text-[#FFEAB6] font-black text-[48px]">2x</h1>
                    <h1 className="text-[24px] font-bold mb-1">Compre 1, Ganhe 1</h1>
                    <p className="text-[16px] font-light ">A cada prato que você compra em um restaurante participante, você ganha outro prato de igual valor. Simples assim!</p>
                </div>
            </div>
            <div className="bg-linear-to-br from-[#F6B22B] to-[#FFEAB6] h-67 p-5 px-10 rounded-xl mt-8 md:mt-0">
                <div className="flex flex-col justify-center gap-1">
                    <h1 className="text-[#232126] text-[48px] font-black ">50%</h1>
                    <h1 className="text-[#232126] text-[24px] font-bold mb-1">Economize Real</h1>
                    <p className="text-[#232126] text-[16px] font-light">Com o "compre 1, ganhe 1", você economiza até 50% em todas as suas refeições nos restaurantes parceiros durante a temporada.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default SobreSection