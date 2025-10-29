import profile from "../assets/images/profile/profile.png";
import ideaIcon from "../assets/images/logo/idea.svg";
import rocketIcon from "../assets/images/logo/rocket.svg";

export default function ProfileCard() {
    return (
        <section
            className="w-full min-h-[600px] py-8 px-4 flex justify-center items-center bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200"
        >
            <div className="max-w-[1152px] w-full flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Bagian kiri */}
                <div className="max-w-[472px] min-h-[244px] h-auto space-y-4 text-center lg:text-left order-2 lg:order-1">
                    <p className="text-gray-400 text-[12px] tracking-[2.4px] font-poppins">
                        Hi, I'm
                    </p>
                    <h1 className="text-[#1F2937] text-[32px] lg:text-[48px] font-bold font-poppins leading-[1.2]">
                        Arie Pratama
                    </h1>

                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-medium text-[14px] lg:text-[16px] shadow-md">
                        UI/UX Designer & Web Developer
                    </div>

                    <p className="text-gray-500 text-[16px] lg:text-[18px] leading-[1.6] mt-4 font-poppins">
                        Membantu brand dan bisnis membangun produk digital yang impactful
                        lewat desain yang kreatif, modern, dan user-centric.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
                        <button className="bg-blue-600 text-white font-semibold text-[16px] px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transform transition-all duration-300 hover:scale-[1.03]">
                            Lihat Karya
                        </button>
                        <button className="border border-blue-400 text-blue-600 font-semibold text-[16px] px-6 py-3 rounded-xl hover:bg-blue-50 transform transition-all duration-300 hover:scale-[1.03]">
                            Hubungi Saya
                        </button>
                    </div>
                </div>

                {/* Bagian kanan */}
                <div className="relative w-[360px] h-[360px] lg:w-[420px] lg:h-[420px] order-1 lg:order-2 mt-20">
                    {/* Foto profile */}
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />

                    {/* Icon ide */}
                    <div className="absolute -top-5 -left-1 w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] rounded-[16px] bg-white/90 shadow-lg flex justify-center items-center">
                        <img src={ideaIcon} alt="Idea" className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>

                    {/* Icon roket */}
                    <div className="absolute bottom-5 right-1 w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-full flex justify-center items-center shadow-lg bg-gradient-to-r from-purple-500 to-pink-500">
                        <img src={rocketIcon} alt="Rocket" className="w-7 h-7 lg:w-9 lg:h-9" />
                    </div>
                </div>
            </div>
        </section>
    );
}
