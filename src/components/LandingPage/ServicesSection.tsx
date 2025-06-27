import { useState, useEffect, useCallback } from 'react';

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    {
      id: 1,
      title: "Social Media Management",
      description:
        "In the age of social media, we build your brand's presence across all major platforms. Our team creates and manages compelling content that engages your audience and drives results.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c5941c234ee7d2de29fde2dcdd17606d253f0c09",
      width: "w-full md:w-[477px]",
    },
    {
      id: 2,
      title: "Leading Diamond",
      description:
        "Leading Diamond isn't just a name — it's a reflection of premium quality and bold presence. Its brand identity is built on elegance and precision, combining luxurious visual elements with sharp modern design.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3b091ef44728a69cf1c03a76ab76ea4b02acfdbf",
      width: "w-full md:w-[153px]",
    },
    {
      id: 3,
      title: "Al Saad Group",
      description:
        "Al Saad Group carries a legacy of trust, leadership, and forward-thinking vision. Its brand identity reflects strength and clarity — blending modern design with timeless professionalism.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dba2c2a85b8b97ea04d27757efb3423c39f38fc6",
      width: "w-full md:w-[153px]",
    },
    {
      id: 4,
      title: "CinnaRolls",
      description:
        "CinnaRolls is more than a dessert brand — it's a warm, delightful experience wrapped in flavor and feeling. Its identity blends soft, inviting visuals with playful typography and cozy colors that evoke the smell of fresh cinnamon and the joy of indulgence.",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1d750a8ac0778110452ad5a6ca6ba9c1b188b553",
      width: "w-full md:w-[153px]",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, services.length]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating, nextSlide]);

  // Touch handling for swipe gestures
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="services" className="relative py-12 sm:py-16 lg:py-24 bg-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[468px] lg:h-[473px] opacity-30 sm:opacity-40 lg:opacity-50">
        <svg
          className="w-full h-full fill-[#1225B9] blur-[50px] sm:blur-[60px] lg:blur-[75px] rotate-[88.762deg]"
          viewBox="0 0 358 769"
        >
          <path d="M-0.114597 618.948C-118.657 621.509 -392.547 428.025 -194.8 426.175C2.94642 424.325 -217.197 398.403 -129.746 223.754C-42.2952 49.1038 203.667 223.816 206.944 375.516C210.221 527.216 118.428 616.387 -0.114597 618.948Z" />
        </svg>
      </div>

      <div className="absolute right-0 top-1/4 w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] lg:w-[984px] lg:h-[705px] opacity-30 sm:opacity-40 lg:opacity-50">
        <svg
          className="w-full h-full fill-[#F41CCC] blur-[50px] sm:blur-[60px] lg:blur-[75px]"
          viewBox="0 0 361 1005"
        >
          <path d="M1134.1 466.134C1134.1 642.722 715.325 1044.31 720.412 749.813C725.498 455.316 661.071 782.268 298.244 646.439C-64.5819 510.609 313.504 150 632.248 150C950.993 150 1134.1 289.546 1134.1 466.134Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            Our Services
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="block sm:hidden">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="relative h-[400px] rounded-[20px] overflow-hidden shadow-[0px_8px_45px_8px_#1225B9] transform transition-all duration-300 hover:scale-105">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-gray-500"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/8" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-white text-xl font-bold leading-tight mb-3">
                            {service.title}
                          </h3>
                          <p className="text-white text-sm leading-relaxed opacity-90">
                            {service.description}
                          </p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="flex-shrink-0 w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300">
                          <svg
                            className="w-7 h-7 text-black"
                            fill="currentColor"
                            viewBox="0 0 69 69"
                          >
                            <path d="M52.8083 35.8696L39.1973 48.1603C38.7712 48.5452 38.1932 48.7614 37.5905 48.7614C36.9878 48.7614 36.4098 48.5452 35.9836 48.1603C35.5574 47.7755 35.318 47.2536 35.318 46.7094C35.318 46.1651 35.5574 45.6432 35.9836 45.2584L45.7211 36.4688H17.932C17.3304 36.4688 16.7534 36.253 16.3279 35.8688C15.9025 35.4847 15.6635 34.9636 15.6635 34.4204C15.6635 33.8771 15.9025 33.356 16.3279 32.9719C16.7534 32.5877 17.3304 32.3719 17.932 32.3719H45.7211L35.9874 23.5772C35.5612 23.1924 35.3218 22.6704 35.3218 22.1262C35.3218 21.582 35.5612 21.0601 35.9874 20.6752C36.4136 20.2904 36.9916 20.0742 37.5942 20.0742C38.1969 20.0742 38.7749 20.2904 39.2011 20.6752L52.8121 32.9659C53.0236 33.1565 53.1914 33.3829 53.3057 33.6322C53.4201 33.8815 53.4787 34.1487 53.4784 34.4185C53.478 34.6883 53.4187 34.9554 53.3037 35.2044C53.1887 35.4535 53.0203 35.6795 52.8083 35.8696Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-6 space-x-4 relative">
            {/* Previous Button - match TeamSection style */}
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20 disabled:opacity-50"
            >
              <svg className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25">
                <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#1225B9] scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button - match TeamSection style */}
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20 disabled:opacity-50"
            >
              <svg className="w-3 h-5 text-[#14142B] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25">
                <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
              </svg>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 mx-4">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#1225B9] to-[#F41CCC] rounded-full transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / services.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-2 lg:gap-0 justify-items-center">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative w-full max-w-sm sm:max-w-none group cursor-pointer transition-all duration-300 hover:transform hover:scale-105 sm:hover:scale-110 hover:z-10"
              style={{
                marginLeft: window.innerWidth >= 1024 && index > 0 ? '-20px' : '0',
                zIndex: services.length - index
              }}
            >
              <div className="relative h-[350px] sm:h-[380px] lg:h-[420px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden shadow-[0px_5px_37px_5px_#1225B9] sm:shadow-[0px_8px_55px_8px_#1225B9] lg:shadow-[0px_10px_74px_10px_#1225B9]">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-gray-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/8" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <div className="flex items-end justify-between gap-3 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-[23px] font-bold leading-tight mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white text-xs sm:text-xs md:text-sm lg:text-[8.5px] leading-tight opacity-90">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-300 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <svg
                        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-black"
                        fill="currentColor"
                        viewBox="0 0 69 69"
                      >
                        <path d="M52.8083 35.8696L39.1973 48.1603C38.7712 48.5452 38.1932 48.7614 37.5905 48.7614C36.9878 48.7614 36.4098 48.5452 35.9836 48.1603C35.5574 47.7755 35.318 47.2536 35.318 46.7094C35.318 46.1651 35.5574 45.6432 35.9836 45.2584L45.7211 36.4688H17.932C17.3304 36.4688 16.7534 36.253 16.3279 35.8688C15.9025 35.4847 15.6635 34.9636 15.6635 34.4204C15.6635 33.8771 15.9025 33.356 16.3279 32.9719C16.7534 32.5877 17.3304 32.3719 17.932 32.3719H45.7211L35.9874 23.5772C35.5612 23.1924 35.3218 22.6704 35.3218 22.1262C35.3218 21.582 35.5612 21.0601 35.9874 20.6752C36.4136 20.2904 36.9916 20.0742 37.5942 20.0742C38.1969 20.0742 38.7749 20.2904 39.2011 20.6752L52.8121 32.9659C53.0236 33.1565 53.1914 33.3829 53.3057 33.6322C53.4201 33.8815 53.4787 34.1487 53.4784 34.4185C53.478 34.6883 53.4187 34.9554 53.3037 35.2044C53.1887 35.4535 53.0203 35.6795 52.8083 35.8696Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;