import { Twitter, Linkedin, Instagram, MessageCircle, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="bg-[#0a0f1e] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ImageWithFallback 
                src="icon.png"
                alt="E-Cell IARE Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="text-white font-semibold">E-Cell IARE</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering tomorrow's entrepreneurs, providing a vibrant platform 
              that ignites creativity, fosters innovation, and nurtures the next 
              generation of visionary leaders.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Events</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">FOLLOW US</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://x.com/ecell_iare" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>X (TWITTER)</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/ecell-iare/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>
              <a 
                href="https://www.instagram.com/ecelliare/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>INSTAGRAM</span>
              </a>
              <a 
                href="https://chat.whatsapp.com/HPiIDQ9W5pGEjFt6gfEzJg?mode=ems_copy_t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>
              <button 
                onClick={() => window.open('https://forms.gle/TQJSeBbfUaGmBdDt7', '_blank')}
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 text-sm transition-colors text-left"
              >
                <Mail className="w-4 h-4" />
                <span>CONTACT US</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © 2025 E-Cell IARE. All rights reserved. // DESIGNED BY STUDENT INNOVATORS
        </div>
      </div>
    </footer>
  );
}
