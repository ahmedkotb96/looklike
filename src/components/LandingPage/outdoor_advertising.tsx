import Navigation from "@/components/LandingPage/Navigation";
import Footer from "@/components/LandingPage/Footer";
import { Button } from "@/components/ui/button";
import outdoorAdvertisingDecoration from "@/assets/decoration/Outdoor_Advertising.webp";

export default function MediaProduction() {
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
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6 lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-['DM_Sans'] leading-tight">
              <span className="text-white">Outdoor </span>
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] bg-clip-text text-transparent">
                Advertising
              </span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed">
              Make your brand impossible to ignore with our outdoor advertising solutions. 
              From billboards and transit ads to street furniture and digital displays, 
              we create impactful campaigns that reach your audience where they live, work, 
              and play. Our strategic placement and creative designs ensure maximum visibility 
              and engagement for your brand message.
            </p>

            <a href="https://wa.me/201022668840" target="_blank" rel="noopener noreferrer">
              <Button className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden">
                <span className="relative text-white text-base font-medium mr-3 group-hover:text-white/95 transition-colors duration-300">Get In Touch !</span>
              </Button>
            </a>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={outdoorAdvertisingDecoration}
              alt="Outdoor Advertising Visualization"
              className="w-full max-w-[679px] h-auto rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            At Looklike, we craft every brand with attention to the smallest
            detail — from the logo to the colors and tone of voice. Explore
            more of our visual identity projects.
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-[65px] font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-[#142EF5] to-[#F41CCC] bg-clip-text text-transparent">
              Why Choose Us for Your
            </span>
            <br />
            <span className="text-white">Marketing Needs?</span>
          </h2>

          <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto mb-12">
            At Looklike, we don't just market — we build success stories. With
            a mix of creativity, experience, and market insight, we craft
            powerful campaigns tailored to each brand. Our team is dedicated
            to delivering real results through smart, impactful advertising
            and marketing solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/201022668840" target="_blank" rel="noopener noreferrer">
              <Button className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden">
                <span className="relative text-white text-base font-medium group-hover:text-white/95 transition-colors duration-300">Get In Touch !</span>
              </Button>
            </a>

            <Button 
              className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden"
            >
              <span className="relative text-white text-base font-medium group-hover:text-white/95 transition-colors duration-300">Explore More</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
