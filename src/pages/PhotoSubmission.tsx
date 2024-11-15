import React from 'react';
import PhotoSubmissionForm from '../components/PhotoSubmission';

export default function PhotoSubmissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8">
            Submit Your Birthday Wishes
          </h1>
          <div className="relative max-w-4xl mx-auto h-[400px] rounded-2xl overflow-hidden mb-12">
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80"
              alt="Concert Celebration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8">
              <p className="text-white text-xl font-light max-w-2xl">
                Share your heartfelt birthday message with Taylor
              </p>
            </div>
          </div>
        </div>
        <PhotoSubmissionForm />
      </div>
    </div>
  );
}