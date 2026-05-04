import ComoFuncionaSobre from "@/components/comoFuncionaSobre";
import Footer from "@/components/footer";
import PorqueSection from "@/components/porqueSobre";
import SobreSection from "@/components/sobreSection";

export default function Sobre() {
    return (
        <div className="bg-[#F9FAFB]">
            {/* como funciona */}
            <SobreSection />
            <PorqueSection />
            <ComoFuncionaSobre />
            <Footer home={false}/>
        </div>
    )
}