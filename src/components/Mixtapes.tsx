import React from 'react';
import { Music2 } from 'lucide-react';

export default function Mixtapes() {
  const mixtapes = [
    {
      name: "mariami flow",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/subway-musician-564bd.appspot.com/o/a-mixtapes%2FMiny%20Vinyl%20Playlist%20(Mixtape)%20featuring%20tracks%20-%20Isev---Mariami---Creepy-Song---Mariami---Waking-Hour---Mariami---Hold-Me---Lumidelic.webp?alt=media&token=4b2e6edf-432d-4e32-a73d-625f4e7c902b",
      shortenedLink: "https://go.minyvinyl.com/mariamimix",
      description: "A mesmerizing blend of electronic and ambient sounds"
    },
    {
      name: "g25: best dance/electronic music",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/subway-musician-564bd.appspot.com/o/a-mixtapes%2FMiny%20Vinyl%20Playlist%20(Mixtape)%20featuring%20tracks%20-%20Apple---Charli-Xcx---Three-Drums---Four-Tet---Neverender---Justice---Witchy-(Feat.-Childish-Gambino)---KAYTRANADA.webp?alt=media&token=eb0cf29d-214e-46c2-ac91-cecbc4a042f9",
      shortenedLink: "https://go.minyvinyl.com/g25bdema",
      description: "High-energy beats and electronic anthems"
    },
    {
      name: "taylor demo bday mix",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/subway-musician-564bd.appspot.com/o/aminy-generation%2Fminy-eb3a2d77-8eca-410e-b255-96cee553c58d?alt=media&token=05cf251b-a583-40da-aceb-7179e718faf9",
      shortenedLink: "https://go.minyvinyl.com/rondemo",
      description: "Special Taylor Swift birthday celebration mix"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music2 className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl font-bold text-gray-800">Featured Mixtapes</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exclusive MINY mixtapes curated by our community of artists and music lovers. 
            Each mix tells a unique story through carefully selected tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mixtapes.map((mixtape, index) => (
            <a
              href={mixtape.shortenedLink}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={mixtape.imageUrl}
                    alt={mixtape.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 capitalize mb-2">
                    {mixtape.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{mixtape.description}</p>
                  <p className="text-purple-600 group-hover:text-pink-500 transition-colors">
                    Listen Now →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}