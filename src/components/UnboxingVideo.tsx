import React from 'react';
import { Package } from 'lucide-react';

export default function UnboxingVideo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Package className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-800">Unbox Your MINY</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Watch how Swifties unbox their exclusive 2" hexagon-shaped MINY collectible
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="MINY Unboxing Experience"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => {
                const element = document.getElementById('limited-offer');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              Get Your MINY Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}