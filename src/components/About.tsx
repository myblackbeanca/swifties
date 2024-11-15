import React from 'react';
import { Music, Video, Gift } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "16:40 Birthday Video",
      description: "A magical montage featuring 1,000 Swifties worldwide"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Live Performances",
      description: "Six talented artists covering Taylor's greatest hits"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "MINY Collectible",
      description: "Exclusive 2\" hexagon vinyl for all participants"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Celebrate Taylor Swift's 35th Birthday with Love and Music!
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <img 
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80"
            alt="Taylor Swift Concert"
            className="w-full h-64 object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-pink-100 rounded-full text-pink-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}