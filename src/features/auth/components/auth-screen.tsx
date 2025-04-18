"use client";
import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "../components/sign-in-card";
import { SignUpCard } from "../components/sign-up-card";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>();

  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
        <div className="md:h-auto md:w-[420px]">
            {state === "signIn" ? <SignInCard setState={setState} />: <SignUpCard setState={setState} />}
        </div>
    </div>
  )
};