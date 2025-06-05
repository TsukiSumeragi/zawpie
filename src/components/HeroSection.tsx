
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-zawpie-100 to-zawpie-200 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Find the Best
              <span className="text-gradient block">Shopee Deals</span>
            </h1>
            <p className="text-lg mb-6 text-gray-700 max-w-lg">
              Discover amazing products from Shopee at the best prices. Your one-stop destination for makeup, eye care, and digital devices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-zawpie-500 hover:bg-zawpie-600"
              >
                <Link to="/makeup">Shop Makeup</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-zawpie-500 text-zawpie-500 hover:bg-zawpie-100"
              >
                <Link to="/digital">Digital Devices</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-zawpie-300/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-zawpie-400/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-zawpie-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=300"
                      alt="Makeup products" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-zawpie-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&q=80&w=300"
                      alt="Eyecare products" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-zawpie-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=300"
                      alt="Lipstick products" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-zawpie-100 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?auto=format&fit=crop&q=80&w=300"
                      alt="Digital devices" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
