import { motion } from "framer-motion";
import { Bell, Calendar, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const updates = [
  {
    category: "New Batch",
    date: "Dec 15, 2025",
    title: "Admissions Open for Academic Year 2026",
    description: "Enrollment started for Class 6th to 10th (All Subjects) and 11th/12th Science.",
    urgent: true,
  },
  {
    category: "Event",
    date: "Dec 20, 2025",
    title: "Science Exhibition & Workshop",
    description: "Join us for a hands-on science workshop this weekend. Open for all students.",
    urgent: false,
  },
  {
    category: "Notice",
    date: "Jan 05, 2026",
    title: "Board Exam Prep Crash Course",
    description: "Intensive 2-month crash course for Class 10th & 12th students starting soon.",
    urgent: false,
  },
];

export default function Updates() {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
             <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Notice Board</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold">Latest Updates</h3>
          </div>
          <div className="flex items-center gap-2 text-primary font-medium cursor-pointer hover:underline">
            View Archive <ChevronRight className="h-4 w-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all hover:border-primary/50"
            >
              {update.urgent && (
                <div className="absolute top-4 right-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                 <Badge variant={update.urgent ? "destructive" : "secondary"} className="rounded-full font-normal">
                   {update.category}
                 </Badge>
                 <span className="text-xs text-muted-foreground flex items-center gap-1">
                   <Calendar className="h-3 w-3" /> {update.date}
                 </span>
              </div>
              
              <h4 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {update.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {update.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
