import React from "react";
import { FaUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import navFoodLogo from '../assets/navFoodLogo.png';
import { Link } from "react-router-dom";

export default function Header() {
    const user = {
        name: 'Jon'
    };
    const count = {
        totalCount: 15
    };

    const logout = () => {

    }

    return (
        <header className="w-full h-16 bg-slate-50 flex justify-between items-center p-4">
            <div>
                <img className="w-16" src={navFoodLogo} alt="Logo" />
            </div>
            <div className="flex items-center gap-4">
                {!user.name ? (
                    <FaUser className="text-2xl text-gray-800 hover:text-gray-600 transition-all cursor-pointer" />
                ) : (
                    <div className="flex">
                        {/* User Name */}
                        <Link to={'/profile'} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{user.name}</Link>
                        <ul className="flex">
                            <Link to={'/profile'} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</Link>
                            <Link to={'/order'} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Orders</Link>
                            <Link onClick={logout} to={''} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</Link>
                        </ul>
                    </div>
                )}
                <Link to={"/cart"} className="relative">
                    <div><BsCart4 className="text-3xl text-gray-800 hover:text-gray-600 transition-all cursor-pointer" /></div>
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 z-10">
                        {count.totalCount}
                    </span>
                </Link>
            </div>
        </header>
    );
}
