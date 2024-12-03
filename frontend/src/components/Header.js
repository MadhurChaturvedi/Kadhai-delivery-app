import React from "react";
import { FaUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import navFoodLogo from '../assets/navFoodLogo.png'
export default function Header() {
    return (
        <header className="w-full h-16 bg-slate-50 flex justify-between items-center p-4">
            <div>
                <img
                    className="w-16"
                    src={navFoodLogo}
                    alt=""
                />
            </div>
            <div className="flex items-center gap-4">
                <FaUser className="text-2xl text-gray-800 hover:text-gray-600 transition-all cursor-pointer" />
                <BsCart4 className="text-2xl text-gray-800 hover:text-gray-600 transition-all cursor-pointer" />
            </div>
        </header>
    );
}
