import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Teachers from "@/components/sections/Teachers";
import Gallery from "@/components/sections/Gallery";
import Instagram from "@/components/sections/Instagram";
import Reviews from "@/components/sections/Reviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Teachers />
        <Gallery />
        <Instagram />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
