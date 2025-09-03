"use client"

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { SetStateAction, useState } from "react";



interface NavbarProps {
    setCurrentForm: React.Dispatch<SetStateAction<string>>
}


export default function Navbar({ setCurrentForm }: NavbarProps) {
    const [showMenu, setShowMenu] = useState(false)
    const [isActive, setIsActive] = useState(0)

    const navLinks = [
        {
            label: "Home",
            url: "#",
        },
        {
            label: "Blog",
            url: "#",
        },
        {
            label: "Services",
            url: "#",
        },
        {
            label: "About",
            url: "#",
        },

    ]



    return (
        <nav className="fixed top-0 left-0 px-[4%] py-10 flex items-center justify-between gap-8 w-full z-10 font-signika " >

            <Link href="#" className="text-white font-bold text-3xl flex items-baseline gap-1 " >
                Logo
                <span className="block bg-white h-1 w-1 rounded-full" ></span>
            </Link>

            <ul className="w-fit hidden lg:flex items-center justify-center gap-10" >
                {navLinks.map((navLink, index) => (
                    <li onClick={() => setIsActive(index)} key={index} className={`text-white font-medium cursor-pointer text-lg relative before:absolute before:bottom-[-10px] before:w-0 before:bg-white before:h-1 before:rounded-sm hover:before:w-full before:transition-all before:duration-200 ${isActive === index ? "before:w-full" : "before:w-0" } `} ><Link href={navLink.url} > {navLink.label} </Link></li>
                ))}
            </ul>



            <div className="w-fit hidden lg:flex items-center gap-6 justify-center" >
                <button onClick={() => setCurrentForm("SignIn")} className=" px-8 py-2 rounded-3xl bg-white cursor-pointer text-black font-medium text-base  " >Sign In</button>
                <button onClick={() => setCurrentForm("SignUp")} className=" px-8 py-2 rounded-3xl bg-white cursor-pointer text-black font-medium text-base  ">Sign Up</button>
            </div>



            {/* menu button  */}
            <button className="cursor-pointer lg:hidden outline-none border-none bg-white/45 flex items-center justify-center h-12 w-12 rounded-full  " onClick={() => setShowMenu((prev) => !prev)} >
                {showMenu ? <X size={32} /> : <Menu size={32} />}
            </button>




            {/* mobile menu */}



            <div className={`fixed left-0 bottom-0 w-full bg-white/35 backdrop-blur-2xl h-[75%] px-[7%] py-[10%] flex items-center justify-center transition-all duration-150 ${showMenu ? "translate-y-0" : "translate-y-[100%] "} `} >



                <ul className="w-fit  flex flex-col items-start justify-center gap-10" >
                    {navLinks.map((navLink, index) => (
                        <li key={index} className="text-white font-medium cursor-pointer text-lg relative before:absolute before:bottom-[-10px] before:w-0 before:bg-white before:h-1 before:rounded-sm hover:before:w-full before:transition-all before:duration-200  " ><Link href={navLink.url} > {navLink.label} </Link></li>
                    ))}
                </ul>



            </div>

        </nav>
    )
}