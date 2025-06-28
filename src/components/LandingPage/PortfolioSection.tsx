import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "i Home",
      description:
        "We crafted a modern and clean visual identity for i Home, reflecting the brand's focus on smart living and contemporary design.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/00d117815d5d39b541dbfdfb070221ddb56cab96",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/19262947c98dfd5570bca883385edc5103f3b892",
    },
    {
      id: 2,
      title: "centromall_brand_identity",
      description: "Description for centromall_brand_identity.",
      image: "/src/assets/Portfolio_imgs/centromall_brand_identity.png",
      logo: "",
    },
    {
      id: 3,
      title: "cinnarolls_brand_identity",
      description: "Description for cinnarolls_brand_identity.",
      image: "/src/assets/Portfolio_imgs/cinnarolls_brand_identity.png",
      logo: "",
    },
    {
      id: 4,
      title: "elmassa_brand_identity",
      description: "Description for elmassa_brand_identity.",
      image: "/src/assets/Portfolio_imgs/elmassa_brand_identity.png",
      logo: "",
    },
    {
      id: 5,
      title: "home_brand_identity",
      description: "Description for home_brand_identity.",
      image: "/src/assets/Portfolio_imgs/home_brand_identity.png",
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
      <section id="portfolio" className="relative py-24 pb-64 bg-black">
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
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          {/* Project Card */}
          <div className="flex justify-center px-8 md:px-24">
            <div className="max-w-5xl w-full">
              <div className="relative h-[400px] md:h-[485px] rounded-[50px] overflow-hidden bg-white/10 backdrop-blur-[30px] border border-white/20">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 h-full">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover rounded-l-[50px] cursor-pointer"
                      onClick={() => navigate("/branding_identity_design")}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <div className="space-y-6">
                      {/* Project Logo */}
                      <div className="mb-8">
                        <svg
                          className="h-16 md:h-20 w-auto"
                          viewBox="0 0 225 77"
                          fill="white"
                        >
                          <path
                            d="M79.7856 30.3735C66.2299 30.3735 56.4484 40.2475 56.4484 53.2119C56.4484 66.1763 66.2299 76.0503 79.7856 76.0503C93.3413 76.0503 103.123 66.0905 103.123 53.2119C103.123 40.3333 93.4281 30.3735 79.7856 30.3735ZM79.7856 62.4841C74.2083 62.4841 70.5197 58.2771 70.5197 53.2119C70.5197 48.1467 74.2094 43.8528 79.7856 43.8528C85.3618 43.8528 89.1382 48.1456 89.1382 53.2119C89.1382 58.2782 85.4486 62.4841 79.7856 62.4841Z"
                            fill="white"
                          />
                          <path
                            d="M158.248 31.4903C152.242 31.4903 148.295 34.1516 145.722 37.3289C143.405 33.8084 139.458 31.4903 133.452 31.4903C128.39 31.4903 124.958 33.3793 122.728 35.869V32.5201H108.742V76.0504H122.728V51.0656C122.728 46.2579 126.331 45.1412 128.562 45.1412C130.793 45.1412 134.311 46.1721 134.311 51.0656V76.0504H148.295V51.0656C148.295 46.2579 151.814 45.1412 154.044 45.1412C156.275 45.1412 159.879 46.1721 159.879 51.0656V76.0504H173.779V47.2876C173.779 38.5303 168.887 31.4893 158.248 31.4893V31.4903Z"
                            fill="white"
                          />
                          <path
                            d="M201.877 30.3735C189.436 30.3735 179.397 40.3333 179.397 53.2119C179.397 66.7781 189.179 76.0503 203.85 76.0503C212.344 76.0503 219.036 72.2723 222.554 66.8639L212.773 61.0253C211.4 62.6568 208.312 64.8033 203.85 64.8033C198.53 64.8033 194.413 62.4852 192.954 57.4189H224.356C226.072 39.1309 214.746 30.3735 201.877 30.3735ZM192.954 49.0049C194.241 44.1971 197.931 41.6206 202.307 41.6206C207.111 41.6206 210.715 43.9386 211.744 49.0049H192.954Z"
                            fill="white"
                          />
                          <path
                            d="M25.9437 30.4156L25.9426 30.4167L22.6677 33.6939L16.1167 40.2494L16.1156 40.2505L14.9552 41.4117V19.5205H1.05756V76.0489H14.9552V61.0793L25.9426 50.0843L25.9437 50.0832L36.93 61.0771V76.0499H50.8298V55.3178L35.7707 40.2494L25.9437 30.4156Z"
                            fill="white"
                          />
                          <path
                            d="M7.018 15.0088C11.6867 15.5693 15.5989 11.6056 15.1582 6.96408C14.8249 3.44029 11.9244 0.629078 8.39441 0.39662C3.77887 0.0935572 0.0165311 4.07249 0.684113 8.75639C1.14762 12.0119 3.75607 14.6178 7.01908 15.0088H7.018Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      {/* Project Description */}
                      <p className="text-white text-lg md:text-xl lg:text-[25px] lg:leading-[33px] font-medium">
                        {projects[currentProject].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls - new addition */}
          <div className="flex items-center justify-center mt-6 space-x-4 relative">
            {/* Previous Button - match ServicesSection style */}
            <button
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20"
            >
              <svg className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25">
                <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
              </svg>
            </button>

            {/* Dots Indicator - assuming items and currentIndex are defined */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-[#1225B9] scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button - match ServicesSection style */}
            <button
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20"
            >
              <svg className="w-3 h-5 text-[#14142B] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25">
                <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
              </svg>
            </button>
          </div>

          {/* Progress Bar - matches ServicesSection */}
          <div className="mt-4 mx-4">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#1225B9] to-[#F41CCC] rounded-full transition-all duration-500"
                style={{ width: `${((currentProject + 1) / projects.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Background decorative image moved from TeamSection */}
      <div className="absolute -right-32 bottom-[-75px] z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/caa312e9412591d989bff3d9fae95d508f4290ef"
          alt="3D decorative element"
          className="w-[517px] h-[517px] object-contain"
        />
      </div>
    </section>
  );
};

export default PortfolioSection;
