import React from 'react';
import { Clock } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      date: "Nov 15 – Nov 30",
      title: "Submit Your Tribute",
      description: "Record your 1-second video or photo message"
    },
    {
      date: "Dec 1 – Dec 7",
      title: "Production Phase",
      description: "Artists record covers, tribute video creation"
    },
    {
      date: "Dec 8 – Dec 12",
      title: "Token Distribution",
      description: "Receive your exclusive MINY token"
    },
    {
      date: "Dec 13",
      title: "Celebration Day",
      description: "Join us in NYC or virtually for the big reveal!"
    }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Clock className="w-8 h-8 text-purple-600" />
          <h2 className="text-4xl font-bold text-gray-800">Event Timeline</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="flex mb-8 last:mb-0">
              <div className="w-32 flex-shrink-0 text-right pr-6">
                <span className="text-sm font-semibold text-purple-600">
                  {event.date}
                </span>
              </div>
              <div className="relative pl-6 border-l-2 border-purple-200">
                <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-[7px] top-2" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}