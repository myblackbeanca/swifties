import React from 'react';
import { Instagram, Twitter, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">email@example.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
            Made with <Heart className="w-4 h-4 text-pink-400" /> by MINY
          </p>
        </div>
      </div>
    </footer>
  );
}