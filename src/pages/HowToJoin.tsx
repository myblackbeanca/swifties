import React from 'react';
import HowToJoinContent from '../components/HowToJoin';

export default function HowToJoinPage() {
  return (
    <div className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8">
            How to Join Swiftie Wishes
          </h1>
          <div className="relative max-w-4xl mx-auto h-[400px] rounded-2xl overflow-hidden mb-12">
            <img 
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80"
              alt="Concert Celebration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8">
              <p className="text-white text-xl font-light max-w-2xl">
                Join 1,000 Swifties in creating an unforgettable birthday celebration
              </p>
            </div>
          </div>
        </div>
        <HowToJoinContent />
      </div>
    </div>
  );
}