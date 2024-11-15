import React, { useState } from 'react';
import { Music, ArrowRight } from 'lucide-react';

const TAYLOR_TRACKS = [
  "All Too Well",
  "Shake It Off",
  "Love Story",
  "Blank Space",
  "Anti-Hero",
  "Cruel Summer",
  "Cardigan",
  "Wildest Dreams",
  "Style",
  "Red",
  "You Belong With Me",
  "Look What You Made Me Do",
  "Bad Blood",
  "Delicate",
  "22",
  "I Knew You Were Trouble",
  "We Are Never Ever Getting Back Together",
  "ME!",
  "Ready For It?",
  "Enchanted",
  "Fearless",
  "Back To December",
  "Mean",
  "Mine",
  "Sparks Fly",
  "Begin Again",
  "Out Of The Woods",
  "Clean",
  "New Romantics",
  "Call It What You Want",
  "Gorgeous",
  "Don't Blame Me",
  "Getaway Car",
  "The Man",
  "The Last Great American Dynasty"
];

export default function ArtistApplication() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    track: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const element = document.getElementById('limited-offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Apply to Perform
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Artist/Band Name
            </label>
            <input
              type="text"
              required
              placeholder="Your artist or band name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              required
              placeholder="Your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Track to Perform
            </label>
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              onChange={(e) => setFormData({ ...formData, track: e.target.value })}
            >
              <option value="">Choose a song</option>
              {TAYLOR_TRACKS.map((track) => (
                <option key={track} value={track}>{track}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            Submit Application <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}