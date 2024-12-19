// src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { CATEGORIES } from "@/app/constants/config";
import Image from "next/image";
import Filter from "../filter/Filter";

interface NavbarProps {
  onFilterChange: (category: string) => void;
}

export default function Navbar({ onFilterChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tours");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={() => setIsOpen(true)} className="text-gray-900">
          <Menu size={24} />
        </button>
        <span className="text-primary-500 font-semibold">
          <Image src={"/image.png"} width={20} height={20} alt="logo" />
        </span>
        <div className="w-6" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4"
            >
              <X size={24} color="black" />
            </button>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="space-y-4">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`flex items-center justify-between w-full p-3 rounded-lg ${
                      selectedCategory === category
                        ? "bg-primary-400 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {category}
                    <ChevronRight size={20} color="black" />
                  </button>
                ))}
              </div>
              <div >
                <Filter/>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
