"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
     const links = [
        { href: "/", label: "Início" },
        { href: "/sobre", label: "Sobre o Programa" },
        { href: "/faq", label: "FAQ" },
    ]

    return (
        <div className="bg-[#12495E] h-21.5 w-full px-4.25 flex justify-between md:h-20 md:px-40">
            <Image 
                alt="logo"
                src="/assets/logoNav.svg"
                width={113}
                height={51}
                className="object-contain"
            ></Image>
            <Image 
                alt="menu"
                src="/assets/menuNav.svg"
                width={25}
                height={25}
                className="object-contain md:hidden"
            ></Image>

            <div className="hidden md:flex items-center gap-12">
            <nav className="hidden md:flex md:gap-12 md:text-white md:text-[16px] md:font-normal md:py-3">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={pathname === link.href ? "font-bold" : ""}>
                        {link.label}
                    </Link>
                ))}
            </nav>
                <button className="bg-[#F6B22B] w-40.5 h-12 text-[#232126] font-bold text-[20px] rounded-xl">Assinar agora</button>
            </div>
        </div>
    );
}

export default Navbar