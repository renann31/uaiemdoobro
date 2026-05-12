"use client";
import AppSection from "@/components/appSection";
import ExplicandoSection from "@/components/explicandoSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import InvestimentoSection from "@/components/investimentoSection";
import UaiSection from "@/components/uaiSection";
import VantagensSection from "@/components/vantagensSection";
import FaqHome from "@/components/faqHome";

export default function Home() {

    return (
        <div className="bg-[#F9FAFB]">
            <Header />
            <UaiSection />
            <AppSection />
            <ExplicandoSection />
            <VantagensSection />
            <InvestimentoSection />
            <FaqHome />
            <Footer home={true} />

        </div>
    );
}