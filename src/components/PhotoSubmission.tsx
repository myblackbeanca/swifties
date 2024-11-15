import React, { useState } from 'react';
import { Upload, ArrowRight, Share2, X } from 'lucide-react';

export default function PhotoSubmission() {
  const [showForm, setShowForm] = useState(true);
  const [showInvite, setShowInvite] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    photo: null as File | null
  });
  const [inviteEmail, setInviteEmail] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, photo: file });
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setShowInvite(true);
  };

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for inviting a friend! Your MINY will be on its way soon.');
    setShowInvite(false);
    const element = document.getElementById('limited-offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const closeModal = () => {
    setShowForm(false);
    setShowInvite(false);
  };

  if (!showForm && !showInvite) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-800">
            {showForm ? 'Submit Your Birthday Wish' : 'Invite a Friend'}
          </h3>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          {showForm ? (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    required
                    className="hidden"
                    id="photo-upload"
                    onChange={handlePhotoChange}
                  />
                  <label
                    htmlFor="photo-upload"
                    className={`block aspect-square rounded-2xl overflow-hidden cursor-pointer ${
                      previewUrl ? '' : 'border-2 border-dashed border-gray-300'
                    }`}
                  >
                    {previewUrl ? (
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mb-4" />
                        <p className="text-pink-500 font-medium mb-2">
                          Click to upload your photo
                        </p>
                        <p className="text-sm text-gray-500">
                          Show your Swiftie spirit with a creative birthday message!
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <Share2 className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Invite a Swiftie Friend
                </h3>
                <p className="text-gray-600">
                  Get your exclusive MINY by inviting another Swiftie to join the celebration!
                </p>
              </div>

              <form onSubmit={handleInvite} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Friend's Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="friend@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  Send Invitation <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}