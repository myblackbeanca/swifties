import React, { useState } from 'react';
import { Music2, Share2 } from 'lucide-react';

const artists = [
  {
    name: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=800",
    song: "Shake It Off",
    bio: "Nashville-based singer-songwriter"
  },
  {
    name: "Emma Rodriguez",
    image: "https://images.unsplash.com/photo-1534650075489-3baecec1e8b1?w=800",
    song: "Love Story",
    bio: "Folk-pop artist from Austin"
  },
  {
    name: "James Wilson",
    image: "https://images.unsplash.com/photo-1549834125-82d3c48159a3?w=800",
    song: "Wildest Dreams",
    bio: "Indie musician from Brooklyn"
  },
  {
    name: "Lily Chen",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800",
    song: "Cardigan",
    bio: "Pop vocalist from LA"
  },
  {
    name: "Alex Turner",
    image: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?w=800",
    song: "All Too Well",
    bio: "Alternative artist from Seattle"
  }
];

export function Artists() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your support! 100% of the payment goes to the artists.');
    setShowForm(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Artists</h2>
        <p className="text-center text-gray-600 mb-12">
          Experience unique covers of Taylor's greatest hits by these talented artists
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {artists.map((artist, index) => (
            <div key={index} className="group">
              <div className="relative mb-4">
                <div className="hexagon-clip group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white">{artist.bio}</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                <p className="text-purple-600">Performing: {artist.song}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <button
            onClick={() => setShowForm(true)}
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center"
          >
            <Music2 className="mr-2" /> Listen MINY Mixtape
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4">Support Our Artists</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Artists;