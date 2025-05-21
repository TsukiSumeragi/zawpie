
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <CategorySection />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Featured Products</h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Handpicked products from Shopee that offer the best quality and value for your money.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose <span className="text-gradient">ZHOPEE</span>?</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We partner with Shopee to bring you the best deals on authentic products.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-zhopee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zhopee-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Authentic Products</h3>
              <p className="text-gray-600">All products are sourced directly from official Shopee stores.</p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-zhopee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zhopee-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Best Prices</h3>
              <p className="text-gray-600">We find the best deals and discount codes so you save money.</p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-zhopee-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-zhopee-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Curated Selection</h3>
              <p className="text-gray-600">We test and review products to ensure they meet our quality standards.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
