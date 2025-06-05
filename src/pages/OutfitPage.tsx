import React from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { outfitProducts } from "@/data/products";

const OutfitPage = () => {  
  return (
    <Layout>
      <div className="bg-gradient-to-r from-zawpie-100 to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Outfit Products</h1>
          <p className="text-gray-600 mb-6">
            Discover our selection of high-quality outfit products from Shopee.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {outfitProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OutfitPage;