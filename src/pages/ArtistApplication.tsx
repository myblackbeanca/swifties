import React from 'react';
import ArtistApplicationForm from '../components/ArtistApplication';

export default function ArtistApplicationPage() {
  return (
    <div className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          Apply to Perform at Swiftie Wishes
        </h1>
        <ArtistApplicationForm />
      </div>
    </div>
  );
}