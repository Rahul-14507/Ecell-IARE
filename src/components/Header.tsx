import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-[#0a0f1e]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <ImageWithFallback 
              src="/icon.png"
              alt="E-Cell IARE Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <div className="text-white font-semibold">E-Cell IARE</div>
              <div className="text-[10px] text-gray-400 -mt-1">IGNITE · IMPACT · EVENTS</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a>
            <a href="#team" className="text-gray-300 hover:text-emerald-400 transition-colors">Team</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a>
          </nav>
          
          <Button 
            className="bg-emerald-500 hover:bg-emerald-600 text-black"
            onClick={() => window.open('https://forms.gle/TQJSeBbfUaGmBdDt7', '_blank')}
          >
            JOIN US
          </Button>
        </div>
      </div>
    </header>
  );
}
