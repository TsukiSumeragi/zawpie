
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ShoppingCart,
  Menu,
  X
} from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zhopee-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gradient">ZHOPEE</div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-zhopee-500 transition-colors">
              Home
            </Link>
            <Link to="/makeup" className="font-medium hover:text-zhopee-500 transition-colors">
              Makeup
            </Link>
            <Link to="/eyes" className="font-medium hover:text-zhopee-500 transition-colors">
              Eyes
            </Link>
            <Link to="/digital" className="font-medium hover:text-zhopee-500 transition-colors">
              Digital Devices
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-64">
              <Input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 rounded-full" 
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zhopee-400 w-4 h-4" />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-zhopee-500" />
              <span className="absolute -top-1 -right-1 bg-zhopee-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zhopee-500" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-zhopee-100 animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="relative flex-1">
                <Input 
                  type="text" 
                  placeholder="Search products..." 
                  className="pl-10 pr-4 py-2 rounded-full" 
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zhopee-400 w-4 h-4" />
              </div>
              <Button variant="ghost" size="icon" className="relative ml-2">
                <ShoppingCart className="h-5 w-5 text-zhopee-500" />
                <span className="absolute -top-1 -right-1 bg-zhopee-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium hover:text-zhopee-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/makeup" 
                className="font-medium hover:text-zhopee-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                Makeup
              </Link>
              <Link 
                to="/eyes" 
                className="font-medium hover:text-zhopee-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                Eyes
              </Link>
              <Link 
                to="/digital" 
                className="font-medium hover:text-zhopee-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                Digital Devices
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
