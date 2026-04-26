"use client";

import { siteData } from "@/lib/siteData";
import { copyToClipboard } from "@/lib/utils";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function LocationHours() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyPhone = async () => {
    await copyToClipboard(siteData.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyAddress = async () => {
    await copyToClipboard(siteData.contact.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're located in the heart of the city, ready to welcome you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Location</h3>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-gray-300 flex-1">{siteData.contact.address}</p>
                  <div className="relative group">
                    <button
                      onClick={handleCopyAddress}
                      className={cn(
                        "p-2 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800",
                        copiedAddress
                          ? "bg-green-500/20 text-green-400"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                      )}
                      aria-label="Copy address"
                    >
                      {copiedAddress ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                    {/* Tooltip */}
                    <div
                      className={cn(
                        "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap pointer-events-none transition-opacity duration-200",
                        copiedAddress ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                      )}
                    >
                      Copy Address
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                    {/* Copied Tooltip */}
                    {copiedAddress && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-medium text-green-400 bg-green-500/20 border border-green-500/50 rounded-lg shadow-lg shadow-green-500/20 whitespace-nowrap animate-fadeIn">
                        ✓ Copied!
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-green-500/20 border-l border-b border-green-500/50 rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`tel:${siteData.contact.phone}`}
                      className="text-white hover:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 rounded flex-1"
                    >
                      {siteData.contact.phone}
                    </a>
                    <div className="relative group">
                      <button
                        onClick={handleCopyPhone}
                        className={cn(
                          "p-2 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800",
                          copiedPhone
                            ? "bg-green-500/20 text-green-400"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                        )}
                        aria-label="Copy phone number"
                      >
                        {copiedPhone ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                      {/* Tooltip */}
                      <div
                        className={cn(
                          "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap pointer-events-none transition-opacity duration-200",
                          copiedPhone ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                        )}
                      >
                        Copy Phone
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                      {/* Copied Tooltip */}
                      {copiedPhone && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-medium text-green-400 bg-green-500/20 border border-green-500/50 rounded-lg shadow-lg shadow-green-500/20 whitespace-nowrap animate-fadeIn">
                          ✓ Copied!
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-green-500/20 border-l border-b border-green-500/50 rotate-45"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="text-white hover:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 rounded"
                  >
                    {siteData.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Opening Hours</h3>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="space-y-3">
                {days.map((day) => {
                  const hours = siteData.hours[day];
                  const dayName = day.charAt(0).toUpperCase() + day.slice(1);
                  return (
                    <div
                      key={day}
                      className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0"
                    >
                      <span className="text-gray-300 font-medium">{dayName}</span>
                      <span className="text-gray-400">
                        {hours.closed
                          ? "Closed"
                          : `${hours.open} - ${hours.close}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative">
                <div className="text-center z-10">
                  <svg
                    className="w-16 h-16 text-gray-500 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-400 text-sm mb-2">Map View</p>
                  <a
                    href={siteData.contact.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 text-sm underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 rounded"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
