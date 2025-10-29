import mobileImg from "../assets/images/app-ss/gofinanceapp.png";
import websiteImg from "../assets/images/app-ss/edusmart.png";
import dashboardImg from "../assets/images/app-ss/datahub.png";
import mobileIcon from "../assets/images/logo/hp.svg";
import websiteIcon from "../assets/images/logo/web.svg";
import chartIcon from "../assets/images/logo/chart.svg";
import linkIcon from "../assets/images/logo/link.svg";

export default function PortfolioSection() {
    const portfolios = [
        {
            tag: "Mobile App",
            icon: mobileIcon,
            tagColor: "bg-[#FFFFFF]",
            tagText: "text-[#2563EB]",
            title: "GoFinance App",
            desc: "Aplikasi manajemen keuangan dengan desain yang clean, modern, dan mudah digunakan.",
            image: mobileImg,
            link: "#",
        },
        {
            tag: "Website",
            icon: websiteIcon,
            tagColor: "bg-[#FFFFFF]",
            tagText: "text-[#DB2777]",
            title: "EduSmart Landing Page",
            desc: "Landing page untuk platform pendidikan dengan fokus pada visual storytelling & UX.",
            image: websiteImg,
            link: "#",
        },
        {
            tag: "Dashboard",
            icon: chartIcon,
            tagColor: "bg-[#FFFFFF]",
            tagText: "text-[#9333EA]",
            title: "DataHub Dashboard",
            desc: "Dashboard analytics untuk SaaS dengan visual data yang interaktif & engaging.",
            image: dashboardImg,
            link: "#",
        },
    ];

    return (
        <section className="w-full max-w-[1152px] mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Portfolio Pilihan
            </h2>
            <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
                Beberapa project terbaik yang pernah saya kerjakan untuk klien lokal
                maupun internasional.
            </p>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {portfolios.map((item, index) => (
                    <div
                        key={index}
                        className="w-[346px] h-[420px] bg-white rounded-[16px] shadow-[0_4px_6px_#0000001A,0_2px_4px_#0000001A] overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_20px_#00000026]"
                    >
                        {/* Gambar */}
                        <div className="relative w-full h-[224px]">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className={`absolute top-4 left-4 ${item.tagColor} rounded-full px-3 py-1 text-[12px] font-semibold shadow-sm flex items-center gap-2`}
                            >
                                <img
                                    src={item.icon}
                                    alt={`${item.tag} icon`}
                                    className="w-4 h-4"
                                />
                                <span className={`${item.tagText}`}>{item.tag}</span>
                            </div>
                        </div>

                        {/* Deskripsi */}
                        <div className="text-left px-6 py-4 mt-4">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                            <a
                                href={item.link}
                                className="text-[#2563EB] font-semibold text-sm hover:underline flex items-center gap-2 transition-all duration-200 hover:text-blue-700"
                            >
                                Lihat Detail
                                <img
                                    src={linkIcon}
                                    alt="link icon"
                                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
