import { Button } from "@/components/ui/button";
import heroProducts from "@/assets/hero-products.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                ORDER FRESH<br />FOOD NOW!
              </h1>
              <p className="text-2xl text-accent font-medium italic">
                Grocery deliver in 20 minutes!
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-4xl lg:text-5xl font-bold">
                TAKE 15% OFF
              </p>
              <p className="text-xl text-accent font-medium italic">
                on your first order
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="hero" size="lg" className="text-base uppercase">
                Order Now
              </Button>
            </div>

            {/* Carousel dots */}
            <div className="flex gap-2 pt-4">
              <div className="w-3 h-3 rounded-full bg-foreground"></div>
              <div className="w-3 h-3 rounded-full bg-foreground/30"></div>
              <div className="w-3 h-3 rounded-full bg-foreground/30"></div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-secondary/40 blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-secondary/30 blur-3xl"></div>
            
            {/* Grid decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Product image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroProducts}
                alt="Fresh dairy products and vegetables"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
