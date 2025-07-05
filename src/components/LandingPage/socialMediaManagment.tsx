import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import socialMediaManagementDecoration from "@/assets/decoration/social_media_management.webp";
import squeezeImg from "@/assets/social_media_camaigns/squeeze.webp";
import caribyDairy2Img from "@/assets/social_media_camaigns/cariby_dairy2.webp";
import qemamImg from "@/assets/social_media_camaigns/qemam.webp";
import caribyDairyImg from "@/assets/social_media_camaigns/cariby_dairy.webp";
import dahabiaImg from "@/assets/social_media_camaigns/dahabia.webp";
import alTakamolImg from "@/assets/social_media_camaigns/al_takamol.webp";

export default function Index() {
  const portfolioItems = [
    {
      title: "Squeeze Social Media Campaign",
      description: "Fresh, bold, product-driven visuals",
      imageSrc: squeezeImg,
    },
    {
      title: "Cariby Social Media Campaign",
      description: "Designed to melt attention",
      imageSrc: caribyDairy2Img,
    },
    {
      title: "Qemam Social Media Campaign",
      description: "Architecture meets confident design",
      imageSrc: qemamImg,
    },
    {
      title: "Cariby Social Media Campaign",
      description: "Designed to melt attention",
      imageSrc: caribyDairyImg,
    },
    {
      title: "Dahabia Social Media Campaign",
      description: "Designed to build appetite",
      imageSrc: dahabiaImg,
    },
    {
      title: "Al-Takamol Social Media Campaign",
      description: "Architecture meets confident design",
      imageSrc: alTakamolImg,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -left-44 -top-16 w-[468px] h-[473px] bg-[#1225B9] rounded-full blur-[75px] opacity-60 rotate-[88.762deg]" />
        <div className="absolute right-20 top-44 w-[984px] h-[705px] bg-[#F41CCC] rounded-full blur-[75px] opacity-60 rotate-[77.366deg]" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-12">
        <Navigation />
      </header>
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-4 py-20 max-w-7xl mx-auto gap-12">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-dm-sans leading-tight mb-6">
            <span className="text-white">Social Media </span>
            <span className="gradient-text">Management</span>
          </h1>

          <p className="text-white text-base md:text-lg font-normal font-inter leading-relaxed mb-8 max-w-lg">
            We manage your platforms with purpose and strategy — creating
            content that connects, engages, and converts. From planning and
            copywriting to design and analytics, our team handles every detail
            to keep your brand active, aligned, and always ahead. Whether you're
            building awareness or driving sales, we turn your social media into
            a powerful growth engine.
          </p>

          <a href="https://wa.me/201022668840" target="_blank" rel="noopener noreferrer">
            <Button className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden">
              <span className="relative text-white text-base font-medium mr-3 group-hover:text-white/95 transition-colors duration-300">Get In Touch !</span>
            </Button>
          </a>
        </div>

        <div className="flex-1 max-w-2xl">
          <img
            src={socialMediaManagementDecoration}
            alt="Social Media Management Illustration"
            className="w-full h-auto max-w-[650px] mx-auto"
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-24 pb-64 bg-black">
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
              Our Social Media
              <br />
              Campaigns
            </h2>
            <p className="text-white text-lg">
              Take a look at our latest social media projects where creativity meets strategy.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-2 gap-3 rounded-[18px] bg-gray-800"
                >
                  <div className="flex h-[319px] justify-center items-center rounded-[11px] overflow-hidden">
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 px-2 pb-2">
                    <h3 className="text-white font-inter text-xl font-bold leading-tight truncate">
                      {item.title}
                    </h3>
                    <p className="text-gray-100 font-inter text-sm font-normal leading-relaxed opacity-80 truncate">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-white text-lg md:text-2xl font-normal font-inter leading-relaxed max-w-3xl mx-auto mb-8">
                At Looklike, we craft every social media campaign with attention to the smallest
                detail — from content strategy to visual design and engagement metrics. Explore
                more of our social media management projects.
              </p>

              <Button className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden">
                <span className="relative text-white text-base font-medium mr-3 group-hover:text-white/95 transition-colors duration-300">Explore More</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
