"use client"

import { Eye, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import React, { SetStateAction, useState } from "react";



interface SignUpFormProps {
    currentForm: string
    setCurrentForm: React.Dispatch<SetStateAction<string>>
}


export default function SignUpForm({ currentForm, setCurrentForm }: SignUpFormProps) {
    const [showPassword, setShowPassword] = useState(false)
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rememberMe: true
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        console.log(name, value);
    };



    console.log(formValues)



    return (
        <form action="" className={`flex items-center justify-center flex-col gap-4 w-full  absolute top-[50%] left-[50%] translate-y-[-50%] transition-all duration-200  ${currentForm === "SignUp" ? "translate-x-[-50%]" : "translate-x-[500%]"} `} >
            <p className=" text-white text-lg md:text-xl font-semibold  mb-2">Have an account? <button type="button" onClick={() => setCurrentForm("SignIn")} className="cursor-pointer" >Login</button> </p>
            <h1 className=" text-3xl md:text-4xl font-bold text-white mb-4 " >Sign Up</h1>




            <div className="w-full flex items-start gap-5 flex-col " >

                <div className=" w-full flex gap-4 flex-wrap md:flex-nowrap " >

                    <label className="flex items-center gap-3 bg-white/45 w-full px-4 py-2 md:py-5 rounded-4xl " >
                        <User />
                        <input
                            value={formValues.firstName}
                            name="firstName"
                            onChange={onChange}
                            type="text"
                            className="bg-transparent w-full font-medium text-base outline-none border-none placeholder:text-white "
                            placeholder="Firstname" />
                    </label>

                    <label className="flex items-center gap-3 bg-white/45 w-full px-4 py-2 md:py-5 rounded-4xl " >
                        <User />
                        <input
                            value={formValues.lastName}
                            name="lastName"
                            onChange={onChange}
                            type="text"
                            className="bg-transparent w-full font-medium text-base outline-none border-none  placeholder:text-white"
                            placeholder="Lastname" />
                    </label>
                </div>

                <label className="flex items-center gap-3 bg-white/45 w-full px-4 py-2 md:py-5 rounded-4xl " >
                    <Mail />
                    <input
                        value={formValues.email}
                        name="email"
                        onChange={onChange}
                        type="email"
                        className="bg-transparent w-full font-medium text-base outline-none border-none placeholder:text-white"
                        placeholder="Email" />
                </label>


                <label className="flex items-center gap-3 bg-white/45 w-full px-4 py-2 md:py-5 rounded-4xl " >
                    <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="cursor-pointer outline-none border-none  p-1 " >
                        {showPassword ? <Eye /> : <Lock />}
                    </button>
                    <input
                        value={formValues.password}
                        name="password"
                        onChange={onChange}
                        type={showPassword ? "text" : "password"}
                        className="bg-transparent w-full font-medium text-base outline-none border-none placeholder:text-white"
                        placeholder="Password" />
                </label>

                <button type="button" className="w-full  py-2 md:py-5 px-4 bg-gray-600 rounded-4xl cursor-pointer " >Register</button>
            </div>





            <div className=" w-full flex items-center justify-between gap-10 text-xs md:text-base  " >
                <label htmlFor="rememberMe" className="cursor-pointer flex items-center gap-1" >
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={formValues.rememberMe}
                        onChange={(e) =>
                            setFormValues((prev) => ({
                                ...prev,
                                rememberMe: e.target.checked,
                            }))
                        }
                    />
                    <span>Remember me </span>
                </label>
                <Link href={"#"} type="button" className="hover:underline" >Terms & Conditions </Link>

            </div>
        </form>
    )
}