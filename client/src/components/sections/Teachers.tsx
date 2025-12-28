import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const teachers = [
  {
    name: "Yeshwant Sir",
    role: "Lead Educator & Founder",
   
    
    qualification: "Physics Graduate",
    profileImages: [
      "/attached_assets/WhatsApp Image 2025-12-27 at 11.26.14 PM (1).jpeg",
      "/attached_assets/WhatsApp Image 2025-12-27 at 11.26.14 PM.jpeg"
    ],
    experienceImages: [
      "/attached_assets/WhatsApp Image 2025-12-27 at 11.06.07 PM.jpeg",
      "/attached_assets/WhatsApp Image 2025-12-27 at 11.06.09 PM.jpeg",
      "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.44_PM_1765627793404.jpeg",
      "/attached_assets/WhatsApp Image 2025-12-27 at 11.15.15 PM.jpeg"
    ],
    philosophy: "I believe that if you can't explain it simply, you don't understand it well enough. My goal is to make complex physics and math concepts clear and simple.",
    deepviharExperience: "With experience as a Physics Lab Assistant at Deepvihar Higher Secondary School - I bring a strong practical approach to teaching. Having grown from a student to an educator in the same institution, I focus on helping students build deep conceptual understanding through hands-on learning and real-world application of Physics concepts."
  },
];

export default function Teachers() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  return (
    <section id="teachers" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
        
          <p className="text-2xl md:text-3xl font-heading font-bold ">Our Mentor:<span className="text-primary">Yeshwant Karkannavar</span> </p>
          <p className="text-muted-foreground">
            Simple explanations. Strong understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-6xl mx-auto">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="space-y-6">
                {/* First Flashcard: Profile Images + Teacher Details */}
                <div className="group relative bg-gradient-to-br from-primary/10 to-secondary/50 rounded-2xl overflow-hidden shadow-lg border border-primary/20 hover:shadow-2xl transition-all duration-500">
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Profile Images Section */}
                    <div className="lg:w-1/2 flex flex-row space-x-2 p-4">
                      {teacher.profileImages.map((image, index) => (
                        <div 
                          key={index} 
                          className="relative aspect-[16/9] overflow-hidden rounded-lg flex-1 cursor-pointer group"
                          onClick={() => openImageModal(image)}
                        >
                          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <img
                            src={image}
                            alt={`${teacher.name} profile ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-black/50 rounded-full p-2">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Teacher Details Section */}
                    <div className="lg:w-1/2 p-6 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        
                      </div>
                      
                      <h4 className="text-2xl font-heading font-bold mb-2">{teacher.name}</h4>
                      <p className="text-sm font-medium text-primary mb-3">{teacher.role} • {teacher.qualification}</p>
                      
                      <p className="text-muted-foreground italic">"{teacher.philosophy}"</p>
                    </div>
                  </div>
                </div>

                {/* Second Flashcard: Experience Images + Deepvihar Experience */}
                <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl overflow-hidden shadow-lg border border-blue-200/50 dark:border-blue-800/50 hover:shadow-2xl transition-all duration-500">
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Experience Images Section */}
                    <div className="lg:w-1/2 p-4">
                      <div className="grid grid-cols-2 lg:grid-cols-2 gap-2">
                        {teacher.experienceImages.map((image, index) => (
                          <div 
                            key={index} 
                            className="relative aspect-[4/3] lg:aspect-[16/9] overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => openImageModal(image)}
                          >
                            <div className="absolute inset-0 bg-blue-200/30 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                              src={image}
                              alt={`${teacher.name} experience ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-black/50 rounded-full p-2">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deepvihar Experience Section */}
                    <div className="lg:w-1/2 p-6 flex flex-col justify-center">
                      <h5 className="text-xl font-heading font-bold text-blue-900 dark:text-blue-100 mb-4">Experience</h5>
                      <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed mb-4">
                        {teacher.deepviharExperience}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Currently Working</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeImageModal}
        >
          <div className="relative w-full max-w-3xl max-h-[80vh]">
            <img
              src={selectedImage}
              alt="Full size view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
