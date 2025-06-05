import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  discount?: number;
  image: string;
  affiliateLink: string;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  title,
  price,
  discount,
  image,
  affiliateLink
}) => {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover rounded-lg"
        />
        {discount && (
          <Badge className="absolute top-2 right-2 bg-zawpie-500">
            {discount}% OFF
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-sm line-clamp-2 h-10 mb-2">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="font-bold text-zawpie-700">
            Rp {discountedPrice.toLocaleString()}
          </span>
          {discount && (
            <span className="text-xs text-gray-400 line-through">
              Rp {price.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          asChild
          className="w-full bg-zawpie-500 hover:bg-zawpie-600"
        >
          <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
