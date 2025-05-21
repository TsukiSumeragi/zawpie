
import React from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { eyeProducts } from "@/data/products";

const EyesPage = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-zhopee-100 to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Eye Products</h1>
          <p className="text-gray-600 mb-6">
            Explore our curated collection of eye makeup and care products.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {eyeProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EyesPage;
