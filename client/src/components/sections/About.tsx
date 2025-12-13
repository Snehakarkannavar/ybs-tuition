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
    description: "Dedicated sessions to clear doubts in English, Hindi, Marathi, or Konkani.",
  },
];

const stats = [
  { label: "Students Mentored", value: "100+" },
  { label: "Years Experience", value: "5+" },
  { label: "Subjects Covered", value: "8+" },
  { label: "Success Rate", value: "100%" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                <p className="font-heading font-bold text-2xl mb-2">"Education is not the learning of facts, but the training of the mind to think."</p>
                <p className="text-white/80">- Albert Einstein</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-border max-w-[200px]"
            >
              <div className="text-4xl font-heading font-bold text-primary mb-1">5+</div>
              <div className="text-sm font-medium text-muted-foreground">Years of shaping bright futures</div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">About YBS Tuition</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Yeshwant Beyond <br /><span className="text-primary">Studies</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At YBS Tuition, we believe that every student has the potential to excel. 
                Our mission is to move beyond traditional rote learning and foster a deep 
                conceptual understanding of subjects. We create a supportive environment 
                where curiosity is encouraged and doubts are welcomed.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div key={index} className="text-center md:text-left">
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
