import mailIcon from "../assets/images/logo/mail.svg";
import phoneIcon from "../assets/images/logo/wa.svg";
import locationIcon from "../assets/images/logo/location.svg";
import sendIcon from "../assets/images/logo/msg.svg";

export default function ContactSection() {
    return (
        <section className="w-full flex justify-center py-20 px-4 md:-ml-[70px]">
            <div
                className="relative w-full max-w-[920px] rounded-[24px] shadow-[0_25px_50px_#00000040]
                bg-gradient-to-r from-[#DBEAFE] via-white to-[#F3E8FF]
                p-8 md:p-12 flex flex-col md:flex-row items-start gap-10 overflow-visible"
            >
                {/* card contact */}
                <div className="flex flex-col justify-between md:max-w-[896px] md:min-h-[564px] text-left z-10">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-20 leading-[24px]">
                            Tertarik<br />Kolaborasi?
                        </h2>
                        <p className="text-gray-600 text-[16px] leading-relaxed mb-10">
                            Yuk, diskusikan project <br /> impianmu. Saya siap <br /> membantu mewujudkan <br /> produk
                            digital yang <br /> impactful buat bisnismu.
                        </p>
                    </div>

                    <div className="mt-8 mb-10 flex flex-col gap-4 text-[16px] text-gray-700">
                        <div className="flex items-center gap-3">
                            <img src={mailIcon} alt="email icon" className="w-5 h-5" />
                            <span>arie@email.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={phoneIcon} alt="phone icon" className="w-5 h-5" />
                            <span>0812-3456-7890</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={locationIcon} alt="location icon" className="w-5 h-5" />
                            <span>Jakarta, Indonesia</span>
                        </div>
                    </div>
                </div>

                {/* card form */}
                <div
                    className="md:absolute md:top-1/2 right-[-150px] md:-translate-y-1/2 
                    bg-white rounded-[16px] shadow-[0_10px_15px_#0000001A,0_4px_6px_#0000001A]
                    p-8 w-full md:w-[800px] z-20 transition-all duration-300"
                >
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Nama"
                                className="flex-1 h-[50px] px-4 rounded-[8px] border border-gray-300
                                focus:outline-none focus:ring-2 focus:ring-blue-400 text-[16px]
                                font-poppins bg-gray-100"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 h-[50px] px-4 rounded-[8px] border border-gray-300
                                focus:outline-none focus:ring-2 focus:ring-blue-400 text-[16px]
                                font-poppins bg-gray-100"
                            />
                        </div>
                        <textarea
                            placeholder="Pesan"
                            className="w-full h-[122px] px-4 py-3 rounded-[8px] border border-gray-300
                            focus:outline-none focus:ring-2 focus:ring-blue-400 text-[16px]
                            font-poppins bg-gray-100 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 w-full h-[48px]
                            rounded-[12px] text-white font-semibold text-[16px] shadow-lg
                            transition-all duration-200 bg-gradient-to-r from-[#3B82F6] to-[#9333EA]
                            hover:brightness-90 hover:scale-[1.02]"
                        >
                            Kirim Pesan
                            <img src={sendIcon} alt="send icon" className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
