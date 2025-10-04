import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

import milkImage from "@/assets/milk.jpg";
import paneerImage from "@/assets/paneer.jpg";
import gheeImage from "@/assets/ghee.jpg";
import butterImage from "@/assets/butter.jpg";
import vegetablesImage from "@/assets/vegetables.jpg";

const products = [
  { name: "Fresh Milk", price: 60, image: milkImage, unit: "liter" },
  { name: "Premium Paneer", price: 120, image: paneerImage, unit: "250g" },
  { name: "Pure Ghee", price: 450, image: gheeImage, unit: "500g" },
  { name: "Fresh Butter", price: 85, image: butterImage, unit: "200g" },
  { name: "Frozen Vegetables Mix", price: 95, image: vegetablesImage, unit: "500g" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      
      {/* Featured Products */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Fresh from farm to your table</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Wavy top border */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="relative block w-full"
            style={{ height: "40px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path
              d="M0,20 Q30,0 60,20 T120,20 T180,20 T240,20 T300,20 T360,20 T420,20 T480,20 T540,20 T600,20 T660,20 T720,20 T780,20 T840,20 T900,20 T960,20 T1020,20 T1080,20 T1140,20 T1200,20 L1200,0 L0,0 Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="promo-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#promo-grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Fresh Delivery in 20 Minutes!</h2>
          <p className="text-xl mb-8 opacity-90">Download our app and get your first order at 15% OFF</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-all hover:scale-105">
              Download App
            </button>
            <button className="px-8 py-4 bg-background text-foreground hover:bg-background/90 rounded-lg font-semibold transition-all hover:scale-105">
              View All Products
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
