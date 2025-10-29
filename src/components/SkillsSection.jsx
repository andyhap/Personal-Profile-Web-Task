import figmaIcon from "../assets/images/logo/figma.svg";
import javascriptIcon from "../assets/images/logo/javascript.svg";
import reactIcon from "../assets/images/logo/react.svg";
import htmlcssIcon from "../assets/images/logo/tag.svg";

export default function SkillSection() {
    const skills = [
        {
            name: "Figma",
            detail: "UI Design, Prototyping",
            icon: figmaIcon,
            color: "bg-[#E0E7FF]",
        },
        {
            name: "JavaScript",
            detail: "Front-End Development",
            icon: javascriptIcon,
            color: "bg-[#FEF3C7]",
        },
        {
            name: "React",
            detail: "Web Apps & SPA",
            icon: reactIcon,
            color: "bg-[#EDE9FE]",
        },
        {
            name: "HTML & CSS",
            detail: "Responsive Design",
            icon: htmlcssIcon,
            color: "bg-[#FFE4E6]",
        },
    ];

    return (
        <section className="w-full max-w-[1152px] mx-auto px-6 py-16 text-center" id="skills">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Keahlian</h2>
            <p className="text-gray-500 mb-12">
                Saya menguasai berbagai tools dan teknologi untuk membangun produk digital yang modern.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="w-full max-w-[252px] h-[194px] bg-white rounded-[16px] shadow-[0_4px_6px_#0000001A,0_2px_4px_#0000001A] flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div
                            className={`w-[58px] h-[62px] ${skill.color} rounded-full flex items-center justify-center mb-4`}
                        >
                            <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                        <p className="text-gray-500 text-sm">{skill.detail}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}