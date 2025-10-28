import { useState } from "react";
import profile from "../assets/images/profile/circle-profile.png";
import instagram from "../assets/images/logo/instagram.svg";
import linkedin from "../assets/images/logo/linkedin.svg";
import email from "../assets/images/logo/email.svg";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm relative">
            <div
                className="max-w-[1152px] h-[80px] mx-auto flex items-center justify-between px-4 sm:px-6"
            >
                {/* Logo dan nama */}
                <div className="flex items-center gap-3">
                    <img
                        src={profile}
                        alt="Logo"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-purple-400"
                    />
                    <span className="font-semibold text-gray-800 text-base sm:text-lg">
                        Arie Pratama
                    </span>
                </div>

                {/* Navigasi */}
                <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <li className="hover:text-blue-600 cursor-pointer">About</li>
                    <li className="hover:text-blue-600 cursor-pointer">Skills</li>
                    <li className="hover:text-blue-600 cursor-pointer">Portfolio</li>
                    <li className="hover:text-blue-600 cursor-pointer">Contact</li>
                </ul>

                {/* Icon sosmed */}
                <div className="flex items-center gap-4">
                    <a href="#" aria-label="Instagram">
                        <img
                        src={instagram}
                        alt="Instagram"
                        className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-70 transition"
                        />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-70 transition"
                        />
                    </a>
                    <a href="#" aria-label="Email">
                        <img
                        src={email}
                        alt="Email"
                        className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-70 transition"
                        />
                    </a>
                </div>

                {/* Hamburger Button untuk mobile */}
                <button 
                    className="md:hidden flex flex-col gap-1 w-6 h-6"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="w-full h-0.5 bg-gray-800"></span>
                    <span className="w-full h-0.5 bg-gray-800"></span>
                    <span className="w-full h-0.5 bg-gray-800"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 z-50">
                    <ul className="flex flex-col gap-4 text-gray-700 font-medium">
                        <li className="hover:text-blue-600 cursor-pointer">About</li>
                        <li className="hover:text-blue-600 cursor-pointer">Skills</li>
                        <li className="hover:text-blue-600 cursor-pointer">Portfolio</li>
                        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    );
}