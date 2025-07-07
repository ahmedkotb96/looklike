import { useState } from "react";
import { useNavigate } from "react-router-dom";
import homeBottomLeft from "@/assets/decoration/home_bottom_left.webp";
import cinnarollsBrandIdentity from "@/assets/Portfolio_imgs/cinnarolls_portfolio.webp";
import elmassaBrandIdentity from "@/assets/Portfolio_imgs/elmassa_portfolio.webp";
import ihomeBrandIdentity from "@/assets/Portfolio_imgs/ihome_portfolio.webp";
import zodiacBrandIdentity from "@/assets/Portfolio_imgs/zodiac_portfolio.webp";
import centromallBrandIdentity from "@/assets/Portfolio_imgs/centromall_portfolio.webp";

const PortfolioSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "iHome",
      description:
        "We crafted a modern and clean visual identity for i Home, reflecting the brand's focus on smart living and contemporary design.",
      image: ihomeBrandIdentity,
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/19262947c98dfd5570bca883385edc5103f3b892",
    },
    {
      id: 2,
      title: "Elmassa",
      description: "Developed a refined and modern brand identity that reflects luxury, trust, and elegance. The design captures the brand's premium positioning through a sophisticated logo, elegant typography, and a timeless color palette.",
      image: elmassaBrandIdentity,
      logo: "",
    },
    {
      id: 3,
      title: "Zodiac",
      description: "We developed a bold and professional visual identity for Zodiac, capturing the essence of trust, growth, and real estate expertise. The design reflects the brand's ambition to lead in the property marketing sector.",
      image: zodiacBrandIdentity,
      logo: "",
    },
    {
      id: 4,
      title: "CinnaRolls",
      description: "We developed a bold and professional visual identity for Zodiac, capturing the essence of trust, growth, and real estate expertise. The design reflects the brand's ambition to lead in the property marketing sector.",
      image: cinnarollsBrandIdentity,
      logo: "",
    },
    {
      id: 5,
      title: "Centro Mall",
      description: "Modern and clean brand identity for Centro Mall, reflecting the brand's focus on family shopping and contemporary retail experience.",
      image: centromallBrandIdentity,
      logo: "",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="relative py-24 pb-56 bg-black">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #1225B9 57.83%, #000 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Check Our
            <br />
            Last Work
          </h2>
          <p className="text-white text-lg">
            Take a look at our latest projects where creativity meets strategy.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center md:px-4">
          {/* Previous Button - DESKTOP ONLY */}
          <button
            onClick={prevProject}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 hidden md:flex items-center justify-center z-20 group absolute left-0 md:left-4"
          >
            <svg
              className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 15 25"
            >
              <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
            </svg>
          </button>
          
          {/* Card Container */}
          <div className="w-full max-w-4xl mx-auto md:px-4">
            <div className="relative h-auto md:h-[400px] rounded-[50px] overflow-hidden bg-white/10 backdrop-blur-[160px] border border-white/20">
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-[200px] md:h-full">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-full object-cover rounded-t-[50px] md:rounded-l-[50px] md:rounded-tr-none cursor-pointer"
                    onClick={() => navigate("/branding_identity_design")}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="space-y-4 md:space-y-6">
                    <div className="mb-2 md:mb-4">
                      <h3 className="text-white text-3xl md:text-5xl font-bold">
                        {projects[currentProject].title}
                      </h3>
                    </div>
                    <p className="text-white text-base md:text-lg lg:text-xl lg:leading-7 font-medium text-justify">
                      {projects[currentProject].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button - DESKTOP ONLY */}
          <button
            onClick={nextProject}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 hidden md:flex items-center justify-center z-20 group absolute right-0 md:right-4"
          >
            <svg
              className="w-3 h-5 text-[#14142B] group-hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 15 25"
            >
              <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
            </svg>
          </button>
        </div>

        {/* --- MODIFICATION START --- */}
        {/* Mobile Navigation Controls: [Prev] [Dots] [Next] */}
        <div className="block md:hidden mt-8">
          <div className="flex justify-center items-center w-full max-w-sm mx-auto px-2 gap-4">
            <button onClick={prevProject} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex-shrink-0 group">
              <svg className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25"><path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" /></svg>
            </button>
            <div className="flex justify-center items-center space-x-1.5">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`flex-shrink-0 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentProject === index
                      ? "bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg"
                      : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <button onClick={nextProject} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex-shrink-0 group">
              <svg className="w-3 h-5 text-[#14142B] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25"><path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" /></svg>
            </button>
          </div>
        </div>
        {/* --- MODIFICATION END --- */}

        {/* Desktop Dots Indicator */}
        <div className="hidden md:flex items-center justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject
                  ? 'bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Background decorative image */}
      <div className="absolute -right-32 bottom-[-75px] z-0">
        <img
          src={homeBottomLeft}
          alt="3D decorative element"
          className="w-[517px] h-[517px] object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default PortfolioSection;