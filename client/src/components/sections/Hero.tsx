import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import generatedBackground from "@assets/generated_images/abstract_modern_educational_background_with_geometric_shapes.png";

const slides = [
  {
    id: 1,
    image: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.06_PM_1765627793402.jpeg", // Teacher + Kids
    title: "Unlock Your Potential",
    subtitle: "Concept-based learning that goes beyond memorization.",
  },
  {
    id: 2,
    image: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.07_PM_(1)_1765627793403.jpeg", // Group photo
    title: "Personalized Attention",
    subtitle: "Small batches ensuring every student gets the focus they deserve.",
  },
  {
    id: 3,
    image: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.45_PM_1765627793404.jpeg", // Group with teachers
    title: "Expert Guidance",
    subtitle: "Learn from experienced mentors dedicated to your success.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* Static Background Layer (Generated Image) with Low Opacity */}
      <div className="absolute inset-0 z-0">
         <img 
            src={generatedBackground} 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
         />
      </div>

      {/* Background Slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay - Always Dark for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-8">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold mb-6 backdrop-blur-sm shadow-lg shadow-primary/10">
              Admissions Open for 2025-26
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mt-6 max-w-xl font-light leading-relaxed drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 mt-10"
          >
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 rounded-full font-bold shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 text-white group transition-all hover:scale-105"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Tuition
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 rounded-full font-bold backdrop-blur-md bg-white/10 border-white/20 hover:bg-white/20 text-white hover:border-white/40 transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronRight className="h-6 w-6 rotate-90" />
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/50 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
