import userIcon from "../assets/images/logo/person.svg";
import textboxIcon from "../assets/images/logo/text-box.svg";

const AboutSection = () => {
    return (
        <section className="w-full flex justify-center items-center py-8 px-4">
            <div
                className="w-full max-w-[1024px] min-h-[384px] bg-white rounded-[24px] border border-gray-200 shadow-lg flex flex-col md:flex-row items-center p-6 md:p-8"
            >
                {/* Icon */}
                <div
                    className="flex-shrink-0 w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full flex items-center justify-center mb-6 md:mb-0"
                    style={{
                        background:
                        "linear-gradient(90deg, #BFDBFE 0%, #D8B4FE 50%, #FBCFE8 100%)",
                    }}
                    >
                    <img src={userIcon} alt="User Icon" className="w-12 h-12 md:w-20 md:h-20 opacity-80" />
                </div>

                {/* Content*/}
                <div className="md:ml-12 flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-[#1F2937] font-poppins font-bold text-[20px] md:text-[24px] text-center md:text-left">
                        Tentang Saya
                        </h2>
                        <p className="text-[#4B5563] font-poppins text-[14px] md:text-[16px] mt-4 md:mt-6 leading-[1.6] text-center md:text-left">
                        Saya adalah seorang UI/UX Designer & Web Developer berdomisili di Jakarta
                        dengan pengalaman lebih dari 5 tahun di industri kreatif. Passion saya
                        adalah menciptakan solusi digital yang tidak hanya indah secara visual,
                        tapi juga mudah digunakan dan berdampak positif bagi pengguna.
                        </p>
                    </div>

                    {/* Skill List */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-x-6 text-[#1F2937] text-[14px] mt-6">
                        <span className="flex items-center gap-1">
                        <span className="text-blue-500">✔</span> Problem Solver
                        </span>
                        <span className="flex items-center gap-1">
                        <span className="text-blue-500">✔</span> Team Player
                        </span>
                        <span className="flex items-center gap-1">
                        <span className="text-blue-500">✔</span> Fast Learner
                        </span>
                        <span className="flex items-center gap-1">
                        <span className="text-blue-500">✔</span> Kreatif & Adaptif
                        </span>
                    </div>

                    {/* Button */}
                <button
                className="flex items-center justify-center gap-2 w-full md:w-[760px] h-[40px] rounded-[8px] mt-6 text-white font-semibold shadow-lg mx-auto"
                style={{
                    background: "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
                }}
                >
                    <img
                        src={textboxIcon}
                        alt="email icon"
                        className="w-5 h-5"
                    />
                    <span>Konsultasi Gratis</span>
                </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;