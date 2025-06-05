import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Paintbrush, Eye, Smartphone } from "lucide-react";
import type { ProductProps } from "@/data/products";

type Category = {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
};

interface ProductGridProps {
  products: ProductProps[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            {/* Card content */}
          </Card>
        ))}
      </div>
    </div>
  );
}

const CategorySection = () => {
  const categories: Category[] = [
    {
      id: "makeup",
      name: "Makeup",
      description: "Find the best makeup products from trusted brands.",
      icon: <Paintbrush className="h-8 w-8" />,
      path: "/makeup",
      color: "from-pink-500 to-purple-500",
    },
    {
      id: "eyes",
      name: "Eyes",
      description: "Discover eye care products for your beauty needs.",
      icon: <Eye className="h-8 w-8" />,
      path: "/eyes",
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: "digital",
      name: "Digital Devices",
      description: "Explore the latest tech gadgets and digital devices.",
      icon: <Smartphone className="h-8 w-8" />,
      path: "/digital",
      color: "from-zawpie-500 to-zawpie-300",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Shop By <span className="text-gradient">Category</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link to={category.path} key={category.id}>
              <Card className="overflow-hidden card-hover h-full">
                <div
                  className={`bg-gradient-to-r ${category.color} p-6 text-white flex justify-center`}
                >
                  {category.icon}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
