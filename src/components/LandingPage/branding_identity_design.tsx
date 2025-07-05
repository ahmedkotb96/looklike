import Navigation from "./Navigation";
import Footer from "./Footer";
import brandingDecoration from "@/assets/decoration/branding.png";
import centromallIdentity from "@/assets/branding/centromall_identity.png";
import ihomeIdentity from "@/assets/branding/ihome_identity.jpg";
import zodiacIdentity from "@/assets/branding/zodiac_identity.jpg";
import cinnarollsIdentity from "@/assets/branding/cinnarolls_identity.jpg";
import elmassaIdentity from "@/assets/branding/elmassa_identity.jpg";
import aemenIdentity from "@/assets/branding/Aemen_identity.png";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white font-inter relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left blur */}
        <div
          className="absolute -top-16 -left-44 w-[468px] h-[473px] opacity-60 rotate-[88.762deg]"
          style={{
            background: "#1225B9",
            filter: "blur(75px)",
          }}
        />

        {/* Top right blur */}
        <div
          className="absolute top-44 right-0 translate-x-24 w-[984px] h-[705px] opacity-60 rotate-[77.366deg]"
          style={{
            background: "#F41CCC",
            filter: "blur(75px)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation - updated to match landing page */}
        <Navigation />

        {/* Hero Section */}
        <section className="relative z-10 flex items-center justify-between px-40 py-28 pb-40 max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-4 max-w-[612px]">
            <h1 className="text-[96px] font-dm-sans font-black leading-[95px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Brand Identity & Design
            </h1>
            <p className="text-white font-inter text-[17px] font-normal leading-[24px] max-w-[579px] mt-4">
              Your brand identity is what makes you stand out. We craft visual
              identities that capture the essence of your business and ensure
              consistency across all media. Our design team creates everything
              from memorable logos and comprehensive brand guidelines to
              compelling company profiles and eye-catching digital designs, all
              tailored to make your brand instantly recognizable and impactful.
            </p>
            <a href="https://wa.me/201022668840" target="_blank" rel="noopener noreferrer">
              <button className="flex mt-4 px-[14px] py-[5px] justify-center items-center gap-2 rounded-[9px] border border-white/15 bg-gray-500/40 backdrop-blur-[6px] shadow-[0px_0px_5px_3px_rgba(255,255,255,0.25)_inset]">
                <span className="text-white font-inter text-[13px] font-normal leading-[23px] tracking-[-0.001px]">
                  Get In Touch !
                </span>
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0534 7.04388L10.216 12.4481C10.0332 12.6173 9.78534 12.7124 9.52687 12.7124C9.26839 12.7124 9.0205 12.6173 8.83773 12.4481C8.65496 12.2789 8.55229 12.0494 8.55229 11.8101C8.55229 11.5708 8.65496 11.3413 8.83773 11.1721L13.0139 7.30734H1.09594C0.837912 7.30734 0.590453 7.21244 0.408001 7.04353C0.225548 6.87461 0.123047 6.64551 0.123047 6.40663C0.123047 6.16775 0.225548 5.93865 0.408001 5.76974C0.590453 5.60082 0.837912 5.50593 1.09594 5.50593H13.0139L8.83935 1.6389C8.65658 1.46969 8.55391 1.2402 8.55391 1.0009C8.55391 0.761604 8.65658 0.532109 8.83935 0.362901C9.02212 0.193693 9.27001 0.0986328 9.52849 0.0986328C9.78696 0.0986328 10.0348 0.193693 10.2176 0.362901L16.055 5.76713C16.1457 5.85092 16.2176 5.95048 16.2667 6.06008C16.3157 6.16969 16.3409 6.28718 16.3407 6.40582C16.3406 6.52445 16.3151 6.64189 16.2658 6.75139C16.2165 6.86089 16.1443 6.96029 16.0534 7.04388Z"
                    fill="white"
                  />
                </svg>
              </button>
            </a>
          </div>
          <div className="flex-shrink-0">
            <img
              src={brandingDecoration}
              alt="Branding Decoration"
              className="w-[672px] h-[672px]"
            />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="relative z-10 px-32 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-16">
            {/* Centro Mall */}
            <div className="flex flex-col p-2 gap-3 rounded-[18px] bg-gray-800">
              <div className="flex h-[319px] justify-center items-center rounded-[11px] overflow-hidden">
                <img
                  src={centromallIdentity}
                  alt="Centro Mall Brand Identity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-2 pb-2">
                <h3 className="text-white font-inter text-lg font-bold leading-tight truncate">
                  Centro Mall Brand Identity
                </h3>
                <p className="text-gray-100 font-inter text-xs font-normal leading-relaxed opacity-80 truncate">
                  Modern. Simple. Family vibes
                </p>
              </div>
            </div>

            {/* i home */}
            <div className="flex flex-col p-2 gap-3 rounded-[18px] bg-gray-800">
              <div className="flex h-[319px] justify-center items-center rounded-[11px] overflow-hidden">
                <img
                  src={ihomeIdentity}
                  alt="i home Brand Identity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-2 pb-2">
                <h3 className="text-white font-inter text-lg font-bold leading-tight truncate">
                  i home Brand Identity
                </h3>
                <p className="text-gray-100 font-inter text-xs font-normal leading-relaxed opacity-80 truncate">
                  a sleek, modern identity that brings out i home's unique style
                </p>
              </div>
            </div>

            {/* Zodiac */}
            <div className="flex flex-col p-2 gap-3 rounded-[18px] bg-gray-800">
              <div className="flex h-[319px] justify-center items-center rounded-[11px] overflow-hidden">
                <img
                  src={zodiacIdentity}
                  alt="Zodiac Brand Identity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-2 pb-2">
                <h3 className="text-white font-inter text-lg font-bold leading-tight truncate">
                  Zodiac Brand Identity
                </h3>
                <p className="text-gray-100 font-inter text-xs font-normal leading-relaxed opacity-80 truncate">
                  inspired by cosmic energy and timeless elegance
                </p>
              </div>
            </div>

            {/* CinnaRolls */}
            <div className="flex flex-col p-2 gap-3 rounded-[18px] bg-gray-800">
              <div className="flex h-[319px] justify-center items-center rounded-[11px] overflow-hidden">
                <img
                  src={cinnarollsIdentity}
                  alt="CinnaRolls Brand Identity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-2 pb-2">
                <h3 className="text-white font-inter text-lg font-bold leading-tight truncate">
                  CinnaRolls Brand Identity
                </h3>
                <p className="text-gray-100 font-inter text-xs font-normal leading-relaxed opacity-80 truncate">
                  A soft, sweet, and stylish brand.
                </p>
              </div>
            </div>

            {/* Leading Diamond */}
            <div className="flex flex-col p-2 gap-3 rounded-[18px] bg-gray-800">
              <div className="flex h-[319px] justify-center items-center rounded-[11px] overflow-hidden">
                <img
                  src={elmassaIdentity}
                  alt="Elmassa Brand Identity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-2 pb-2">
                <h3 className="text-white font-inter text-lg font-bold leading-tight truncate">
                  Elmassa Brand Identity
                </h3>
                <p className="text-gray-100 font-inter text-xs font-normal leading-relaxed opacity-80 truncate">
                  Sharp. Elegant. Confident. A brand that leads by design.
                </p>
              </div>
            </div>

            {/* Aamen */}
            <div className="flex flex-col p-2 gap-3 rounded-[18px] bg-gray-800">
              <div className="flex h-[319px] justify-center items-center rounded-[11px] overflow-hidden">
                <img
                  src={aemenIdentity}
                  alt="Aamen Brand Identity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-2 pb-2">
                <h3 className="text-white font-inter text-lg font-bold leading-tight truncate">
                  Aamen Brand Identity
                </h3>
                <p className="text-gray-100 font-inter text-xs font-normal leading-relaxed opacity-80 truncate">
                  Simple. Safe. Smart. Designed by Looklike for AAMEN.
                </p>
              </div>
            </div>
          </div>

          {/* Description and Explore More */}
          <div className="text-center">
            <p className="text-white font-inter text-[24px] font-normal leading-[34px] max-w-[717px] mx-auto mb-8">
              At Looklike, we craft every brand with attention to the smallest
              detail — from the logo to the colors and tone of voice. Explore more
              of our visual identity projects.
            </p>

            <button className="flex mx-auto px-[15px] py-[6px] justify-center items-center gap-[10px] rounded-[10px] border border-white/15 bg-gray-500/40 backdrop-blur-[7px] shadow-[0px_0px_6px_3px_rgba(255,255,255,0.25)_inset]">
              <span className="text-white font-inter text-[14px] font-normal leading-[26px] tracking-[-0.001px]">
                Explore More
              </span>
            </button>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div> {/* Close Content Container */}
    </div>
  );
}

