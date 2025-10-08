import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAssetPath } from "@/lib/assets";

const Header = () => {
  return (
    <header className="relative bg-primary text-primary-foreground">
      {/* Main header content */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={getAssetPath("logo.png")} 
              alt="Arihant Food Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
            <a href="/" className="hover:opacity-80 transition-opacity">
              Home
            </a>
            <a href="#about" className="hover:opacity-80 transition-opacity">
              About Us
            </a>
            <a href="#products" className="hover:opacity-80 transition-opacity">
              Products
            </a>
            <a href="#blog" className="hover:opacity-80 transition-opacity">
              Blog
            </a>
            <a href="#contact" className="hover:opacity-80 transition-opacity">
              Contact
            </a>
          </nav>

          {/* Shopping cart */}
          <div className="flex items-center">
            <button className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity">
              <ShoppingCart size={30} strokeWidth={2.0} />
            </button>
          </div>
        </div>
      </div>

      {/* Wavy bottom border */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full"
          style={{ height: "40px" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 Q30,0 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,40 L0,40 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
