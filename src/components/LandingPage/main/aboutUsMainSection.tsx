import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/LandingPage/Navigation";
import Footer from "@/components/LandingPage/Footer";

export default function Index() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
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
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-['DM_Sans'] leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                Innovative Ideas.
              </span>{" "}
              <span className="text-white">Outstanding Results.</span>
            </h1>
            <p className="text-white text-lg leading-relaxed mb-8 max-w-xl">
              Welcome to Look Like Advertising & Marketing – your trusted
              partner for innovative and results-driven advertising solutions in
              the UAE. We specialize in crafting creative campaigns that don't
              just look good, but also deliver real impact. By blending
              strategic thinking with bold creativity, we help brands stand out,
              connect deeply with their audience, and grow stronger in a
              competitive market. Whether you're launching,
            </p>
            <button className="flex items-center gap-3 px-4 py-2 rounded-lg border border-white/15 bg-gray-600/40 backdrop-blur-sm hover:bg-gray-600/60 transition-colors">
              <span className="text-white text-sm">Get Int Touch !</span>
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 17 14"
              >
                <path d="M16.0534 7.77704L10.216 13.1813C10.0332 13.3505 9.78534 13.4455 9.52687 13.4455C9.26839 13.4455 9.0205 13.3505 8.83773 13.1813C8.65496 13.0121 8.55229 12.7826 8.55229 12.5433C8.55229 12.304 8.65496 12.0745 8.83773 11.9053L13.0139 8.04049H1.09594C0.837912 8.04049 0.590453 7.9456 0.408001 7.77668C0.225548 7.60777 0.123047 7.37867 0.123047 7.13979C0.123047 6.9009 0.225548 6.67181 0.408001 6.50289C0.590453 6.33398 0.837912 6.23908 1.09594 6.23908H13.0139L8.83935 2.37205C8.65658 2.20285 8.55391 1.97335 8.55391 1.73405C8.55391 1.49476 8.65658 1.26526 8.83935 1.09605C9.02212 0.926847 9.27001 0.831787 9.52849 0.831787C9.78696 0.831787 10.0348 0.926847 10.2176 1.09605L16.055 6.50029C16.1457 6.58408 16.2176 6.68363 16.2667 6.79324C16.3157 6.90284 16.3409 7.02034 16.3407 7.13897C16.3406 7.25761 16.3151 7.37505 16.2658 7.48454C16.2165 7.59404 16.1443 7.69344 16.0534 7.77704Z" />
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9193e381e504aa3e9092d5cf75e1dbd6bbd629f?width=1139"
              alt="cube-helix"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 py-16">
        <h2 className="text-xl font-bold text-center text-white mb-10">
          Trusted by most innovative Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {[
            "https://cdn.builder.io/api/v1/image/assets/TEMP/eaa6c7a33f4833227c2e5eb9a2c2daa6a45aab12?width=421",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/a7e3b872e00630691b790a832c047846f44a6cb5?width=354",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/590d59abeb1ff22c0f093af2d9c5bb925e49155b?width=354",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/d3eb218ab7349b5718a543dfe0013163aa87a7a4?width=354",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3f49342227ac30c390d10bd012fb18060e707926?width=343",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/2588947fc954bfe8fb0c814324c4b4f685e636f2?width=370",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/fdef750e3687c7ac0a0f26a01d6ecc50709bf57d?width=343",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/acbbb4ee986c150f245ee1a9b7edf8fd4c106d44?width=343",
          ].map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-2xl border border-gray-400/50 bg-gray-400/0 hover:bg-gray-400/10 transition-colors"
            >
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="max-w-full h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About Sections */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 py-16">
        <div className="space-y-8">
          {/* Our Story */}
          <div className="border-b border-white pb-4">
            <button
              onClick={() => toggleSection("story")}
              className="flex items-center justify-between w-full text-left"
            >
              <h2 className="text-3xl font-normal text-white">Our Story</h2>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white">
                <svg
                  className={`w-6 h-6 text-white transition-transform ${
                    expandedSection === "story" ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 54 54"
                >
                  <path d="M25.3924 43.8473L14.2516 31.5097C13.9027 31.1234 13.7068 30.5995 13.7068 30.0532C13.7068 29.5069 13.9027 28.983 14.2516 28.5967C14.6004 28.2104 15.0735 27.9934 15.5668 27.9934C16.0601 27.9934 16.5332 28.2104 16.882 28.5967L24.8492 37.4232V12.234C24.8492 11.6886 25.0449 11.1656 25.3931 10.78C25.7413 10.3944 26.2136 10.1777 26.706 10.1777C27.1985 10.1777 27.6708 10.3944 28.019 10.78C28.3672 11.1656 28.5628 11.6886 28.5628 12.234V37.4232L36.5347 28.6001C36.8835 28.2138 37.3566 27.9968 37.8499 27.9968C38.3432 27.9968 38.8164 28.2138 39.1652 28.6001C39.514 28.9864 39.71 29.5103 39.71 30.0566C39.71 30.6029 39.514 31.1269 39.1652 31.5132L28.0244 43.8507C27.8516 44.0424 27.6464 44.1945 27.4205 44.2981C27.1945 44.4018 26.9523 44.455 26.7077 44.4547C26.4632 44.4543 26.2211 44.4005 25.9953 44.2963C25.7696 44.1921 25.5647 44.0395 25.3924 43.8473Z" />
                </svg>
              </div>
            </button>
            {expandedSection === "story" && (
              <div className="mt-6 text-white/80 leading-relaxed">
                <p>
                  Look Like Advertising & Marketing was founded with a vision to
                  transform how brands connect with their audiences. Our journey
                  began with a simple belief: that great advertising should not
                  only look exceptional but also deliver measurable results.
                  Over the years, we've grown from a small creative team to a
                  full-service marketing agency, helping countless businesses
                  across the UAE achieve their goals through innovative
                  campaigns and strategic thinking.
                </p>
              </div>
            )}
          </div>

          {/* Our Vision */}
          <div className="border-b border-white pb-4">
            <button
              onClick={() => toggleSection("vision")}
              className="flex items-center justify-between w-full text-left"
            >
              <h2 className="text-3xl font-normal text-white">Our Vision</h2>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white">
                <svg
                  className={`w-6 h-6 text-white transition-transform ${
                    expandedSection === "vision" ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 54 54"
                >
                  <path d="M25.3924 43.8473L14.2516 31.5097C13.9027 31.1234 13.7068 30.5995 13.7068 30.0532C13.7068 29.5069 13.9027 28.983 14.2516 28.5967C14.6004 28.2104 15.0735 27.9934 15.5668 27.9934C16.0601 27.9934 16.5332 28.2104 16.882 28.5967L24.8492 37.4232V12.234C24.8492 11.6886 25.0449 11.1656 25.3931 10.78C25.7413 10.3944 26.2136 10.1777 26.706 10.1777C27.1985 10.1777 27.6708 10.3944 28.019 10.78C28.3672 11.1656 28.5628 11.6886 28.5628 12.234V37.4232L36.5347 28.6001C36.8835 28.2138 37.3566 27.9968 37.8499 27.9968C38.3432 27.9968 38.8164 28.2138 39.1652 28.6001C39.514 28.9864 39.71 29.5103 39.71 30.0566C39.71 30.6029 39.514 31.1269 39.1652 31.5132L28.0244 43.8507C27.8516 44.0424 27.6464 44.1945 27.4205 44.2981C27.1945 44.4018 26.9523 44.455 26.7077 44.4547C26.4632 44.4543 26.2211 44.4005 25.9953 44.2963C25.7696 44.1921 25.5647 44.0395 25.3924 43.8473Z" />
                </svg>
              </div>
            </button>
            {expandedSection === "vision" && (
              <div className="mt-6 text-white/80 leading-relaxed">
                <p>
                  To become the leading creative force in the Middle East,
                  setting new standards for advertising excellence and
                  innovation. We envision a future where every brand we touch
                  becomes a market leader, powered by our creative insights and
                  strategic expertise. Our vision extends beyond traditional
                  advertising – we aim to create cultural movements that
                  resonate with audiences and drive meaningful change in the
                  marketplace.
                </p>
              </div>
            )}
          </div>

          {/* Our Mission */}
          <div className="border-b border-white pb-4">
            <button
              onClick={() => toggleSection("mission")}
              className="flex items-center justify-between w-full text-left"
            >
              <h2 className="text-3xl font-normal text-white">Our Mission</h2>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white">
                <svg
                  className={`w-6 h-6 text-white transition-transform ${
                    expandedSection === "mission" ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 54 54"
                >
                  <path d="M25.3924 43.8473L14.2516 31.5097C13.9027 31.1234 13.7068 30.5995 13.7068 30.0532C13.7068 29.5069 13.9027 28.983 14.2516 28.5967C14.6004 28.2104 15.0735 27.9934 15.5668 27.9934C16.0601 27.9934 16.5332 28.2104 16.882 28.5967L24.8492 37.4232V12.234C24.8492 11.6886 25.0449 11.1656 25.3931 10.78C25.7413 10.3944 26.2136 10.1777 26.706 10.1777C27.1985 10.1777 27.6708 10.3944 28.019 10.78C28.3672 11.1656 28.5628 11.6886 28.5628 12.234V37.4232L36.5347 28.6001C36.8835 28.2138 37.3566 27.9968 37.8499 27.9968C38.3432 27.9968 38.8164 28.2138 39.1652 28.6001C39.514 28.9864 39.71 29.5103 39.71 30.0566C39.71 30.6029 39.514 31.1269 39.1652 31.5132L28.0244 43.8507C27.8516 44.0424 27.6464 44.1945 27.4205 44.2981C27.1945 44.4018 26.9523 44.455 26.7077 44.4547C26.4632 44.4543 26.2211 44.4005 25.9953 44.2963C25.7696 44.1921 25.5647 44.0395 25.3924 43.8473Z" />
                </svg>
              </div>
            </button>
            {expandedSection === "mission" && (
              <div className="mt-6 text-white/80 leading-relaxed">
                <p>
                  Our mission is to empower businesses through creative
                  excellence and strategic marketing solutions. We are committed
                  to understanding each client's unique challenges and
                  opportunities, crafting bespoke campaigns that drive growth
                  and build lasting relationships with their target audiences.
                  Through innovative thinking, cutting-edge technology, and
                  passionate execution, we transform brands and help them
                  achieve their full potential in an ever-evolving marketplace.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/53bca91e01562ac188ebe0b3adfcde7123e2076e?width=937"
                alt="Why choose us"
                className="w-full rounded-3xl"
              />
            </div>
            <div className="flex-1 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="text-white">Why Choose Us for Your </span>
                <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
                  Marketing
                </span>
                <span className="text-white"> Needs?</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                At Looklike, we don't just market — we build success stories.
                With a mix of creativity, experience, and market insight, we
                craft powerful campaigns tailored to each brand. Our team is
                dedicated to delivering real results through smart, impactful
                advertising and marketing solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h3 className="text-xl font-medium text-white">
                      Creative Expertise
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h3 className="text-xl font-medium text-white">
                      Integrated Services
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h3 className="text-xl font-medium text-white">
                      Results-Driven
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <h3 className="text-xl font-medium text-white">
                      Centric Approach
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* See Our Team Card */}
          <div className="mt-16 relative">
            <div className="absolute left-4 top-12 w-40 h-56 bg-gray-900/30 backdrop-blur-sm rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  See Our Team
                </h3>
                <p className="text-xs text-white text-center leading-relaxed">
                  A creative crew of marketers, designers, and strategists —
                  delivering smart, impactful campaigns.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12.14 9.65L17 14.43M12.14 9.65L17 4.88M12.14 9.65H3.54"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch CTA */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-5 flex justify-center">
          <div className="relative">
            {/* Large gradient circle background */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1440 369"
              fill="none"
            >
              <path
                d="M719.5 0.598633C1021.96 0.598633 1295.77 45.0273 1493.93 116.841C1593.02 152.748 1673.16 195.491 1728.52 242.924C1783.88 290.358 1814.4 342.427 1814.4 397C1814.4 451.573 1783.88 503.642 1728.52 551.076C1673.16 598.509 1593.02 641.252 1493.93 677.159C1295.77 748.973 1021.96 793.401 719.5 793.401C417.037 793.401 143.234 748.973 -54.9316 677.159C-154.017 641.252 -234.16 598.509 -289.521 551.076C-344.883 503.642 -375.401 451.573 -375.401 397C-375.401 342.427 -344.883 290.358 -289.521 242.924C-234.16 195.491 -154.017 152.748 -54.9316 116.841C143.234 45.0273 417.037 0.598633 719.5 0.598633Z"
                fill="url(#paint0_radial)"
                stroke="#B1D0FF"
                strokeWidth="1.19662"
              />
              <defs>
                <radialGradient
                  id="paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.822011" stopColor="#000000" />
                  <stop offset="1" stopColor="#1146D7" />
                </radialGradient>
              </defs>
            </svg>
            <div className="relative z-10 flex items-center justify-center py-20">
              <button 
                className="flex items-center gap-3 px-6 py-3 rounded-lg border border-white/15 bg-gray-600/40 backdrop-blur-sm hover:bg-gray-600/60 transition-colors"
                onClick={() => navigate("/contact")}
              >
                <span className="text-white text-sm">Get Int Touch !</span>
                <svg
                  className="w-5 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M17.681 7.70853L11.2022 13.7067C10.9993 13.8945 10.7242 14 10.4373 14C10.1504 14 9.87529 13.8945 9.67243 13.7067C9.46958 13.5189 9.35561 13.2642 9.35561 12.9986C9.35561 12.733 9.46958 12.4783 9.67243 12.2905L14.3075 8.00094H1.07981C0.793429 8.00094 0.518775 7.89562 0.31627 7.70814C0.113766 7.52066 0 7.26638 0 7.00125C0 6.73611 0.113766 6.48184 0.31627 6.29436C0.518775 6.10688 0.793429 6.00156 1.07981 6.00156H14.3075L9.67423 1.70954C9.47137 1.52174 9.35741 1.26702 9.35741 1.00143C9.35741 0.735832 9.47137 0.481115 9.67423 0.293311C9.87709 0.105507 10.1522 2.7985e-09 10.4391 0C10.726 -2.7985e-09 11.0011 0.105507 11.204 0.293311L17.6828 6.29147C17.7835 6.38447 17.8634 6.49497 17.9178 6.61662C17.9722 6.73827 18.0002 6.86867 18 7.00035C17.9998 7.13202 17.9716 7.26236 17.9168 7.3839C17.8621 7.50543 17.782 7.61575 17.681 7.70853Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
