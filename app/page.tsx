"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/app/components/layout/Navbar";
import TourCard from "@/app/components/tours/TourCard";
import { Tour } from "@/app/types/tours";
import { API_ENDPOINTS } from "@/app/constants/config";

export default function Home() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.TOURS);
        setTours(response.data.products);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleFilterChange = (category: string) => {
    console.log("Selected category:", category);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Navbar onFilterChange={handleFilterChange} />

      <main className="container mx-auto px-4 pt-20">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500" />
          </div>
        ) : (
          <div className="grid gap-4">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
