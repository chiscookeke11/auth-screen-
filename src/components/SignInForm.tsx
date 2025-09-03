"use client"

import {  LockOpen, User } from "lucide-react";
import { SetStateAction, useState } from "react";


interface SignInFormProps {
    currentForm: string
    setCurrentForm: React.Dispatch<SetStateAction<string>>
}

export default function SignInForm({ currentForm, setCurrentForm }: SignInFormProps) {

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        console.log(name, value);
    };




    return (
        <form action="" className={`flex items-center justify-center flex-col gap-4 w-full  absolute top-[50%] left-[50%] translate-y-[-50%] transition-all duration-200  ${currentForm === "SignIn" ? "translate-x-[-50%]" : "translate-x-[500%]"} `} >
            <p className=" text-white text-lg md:text-xl font-semibold  mb-2" >Don&apos;t have an account? <button type="button" onClick={() => setCurrentForm("SignUp")} className="cursor-pointer" >Sign Up</button> </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4  ">Login</h1>




            <div className="w-full flex items-start gap-5 flex-col " >

                <div className="flex items-center gap-3 bg-white/45 w-full px-4 py-2 md:py-5 rounded-4xl " >
                    <User />
                    <input value={formValues.email} onChange={onChange} type="text" className=" bg-transparent w-full font-medium text-base outline-none border-none placeholder:text-white  " placeholder="Username or Email" />
                </div>


                <div className="flex items-center gap-3 bg-white/45 w-full px-4 py-2 md:py-5 rounded-4xl " >
                    <LockOpen />
                    <input value={formValues.password} onChange={onChange} type="password" className="bg-transparent w-full font-medium text-base outline-none border-none placeholder:text-white  " placeholder="Password" />
                </div>

                <button type="button" className="w-full  py-2 md:py-5 px-4 bg-gray-600 rounded-4xl cursor-pointer " >Sign In</button>
            </div>





            <div className=" w-full flex items-center justify-between gap-10 text-xs md:text-base " >
                <label htmlFor="rememberMe" className="cursor-pointer flex items-center gap-1" >
                    <input type="checkbox" id="rememberMe" />
                    <span>Remember me </span>
                </label>
                <button type="button" className="hover:underline cursor-pointer">Forgot Password? </button>

            </div>
        </form>
    )
}