import citraProfile from "../assets/images/profile/citra-nadya.png";
import ramaProfile from "../assets/images/profile/rama-putra.png";

const TestimoniSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Citra Nadya",
            position: "Product Manager, Fintech",
            comment: "\"Arie mampu memahami kebutuhan tim kami dan menerjemahkannya menjadi desain yang sangat user-friendly. Komunikasi dan delivery selalu on time!\"",
            image: citraProfile
        },
        {
            id: 2,
            name: "Rama Putra",
            position: "CEO, Edulstrump",
            comment: "\"Kreativitas & kecepatan kerja Arie luar biasa. Landing page yang dibuatkan sangat modern & efektif meningkatkan konversi produk kami.\"",
            image: ramaProfile
        }
    ];

    return (
        <section className="w-full flex justify-center items-center py-16 bg-white ">
            <div className="w-full max-w-[1024px] flex flex-col items-center px-4">
                {/* Header Section */}
                <div className="w-full max-w-[976px] text-center mb-12">
                    <h2 className="text-[#1F2937] font-poppins font-bold text-3xl md:text-[30px] leading-[30px] mb-5">
                        Testimoni Klien
                    </h2>
                    <p className="text-[#4B5563] font-poppins font-normal text-sm md:text-[16px] leading-[16px] max-w-[474px] mx-auto">
                        Apa kata mereka yang pernah bekerja sama dengan saya.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="w-full flex flex-col lg:flex-row gap-8 justify-center">
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id}
                            className="w-full max-w-[472px] h-auto min-h-[244px] bg-white rounded-[16px] border border-gray-100 shadow-[0_10px_15px_#0000001A,0_4px_6px_#0000001A] p-8 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Profile Section */}
                            <div className="flex items-center gap-4 mb-6">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div className="flex flex-col">
                                    <h3 className="text-[#1F2937] font-poppins font-bold text-[16px] leading-[16px]">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-[#6B7280] font-poppins font-normal text-[14px] leading-[14px] mt-2">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>

                            {/* Comment Section */}
                            <div className="flex-1">
                                <p className="text-[#4B5563] font-poppins font-normal text-[14px] md:text-[16px] leading-[1.6]">
                                    {testimonial.comment}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimoniSection;