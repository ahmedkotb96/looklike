import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/LandingPage/Navigation";
import Footer from "@/components/LandingPage/Footer";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  overlay?: string;
}

export default function OurTeamMain() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const navigate = useNavigate();
  
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Hassan Edrees",
      role: "Ceo & Founder",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/576e7c0b0283afbfa317a844ee0811899d25d736",
      overlay: "https://cdn.builder.io/api/v1/image/assets/TEMP/32ae49fcdfe1d9046e59961e283ad55fefdbaf4e",
    },
    {
      id: 2,
      name: "Ahmed Hamada",
      role: "General Manager",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 3,
      name: "Muaaz Negm",
      role: "Graphic Designer",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/230c1561be57e20ee3576f8154103af5702f2616",
      overlay: "https://cdn.builder.io/api/v1/image/assets/TEMP/0615ff0641a2e09af20ea0b1ba57d7322d7cf2f8",
    },
    {
      id: 4,
      name: "Amal Elgizawy",
      role: "Customer Services",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 5,
      name: "Omar Allam",
      role: "Video Editor",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 6,
      name: "Rawan Dorgham",
      role: "Moderator",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 7,
      name: "Abdelrahman Jackie",
      role: "Graphic Designer",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 8,
      name: "Nagwa Salah",
      role: "Account Manager",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 9,
      name: "Abd Elrahman Adel",
      role: "Reel Maker",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 10,
      name: "Seif El Deen",
      role: "Videographer",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 11,
      name: "Shehab Madkour",
      role: "Content Creator",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
    },
    {
      id: 12,
      name: "3am Hamada",
      role: "Taxi Driver",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/67c404be428d97e3f815531dae4ebe5738b3b7dc",
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute -left-36 -top-36 w-[468px] h-[473px] text-blue-600 opacity-75"
          style={{ filter: "blur(75px)", transform: "rotate(88.762deg)" }}
          width="488"
          height="471"
          viewBox="0 0 488 471"
          fill="none"
        >
          <path
            d="M129.886 320.948C11.3434 323.509 -262.547 130.025 -64.8001 128.175C132.947 126.325 -87.1969 100.403 0.253979 -74.2464C87.7049 -248.896 333.667 -74.1838 336.944 77.5163C340.222 229.216 248.428 318.387 129.886 320.948Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute -left-44 bottom-0 w-[468px] h-[473px] text-blue-600 opacity-75"
          style={{ filter: "blur(75px)", transform: "rotate(179.306deg)" }}
          width="446"
          height="773"
          viewBox="0 0 446 773"
          fill="none"
        >
          <path
            d="M-172.839 413.486C-174.276 294.925 21.7961 22.8817 21.7715 220.637C21.7468 418.392 49.7539 198.505 223.567 287.607C397.38 376.71 220.343 621.005 68.6188 622.844C-83.1055 624.683 -171.402 532.047 -172.839 413.486Z"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute right-0 top-80 w-[984px] h-[705px] text-pink-500 opacity-75"
          style={{ filter: "blur(75px)" }}
          width="441"
          height="1005"
          viewBox="0 0 441 1005"
          fill="none"
        >
          <path
            d="M1134.1 466.134C1134.1 642.722 715.325 1044.31 720.412 749.813C725.498 455.316 661.071 782.268 298.244 646.439C-64.5819 510.609 313.504 150 632.248 150C950.993 150 1134.1 289.546 1134.1 466.134Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Motion blur overlay */}
      <div className="absolute inset-0 bg-black/3 backdrop-blur-[100px]" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 py-16 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-['DM_Sans'] leading-tight mb-6">
            <span className="text-white">Meet Our </span>
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent">
              Creative Team
            </span>
          </h1>
        </div>

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
          {/* Previous Button */}
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

          {/* Next Button */}
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

        {/* Progress Bar */}
        <div className="mt-4 mx-4">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#1225B9] to-[#F41CCC] rounded-full transition-all duration-500"
              style={{ width: `${((currentSlide + 1) / teamMembers.length) * 100}%` }}
            />
          </div>
        </div>
      </section>

      {/* Get In Touch CTA */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-5 flex justify-center">
          <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-[65px] lg:leading-tight font-bold mb-8">
              <span className="text-white">Why Choose Us for</span>
              <br />
              <span className="text-white">your </span>
              <span 
                className="bg-gradient-to-r from-[#142EF5] to-[#F41CCC] bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Marketing
              </span>
              <span className="text-white"> Needs?</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              At Looklike, we don't just market — we build success stories. With a mix of creativity, experience, and market insight, we craft powerful campaigns tailored to each brand. Our team is dedicated to delivering real results through smart, impactful advertising and marketing solutions.
            </p>
            <Button 
              className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden"
              onClick={() => navigate("/contact")}
            >
              {/* Subtle shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
              
              <span className="relative text-white text-base font-medium mr-3 group-hover:text-white/95 transition-colors duration-300">Get In Touch !</span>
              <svg
                className="relative w-5 h-4 text-white group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 ease-out"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M17.681 7.70853L11.2022 13.7067C10.9993 13.8945 10.7242 14 10.4373 14C10.1504 14 9.87529 13.8945 9.67243 13.7067C9.46958 13.5189 9.35561 13.2642 9.35561 12.9986C9.35561 12.733 9.46958 12.4783 9.67243 12.2905L14.3075 8.00094H1.07981C0.793429 8.00094 0.518775 7.89562 0.31627 7.70814C0.113766 7.52066 0 7.26638 0 7.00125C0 6.73611 0.113766 6.48184 0.31627 6.29436C0.518775 6.10688 0.793429 6.00156 1.07981 6.00156H14.3075L9.67423 1.70954C9.47137 1.52174 9.35741 1.26702 9.35741 1.00143C9.35741 0.735832 9.47137 0.481115 9.67423 0.293311C9.87709 0.105507 10.1522 2.7985e-09 10.4391 0C10.726 -2.7985e-09 11.0011 0.105507 11.204 0.293311L17.6828 6.29147C17.7835 6.38447 17.8634 6.49497 17.9178 6.61662C17.9722 6.73827 18.0002 6.86867 18 7.00035C17.9998 7.13202 17.9716 7.26236 17.9168 7.3839C17.8621 7.50543 17.782 7.61575 17.681 7.70853Z" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
