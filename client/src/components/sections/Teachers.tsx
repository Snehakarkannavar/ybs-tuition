import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const teachers = [
  {
    name: "Yeshwant Sir",
    role: "Lead Educator & Founder",
    subjects: ["Physics", "Mathematics", "Science"],
    qualification: "M.Sc. Physics",
    image: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.32.58_PM_1765627807515.jpeg",
    philosophy: "I believe that if you can't explain it simply, you don't understand it well enough. My goal is to make complex physics and math concepts intuitive.",
  },
  {
    name: "Faculty Team",
    role: "Subject Experts",
    subjects: ["Chemistry", "Biology", "Languages"],
    qualification: "Qualified Professionals",
    image: "/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.07_PM_1765627793403.jpeg",
    philosophy: "Our team is dedicated to providing comprehensive support across all subjects, ensuring a well-rounded academic foundation.",
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Mentors</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4">Meet the Experts</h3>
          <p className="text-muted-foreground">
            Passionate educators dedicated to guiding students towards academic excellence and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="group relative bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-500">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {teacher.subjects.map((subject, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-transparent">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                  
                  <h4 className="text-2xl font-heading font-bold mb-1">{teacher.name}</h4>
                  <p className="text-sm font-medium text-primary mb-4">{teacher.role} • {teacher.qualification}</p>
                  
                  <p className="text-muted-foreground italic">"{teacher.philosophy}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
