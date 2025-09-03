"use client"

import Navbar from "@/components/navbar";
import SignInForm from "@/components/SignInForm";
import SignUpForm from "@/components/SignUpForm";
import { useState } from "react";


export default function Home() {
  const [currentForm, setCurrentForm] = useState("SignIn")



  console.log(currentForm)


  return (
    <div className="relative  min-h-screen flex items-center justify-center bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover px-5 font-merriweather  " >

{/* dark overlay  */}
      <div className="absolute w-full h-full bg-black/25 " ></div>



      <Navbar setCurrentForm = {setCurrentForm} />





      {/* form wrapper */}
      <div className="h-screen  w-full max-w-5xl  flex items-center justify-center relative  overflow-hidden min-w-2xs " >
        <SignInForm currentForm={currentForm} setCurrentForm = {setCurrentForm}/>
        <SignUpForm currentForm={currentForm} setCurrentForm = {setCurrentForm} />
      </div>
    </div>
  );
}
