import { useState, useRef } from "react";

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Hassan Edrees",
      role: "Ceo & Founder",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/576e7c0b0283afbfa317a844ee0811899d25d736",
      overlay:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/32ae49fcdfe1d9046e59961e283ad55fefdbaf4e",
    },
    {
      id: 2,
      name: "Ahmed Hamada",
      role: "General Manager",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 3,
      name: "Muaaz Negm",
      role: "Graphic Designer",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/230c1561be57e20ee3576f8154103af5702f2616",
      overlay:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0615ff0641a2e09af20ea0b1ba57d7322d7cf2f8",
    },
    {
      id: 4,
      name: "Amal Elgizawy",
      role: "Customer Services",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 5,
      name: "Omar Allam",
      role: "Video Editor",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 6,
      name: "Rawan Dorgham",
      role: "Moderator",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 7,
      name: "Abdelrahman Jackie",
      role: "Graphic Designer",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 8,
      name: "Nagwa Salah",
      role: "Account Manager",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 9,
      name: "Abd Elrahman Adel",
      role: "Reel Maker",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 10,
      name: "Seif El Deen",
      role: "Videographer",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 11,
      name: "Shehab Madkour",
      role: "Content Creator",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 12,
      name: "3am Hamada",
      role: "Taxi Driver",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Check if mobile or desktop
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Mobile: show one member at a time
      setCurrentSlide((prev) => {
        if (prev >= teamMembers.length - 1) return 0;
        return prev + 1;
      });
    } else {
      // Desktop: show 3 members at a time
      const maxSlide = teamMembers.length - 3;
      setCurrentSlide((prev) => {
        if (prev >= maxSlide) return 0;
        return prev + 3;
      });
    }
    
    setTimeout(() => setIsTransitioning(false), 350);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Check if mobile or desktop
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Mobile: show one member at a time
      setCurrentSlide((prev) => {
        if (prev <= 0) return teamMembers.length - 1;
        return prev - 1;
      });
    } else {
      // Desktop: show 3 members at a time
      const maxSlide = teamMembers.length - 3;
      setCurrentSlide((prev) => {
        if (prev <= 0) return maxSlide;
        return prev - 3;
      });
    }
    
    setTimeout(() => setIsTransitioning(false), 350);
  };

  return (
    <section id="team" className="relative py-24 bg-black overflow-hidden">
      {/* Add keyframes for animations */}
      <style>{`
        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.6);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[47px] font-bold mb-6">
            <span className="text-white">Meet Our </span>
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent">
              Creative Team
            </span>
          </h2>
        </div>

        {/* Team Carousel for desktop/tablet */}
        <div className="relative max-w-6xl mx-auto hidden md:block">
          {/* Team Cards Container (carousel) */}
          <div className="flex gap-6 justify-center items-center overflow-hidden w-full max-w-6xl mx-auto relative h-[400px] md:h-[538px]">
            {(() => {
              const startIndex = currentSlide;
              const endIndex = Math.min(startIndex + 3, teamMembers.length);
              const currentMembers = teamMembers.slice(startIndex, endIndex);
              
              return currentMembers.map((member, index) => (
                <div
                  key={`${member.id}-${currentSlide}`}
                  className={`w-full md:w-[300px] lg:w-[331px] h-[400px] md:h-[538px] relative flex-shrink-0 transform transition-all duration-600 ease-out ${
                    isTransitioning 
                      ? 'opacity-0 translate-y-8 scale-95' 
                      : 'opacity-100 translate-y-0 scale-100'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: !isTransitioning ? `slideInUp 0.6s ease-out ${index * 100}ms both` : 'none'
                  }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg transform transition-transform duration-300 hover:scale-105"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />

                  {/* Overlay Image (if exists) */}
                  {member.overlay && (
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${member.overlay})` }}
                    />
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg" />

                  {/* Content */}
                  <div className="absolute bottom-8 left-8 right-8 transform transition-transform duration-300 hover:translate-y-[-4px]">
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{member.role}</p>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>

        {/* Mobile: Single card carousel */}
        <div className="block md:hidden">
          <div
            className="relative max-w-xs mx-auto"
            onTouchStart={(e) => {
              if (e.touches.length === 1) {
                touchStartX.current = e.touches[0].clientX;
              }
            }}
            onTouchEnd={(e) => {
              if (typeof touchStartX.current !== 'number') return;
              const touchEndX = e.changedTouches[0].clientX;
              const diff = touchEndX - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(diff) > 40) {
                if (diff > 0) {
                  // Swipe right: previous
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentSlide((prev) => (prev <= 0 ? teamMembers.length - 1 : prev - 1));
                    setTimeout(() => setIsTransitioning(false), 350);
                  }
                } else {
                  // Swipe left: next
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentSlide((prev) => (prev >= teamMembers.length - 1 ? 0 : prev + 1));
                    setTimeout(() => setIsTransitioning(false), 350);
                  }
                }
              }
            }}
          >
            {/* Single Mobile Card */}
            <div className="flex justify-center">
              <div
                key={`mobile-${teamMembers[currentSlide % teamMembers.length].id}-${currentSlide}`}
                className={`w-full max-w-xs h-[400px] relative transform transition-all duration-600 ease-out ${
                  isTransitioning 
                    ? 'opacity-0 translate-y-8 scale-95' 
                    : 'opacity-100 translate-y-0 scale-100'
                }`}
                style={{
                  animation: !isTransitioning ? `slideInUp 0.6s ease-out both` : 'none'
                }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg transform transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: `url(${teamMembers[currentSlide % teamMembers.length].image})` }}
                />
                {/* Overlay Image (if exists) */}
                {teamMembers[currentSlide % teamMembers.length].overlay && (
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${teamMembers[currentSlide % teamMembers.length].overlay})` }}
                  />
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg" />
                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8 transform transition-transform duration-300 hover:translate-y-[-4px]">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {teamMembers[currentSlide % teamMembers.length].name}
                  </h3>
                  <p className="text-gray-300 text-sm">{teamMembers[currentSlide % teamMembers.length].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center mt-6 space-x-4 relative">
          {/* Previous Button - match ServicesSection style */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20 disabled:opacity-50"
          >
            <svg className="w-3 h-5 text-[#14142B] rotate-180 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 15 25">
              <path d="M0.913163 1.21105C1.22913 0.895084 1.6162 0.737101 2.07435 0.737101C2.53251 0.737101 2.91957 0.895084 3.23554 1.21105L13.2597 11.2589C13.5914 11.5907 13.7573 11.9738 13.7573 12.4082C13.7573 12.8427 13.5914 13.2258 13.2597 13.5576L3.23554 23.6054C2.91957 23.9214 2.53251 24.0793 2.07435 24.0793C1.6162 24.0793 1.22913 23.9214 0.913163 23.6054C0.597194 23.2894 0.439209 22.9063 0.439209 22.4561C0.439209 22.0058 0.597194 21.6227 0.913163 21.3067L9.7998 12.4201L0.913163 3.53343C0.597194 3.21746 0.439209 2.8304 0.439209 2.37224C0.439209 1.91409 0.597194 1.52702 0.913163 1.21105Z" />
            </svg>
          </button>

          {/* Dots Indicator - responsive for mobile vs desktop */}
          <div className="flex space-x-2">
            {/* Mobile dots - one for each member */}
            <div className="block md:hidden">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Desktop dots - one for each group of 3 */}
            <div className="hidden md:flex space-x-2">
              {Array.from({ length: Math.ceil(teamMembers.length / 3) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentSlide(index * 3);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentSlide / 3) === index
                      ? "bg-gradient-to-r from-[#1225B9] to-[#FF2DF7] shadow-lg"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Button - match ServicesSection style */}
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br from-[#1225B9] to-[#FF2DF7] transition-all duration-300 flex items-center justify-center z-20 disabled:opacity-50"
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
              style={{ width: `${((currentSlide + 1) / teamMembers.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;