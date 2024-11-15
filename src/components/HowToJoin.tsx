import React from 'react';
import { Upload, Music, Gift, Calendar, MapPin } from 'lucide-react';

export default function HowToJoin() {
  const steps = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Submit Your Photo",
      deadline: "December 1, 2024",
      content: "Share a high-resolution photo with your personalized birthday message for Taylor. Show your Swiftie pride and get creative!"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Vote for the Songs",
      deadline: "December 5, 2024",
      content: "As a MINY holder, help choose which Taylor songs will be featured. Vote from our curated list of 35 iconic tracks."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Receive Your MINY",
      deadline: "By December 10, 2024",
      content: "Get your special commemorative MINY to unlock exclusive content and join the celebration on Taylor's birthday."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Calling All Swifties!
          </h2>
          <p className="text-xl text-gray-600">
            We're inviting 1,000 of Taylor Swift's biggest fans to join a special birthday tribute. 
            As a MINY holder, you're part of an exclusive group that gets to make this happen!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">{step.content}</p>
              <p className="text-sm font-semibold text-pink-500">
                Deadline: {step.deadline}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Join the MINY Celebration</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-pink-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">In-Person Event (NYC)</h4>
                <p className="text-gray-300">
                  Join us in New York for an exclusive MINY meetup! Celebrate with fellow Swifties IRL.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-pink-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Virtual Celebration</h4>
                <p className="text-gray-300">
                  Tap your MINY on Taylor's birthday to join virtually from anywhere in the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
            Submit Your Photo Now
          </button>
        </div>
      </div>
    </section>
  );
}