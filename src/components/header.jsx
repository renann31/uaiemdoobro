const Header = () => {
    return (
        <div
            className="h-screen text-center mb-10 md:flex md:justify-center md:items-center"
            style={{ background: "var(--bg-header)" }}>

            <div className="h-130.5 w-85 md:w-224 leading-tight">

                <h1 className="text-[36px] font-black text-white md:text-[60px]">Tour Gastronômico com 50% de Desconto</h1>
                <h3 className="text-white font-light text-[20px] mt-5 md:text-[24px]">Compre 1 prato e ganhe 1 em dezenas de restaurantes</h3>

                <div className="bg-white/10 h-53 rounded-2xl items-center text-left mt-10 pt-5 p-8 md:max-w-115.5 md:mx-auto md:h-48 md:px-15 md:pt-0">
                    <h1 className="text-[48px] font-medium text-[#FFEAB6] md:text-[64px]">menos de <span className="font-black">1 real</span> /dia</h1>
                    <p className="text-[14px] font-light opacity-80 text-center mt-4 md:mt-0">no plano anual de R$ 358,80</p>
                </div>

{/*                 <div className="md:w-115.5 md:justify-between">
 */}                   <button className="bg-[#F6B22B] text-black font-bold text-[18px] rounded-xl h-15 w-full mt-8 md:w-48 mr-5">Assinar agora</button>
                    <button className="bg-[#12495E] text-white font-bold text-[18px] rounded-xl h-15 w-full mt-5 md:w-41.25">Saiba mais</button> 
                {/* </div> */}
            </div>
        </div>
    )
}

export default Header