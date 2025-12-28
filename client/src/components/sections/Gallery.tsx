import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

// Using the images provided
const images = [
  "/attached_assets/WhatsApp Image 2025-12-27 at 11.08.03 PM (1).jpeg",
  "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.06_PM_(1)_1765627793402.jpeg",
  "/attached_assets/WhatsApp Image 2025-12-27 at 11.08.03 PM (2).jpeg",
  "/attached_assets/WhatsApp Image 2025-12-27 at 11.08.03 PM (3).jpeg",
  "/attached_assets/WhatsApp Image 2025-12-27 at 11.08.03 PM (5).jpeg",
  "/attached_assets/WhatsApp Image 2025-12-27 at 11.08.03 PM.jpeg",
  "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.02_PM_1765627793402.jpeg",
];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedImages = isExpanded ? images : images.slice(0, 4);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Life at YBS</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4">Experience the Journey</h3>
          <p className="text-muted-foreground">
            A glimpse into our vibrant learning environment, where education meets inspiration.
          </p>
        </div>

        {/* Image Gallery - 2 rows initially */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            layout
          >
            {displayedImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                layout
                className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <img
                        src={image}
                        alt={`Life at YBS ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <div className="bg-white/90 rounded-full p-2">
                          <ZoomIn className="w-5 h-5 text-gray-800" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <img
                      src={image}
                      alt={`Life at YBS ${index + 1}`}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>

          {/* View More/Less Button */}
          {images.length > 4 && (
            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-full px-8 py-3 border-primary/30 hover:bg-primary/10 transition-all duration-300"
              >
                {isExpanded ? "View Less" : `View More (${images.length - 4} more images)`}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
