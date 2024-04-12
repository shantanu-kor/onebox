import React from 'react';
import { Card } from 'flowbite-react';
import { FcGoogle } from "react-icons/fc";

const LoginCard = () => {
    const googleHandler = async () => {
        const tab = window.open('https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/google-login', '_self');
    }

    return (
        <Card className="mt-14 md:mx-auto mx-4 max-w-lg border-[1px] border-[#343A40] bg-[#111214]">
            <h2 className="text-2xl font-medium text-center">Create New Account</h2>
            <button className="border-[1px] border-[#343A40] p-3 rounded-md" onClick={googleHandler}>
                <div className="flex gap-3 justify-center">
                    <FcGoogle className="mt-1" />
                    <span>Sign Up with Google</span>
                </div>
            </button>
            <br />
            <button className="p-3 bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-950 md:mx-[120px] mx-10 rounded-md">Create an Account</button>
            <div className="flex justify-center gap-1 mt-2">
                <span>Already have an account?</span>
                <button className="font-medium">Sign In</button>
            </div>
        </Card>
    )
}

export default LoginCard;