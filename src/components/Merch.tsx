import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Merch() {
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState('');

  const vinyls = [
    {
      title: "Fearless (Taylor's Version)",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80",
      description: "A special edition vinyl featuring Taylor's re-recorded masterpiece"
    },
    {
      title: "Red (Taylor's Version)",
      image: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80",
      description: "Experience the magic of Red in this unique collectible format"
    },
    {
      title: "1989 (Taylor's Version)",
      image: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?auto=format&fit=crop&q=80",
      description: "The perfect synth-pop era captured in vinyl form"
    }
  ];

  const handleVerify = () => {
    if (password === 'hbdtaylor') {
      setIsVerified(true);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-800">Taylor's Fan Made Exclusive Vinyls</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Limited edition 2" hexagon-shaped vinyls celebrating Taylor's music
          </p>
        </div>

        <div className="mb-12">
          <div className="max-w-md mx-auto bg-gray-100 rounded-lg p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter MINY holder password for special pricing
            </label>
            <div className="flex gap-4">
              <input
                type="password"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <button
                onClick={handleVerify}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                Verify
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {vinyls.map((vinyl, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="hexagon-clip">
                <img
                  src={vinyl.image}
                  alt={vinyl.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{vinyl.title}</h3>
                <p className="text-gray-600 mb-4">{vinyl.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-500">
                    {isVerified ? "$12.99" : "$12.99"}
                  </span>
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
                    Claim MINY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}