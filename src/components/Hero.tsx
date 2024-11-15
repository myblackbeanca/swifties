import React from 'react';
import { Sparkles, Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToOffer = () => {
    const element = document.getElementById('limited-offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
            url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80')`
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <Sparkles className="inline-block w-8 h-8 mr-2 text-pink-400" />
            Swiftie Wishes
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
            Celebrate Taylor Swift's 35th Birthday with 1,000 Exclusive MINY Holders!
          </p>
          <p className="text-xl text-white/80 mb-8">
            Join us in creating a magical tribute featuring both physical and virtual celebrations
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-white/80">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>December 13, 2024</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>NYC & Virtual Worldwide</span>
            </div>
          </div>

          <button 
            onClick={scrollToOffer}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Join the Tribute Now
          </button>
        </div>
      </div>
    </div>
  );
}