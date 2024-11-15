import React, { useState } from 'react';
import { Coins, Shield, Zap, Gift, MapPin } from 'lucide-react';

export default function BuyMINY() {
  const [waitlistData, setWaitlistData] = useState({
    email: '',
    phone: '',
    eventType: '' as 'nyc' | 'virtual' | ''
  });

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission
    alert('Thanks for joining the waitlist! We\'ll be in touch soon.');
  };

  const benefits = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Exclusive Access",
      description: "Join special events and celebrations like Swiftie Wishes"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Physical & Digital",
      description: "2\" hexagon-shaped vinyl record with digital companion"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Support Artists",
      description: "100% of payments go directly to the artists"
    }
  ];

  return (
    <section id="limited-offer" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get Your MINY</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the MINY community and be part of Taylor's special birthday celebration!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="relative">
            <div className="hexagon-clip overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1541379889336-70f26e4c4617?auto=format&fit=crop&q=80"
                alt="Taylor Swift Tribute MINY"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                2" Hexagon Collectible
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Limited Time Offer</h3>
            <p className="text-gray-600 mb-6">
              Be one of 1,000 Swifties to celebrate Taylor's birthday with this exclusive 2" hexagon-shaped collectible. 100% of proceeds go directly to supporting the artists.
            </p>
            <div className="text-3xl font-bold mb-8 text-pink-500">$35</div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform w-full md:w-auto">
              Claim Your MINY Now
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl mx-auto text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Join the Event Waitlist</h3>
          <form onSubmit={handleWaitlist} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg text-white"
                onChange={(e) => setWaitlistData({ ...waitlistData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="Your phone number"
                className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg text-white"
                onChange={(e) => setWaitlistData({ ...waitlistData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Select Event</label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg text-white"
                onChange={(e) => setWaitlistData({ ...waitlistData, eventType: e.target.value as 'nyc' | 'virtual' })}
              >
                <option value="">Choose event type</option>
                <option value="nyc">NYC In-Person Event</option>
                <option value="virtual">Virtual Worldwide Event</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}