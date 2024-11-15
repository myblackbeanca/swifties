import React from 'react';
import { Link } from 'react-router-dom';
import { Music } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Music className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold">Swiftie Wishes</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/how-to-join" className="text-gray-600 hover:text-purple-600">
              How to Join
            </Link>
            <Link to="/submit-photo" className="text-gray-600 hover:text-purple-600">
              Submit Photo
            </Link>
            <Link to="/artist-application" className="text-gray-600 hover:text-purple-600">
              Apply to Perform
            </Link>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
              Get MINY
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}