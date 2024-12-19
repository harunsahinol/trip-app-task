"use client";

import { formatDate } from "@/app/utils/utils";
import { Tour } from "@/app/types/tours";
import { MapPin } from "lucide-react";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const route = tour.routes[0];
  const operatingDays = route?.operatingDays || [];
  const startTimes = route?.startTime || [];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      {tour.galleries?.[0] && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={tour.galleries[0].url}
          alt={tour.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-primary-500 text-xl">
            {tour.tourCategory.name}
          </span>
          <span>
            <p className="text-base text-black font-bold">
              From ${tour.price.adultPrice}
            </p>
            <p className="text-sm text-gray-500 font-medium">
              For Children ${tour.price.childPrice}
            </p>
          </span>
        </div>

        <h3 className="text-3xl -mt-3 mb-2 font-black text-black">
          {tour.title}
        </h3>
        <p className="text-sm line-clamp-2 text-gray-400 uppercase font-medium">
          {tour.description}
        </p>

        <p>
          <span className="text-md text-black">
            Group Size: {route?.groupSize}
          </span>
        </p>

        <hr className="my-3" />
        <p className="flex font-light text-gray-900">
          <MapPin size={22} />
          {tour.activityLocation.address}
        </p>

        <div className="border-b border-gray-200 pt-3">
          <p className="text-sm text-gray-500">Transfer Type:</p>
          <p className="text-sm text-black">{tour.transferType}</p>

          <p className="text-sm text-gray-500 mt-2">Transfer Description:</p>
          <p className="text-sm text-black mb-2">{tour.transferDescription}</p>
        </div>

        {/* Buraya sonra göz at çalışmıyor*/}
        {/* <div>
          <div>Start: {tour.routes.startDate}</div>
          <div>End: {tour.routes.endDate}</div>
        </div> */}

        <div className="grid grid-cols-2 gap-2 text-sm border-b mt-3 pb-3">
          <div className="space-y-1 text-black">
            <div className="font-bold">Schedule:</div>
            <div className="text-sm space-y-1 text-black">
              {route && (
                <>
                  <div>Start: {formatDate(route.startDate)}</div>
                  <div>End: {formatDate(route.endDate)}</div>
                  <div className="flex flex-wrap gap-1">
                    {operatingDays.map((day, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 px-2 py-1 rounded text-sm"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="space-y-1 text-black">
            <div className="font-bold">Start Times:</div>
            <div className="flex flex-wrap gap-1">
              {startTimes.map((time, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 px-2 py-0.5 rounded text-sm"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        </div>

        {tour.foodAndDrinks?.length > 0 && (
          <div className="mt-3">
            <p className="text-sm text-gray-500">Includes:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {tour.foodAndDrinks.slice().map((item) => (
                <span
                  key={item.name}
                  className="text-xs bg-gray-600 px-2 py-1 rounded"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        )}
        {/* 
          -Vehicle
          -Features 
          are left to be implemented
          */}
        <div>
          <p className="text-md border-t mt-3 pt-3">
            <span className="text-black">Vehicle: </span>
            <span className="text-gray-600 underline">{tour.vehicle.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
