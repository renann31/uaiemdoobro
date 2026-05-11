import DuvidasFaq from "@/components/duvidasFaq";
import Faq from "@/components/faq";
import Footer from "@/components/footer.jsx";

export default function FaqPage() {
    return (
        <div className="bg-white">
            <div className=" h-96.25 text-center space-y-6.75 w-full"
                style={{ background: "var(--bg-linear)" }}>
                <div className="pt-22.25 px-4 md:w-224 mx-auto">
                    <h1 className="text-[40px] text-white font-black md:text-[68px]">Perguntas Frequentes</h1>
                    <p className="text-[22px] text-white font-light md:text-[26px]">Encontre respostas para suas dúvidas sobre o tour gastronômico</p>
                </div>
            </div>
            <Faq />
            <DuvidasFaq />
        </div>
    )
}