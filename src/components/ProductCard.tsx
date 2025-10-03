import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  unit?: string;
}

const ProductCard = ({ name, price, image, unit = "pack" }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">per {unit}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-accent">₹{price}</span>
            <Button size="icon" variant="hero" className="rounded-full">
              <ShoppingCart size={18} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
