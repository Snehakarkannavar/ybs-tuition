import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img src="/attached_assets/image_1765627778951.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-heading font-bold text-xl text-white">YBS Tuition</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Empowering students with concept-based learning and personalized attention. 
              Yeshwant Beyond Studies - where education meets excellence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ybs.tuition/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/yeshwant.karkannavar/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#teachers" className="hover:text-primary transition-colors">Our Teachers</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Classes</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-400">Class 6th - 10th (All Subjects)</span></li>
              <li><span className="text-slate-400">Class 11th & 12th Science</span></li>
              <li><span className="text-slate-400">Physics</span></li>
              <li><span className="text-slate-400">Board Exam Preparation</span></li>
              <li><span className="text-slate-400">Concept-Focused Learning</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  C type MPT Colony, Headland Sada (Near Deepvihar High School), Goa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-slate-400">+91 7083248776 / 7276491973</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-slate-400">ybstuition@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        
      </div>
    </footer>
  );
}
