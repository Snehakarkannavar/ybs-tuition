import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">Start Your Journey With Us</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Have questions about admissions, fees, or our teaching methodology? 
                Reach out to us. We'd love to guide you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-slate-400">
                    Bld. No. 135 2/4, MPT Colony,<br />
                    Headland Sada (Opposite Kitchen Mate),<br />
                    Mormugao, Goa - 403803
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Branch 2: Bld. No. 221 2/3 - C Type, MPT Colony Sada (Opp. Deepvihar High School)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-400">
                    +91 7083248776<br />
                    +91 7276491973
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-400">info@ybstuition.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
            <h4 className="font-heading font-bold text-2xl mb-6">Send a Message</h4>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-300">Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-300">Phone</Label>
                  <Input id="phone" placeholder="+91 9876543210" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-primary/50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="class" className="text-slate-300">Interested Class</Label>
                <select className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option className="bg-slate-900">Class 6th</option>
                  <option className="bg-slate-900">Class 7th</option>
                  <option className="bg-slate-900">Class 8th</option>
                  <option className="bg-slate-900">Class 9th</option>
                  <option className="bg-slate-900">Class 10th</option>
                  <option className="bg-slate-900">Class 11th Science</option>
                  <option className="bg-slate-900">Class 12th Science</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">Message</Label>
                <Textarea id="message" placeholder="I would like to inquire about..." className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 min-h-[120px] focus:border-primary/50" />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
