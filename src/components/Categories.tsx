import { Milk, Cookie, Droplet, Wheat, Leaf } from "lucide-react";

const categories = [
  { name: "Milk", icon: Milk },
  { name: "Paneer", icon: Cookie },
  { name: "Ghee", icon: Droplet },
  { name: "Butter", icon: Wheat },
  { name: "Frozen Vegetables", icon: Leaf },
];

const Categories = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-secondary group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                  <Icon size={32} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="font-semibold text-center">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
