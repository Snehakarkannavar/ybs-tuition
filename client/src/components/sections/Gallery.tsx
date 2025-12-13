import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

// Using the images provided
const images = [
  { src: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.07_PM_(1)_1765627793403.jpeg", alt: "Group Class" },
  { src: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.06_PM_1765627793402.jpeg", alt: "Teacher Interaction" },
  { src: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.45_PM_1765627793404.jpeg", alt: "Celebration" },
  { src: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.02_PM_1765627793402.jpeg", alt: "Study Session" },
  { src: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.44_PM_(1)_1765627793403.jpeg", alt: "Event" },
  { src: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.44_PM_1765627793404.jpeg", alt: "Group Photo" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Moments</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4">Life at YBS Tuition</h3>
            <p className="text-muted-foreground">
              A glimpse into our classrooms, celebrations, and the vibrant community we've built.
            </p>
          </div>
          <div className="hidden md:block">
            {/* Instagram link could go here */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative group rounded-2xl overflow-hidden cursor-zoom-in ${
                    index === 0 || index === 3 ? "md:col-span-2" : ""
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100" />
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
