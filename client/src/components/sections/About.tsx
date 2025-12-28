import { motion } from "framer-motion";
import { Award, BookOpen, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Personalized Attention",
    description: "Small batch sizes ensure every student gets individual focus and mentorship.",
  },
  {
    icon: BookOpen,
    title: "Concept-Based Learning",
    description: "We focus on understanding the 'Why' and 'How', not just rote memorization.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Consistent track record of academic excellence and grade improvement.",
  },
  {
    icon: Clock,
    title: "Doubt Solving",
    description: "Dedicated sessions to clear doubts in English, Hindi, Konkani, Marathi, or Kannada languages .",
  },
];

const stats = [
  { label: "Students Mentored", value: "40+" },
  { label: "Years Experience", value: "3+" },
  { label: "Subjects Covered", value: "8+" },
  { label: "Success Rate", value: "90%" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image/Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
              <img
                src="/attached_assets/WhatsApp_Image_2025-12-13_at_5.30.02_PM_1765627793402.jpeg"
                alt="Classroom Session"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-heading font-bold text-2xl mb-2">"Gaining knowledge makes you better. Sharing it makes you the best.</p>
                <p className="text-white/80">- Yeshwant </p>
              </div>
            </div>
            
          </motion.div>

          {/* Right Column: Content */}
          <div className="space-y-5 -mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <h4 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Yeshwant Beyond <span className="text-primary">Studies</span>
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
               At YBS Tuition, we believe every student can excel. 
               We go beyond rote learning to build strong conceptual understanding in a
                supportive environment where curiosity and questions are encouraged.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border-none shadow-none bg-secondary/50 hover:bg-secondary transition-colors h-full">
                    <CardContent className="p-6">
                      <feature.icon className="h-10 w-10 text-primary mb-4" />
                      <h4 className="font-heading font-bold text-lg mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-3xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
