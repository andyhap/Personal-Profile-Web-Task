import profile from "../assets/images/profile/profile.png";
import ideaIcon from "../assets/images/logo/idea.svg";
import rocketIcon from "../assets/images/logo/rocket.svg";

export default function ProfileCard() {
    return (
        <section
            className="w-full min-h-[600px] py-8 px-4 flex justify-center items-center"
            style={{
                background:
                "linear-gradient(90deg, #BFDBFE 0%, #F3E8FF 50%, #FCE7F3 100%)",
            }}
            >
            <div className="max-w-[1152px] w-full flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Bagian kiri */}
                <div className="max-w-[500px] space-y-4 text-center lg:text-left order-2 lg:order-1">
                    <p className="text-gray-400 text-[12px] tracking-[2.4px] font-poppins">
                        Hi, I'm
                    </p>
                    <h1 className="text-[#1F2937] text-[32px] lg:text-[48px] font-bold font-poppins leading-[1.2]">
                        Arie Pratama
                    </h1>

                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-medium text-[14px] lg:text-[16px]">
                        UI/UX Designer & Web Developer
                    </div>

                    <p className="text-gray-500 text-[16px] lg:text-[18px] leading-[1.6] mt-4 font-poppins">
                        Membantu brand dan bisnis membangun produk digital yang impactful
                        lewat desain yang kreatif, modern, dan user-centric.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
                        <button className="bg-blue-600 text-white font-semibold text-[16px] px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transform transition-all duration-300 hover:scale-[1.03] ">
                        Lihat Karya
                        </button>
                        <button className="border border-blue-400 text-blue-600 font-semibold text-[16px] px-6 py-3 rounded-xl hover:bg-blue-50 transform transition-all duration-300 hover:scale-[1.03]">
                        Hubungi Saya
                        </button>
                    </div>
                </div>

                {/* Bagian kanan */}
                <div className="relative w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] order-1 lg:order-2">
                    {/* Foto profile */}
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-[20px] shadow-lg"
                    />

                    {/* Icon ide */}
                    <div className="absolute -top-4 -left-4 w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] rounded-[12px] bg-white/90 shadow-lg flex justify-center items-center">
                        <img src={ideaIcon} alt="Idea" className="w-4 h-4 lg:w-6 lg:h-6" />
                    </div>

                    {/* Icon roket */}
                    <div
                        className="absolute -bottom-6 -right-6 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-full flex justify-center items-center shadow-lg"
                        style={{
                        background:
                            "linear-gradient(90deg, #A855F7 0%, #EC4899 100%)",
                        }}
                    >
                        <img src={rocketIcon} alt="Rocket" className="w-5 h-5 lg:w-7 lg:h-7" />
                    </div>
                </div>
            </div>
        </section>
    );
}