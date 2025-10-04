import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img 
              src="/logo.png" 
              alt="Always Fresh Supermarket Logo" 
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-background/80 mb-4">
              Your trusted source for fresh dairy products and vegetables. Quality delivered to your doorstep in 20 minutes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Fresh Milk</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Paneer</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pure Ghee</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Butter</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Frozen Vegetables</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@alwaysfresh.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>123 Fresh Street, Market Area, City 123456</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>&copy; 2024 Always Fresh Supermarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
