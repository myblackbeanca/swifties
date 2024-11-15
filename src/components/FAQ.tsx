import React, { useState } from 'react';
import RequestInvite from './RequestInvite';

export function FAQ() {
  const [showInvite, setShowInvite] = useState(false);

  const faqs = [
    {
      question: "Who can participate in the birthday wishes?",
      answer: (
        <div>
          Anyone who has a MINY can participate! {' '}
          <button 
            onClick={() => setShowInvite(true)}
            className="text-pink-500 hover:text-pink-600 font-medium"
          >
            Request an invite
          </button>
          {' '} to join the MINY community.
        </div>
      )
    },
    {
      question: "What do I need to submit?",
      answer: "You can submit either a 1-second video clip or a photo with a heartfelt birthday wish to Taylor Swift. Be creative and show your Swiftie spirit!"
    },
    {
      question: "Is there a fee to participate?",
      answer: "No, participation is free, but you'll need to have a MINY to join the campaign."
    },
    {
      question: "What is a MINY?",
      answer: "A MINY is a 2\" digital vinyl record & a 2\" physical hexagon shaped collectible that serves as your keepsake for this campaign. It also gives you access to exclusive content and the event."
    },
    {
      question: "When will I receive my MINY?",
      answer: "Your MINY will be shipped between December 8 – December 12, 2024."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <div className="text-gray-600">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <RequestInvite isOpen={showInvite} onClose={() => setShowInvite(false)} />
    </section>
  );
}

export default FAQ;