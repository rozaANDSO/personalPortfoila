import AboutSection from "@/components/about-section";
import FixedSidebar from "@/components/fixed-sidebar";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/video-background";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <VideoBackground />
      <div className="container py-4 px-0">
        <div className="grid grid-cols-12 gap-6">
          <div className="grid lg:col-span-4 col-span-full">
            <FixedSidebar />
          </div>
          <div className="grid col-span-full lg:col-span-8">
            <AboutSection />
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}
