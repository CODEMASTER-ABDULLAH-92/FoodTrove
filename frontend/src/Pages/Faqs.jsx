import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { asset } from '../assets/asset';

const Faqs = () => {
  const [hoveredFaq, setHoveredFaq] = useState(null);

  // Toggle hover state for a particular FAQ
  const handleHover = (faqIndex) => {
    setHoveredFaq(hoveredFaq === faqIndex ? null : faqIndex);
  };

  // FAQ content
  const faqItems = [
    {
      question: 'What Facilities Does Your Hotel Have?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quisquam ipsam unde error, rerum labore modi sit! Expedita, sit natus, itaque cupiditate adipisci cumque dicta dolorem architecto voluptate nisi eveniet.',
    },
    {
      question: 'What Services Are Included in the Price?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quisquam ipsam unde error, rerum labore modi sit! Expedita, sit natus, itaque cupiditate adipisci cumque dicta dolorem architecto voluptate nisi eveniet.',
    },
    {
      question: 'How Do I Make a Reservation?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quisquam ipsam unde error, rerum labore modi sit! Expedita, sit natus, itaque cupiditate adipisci cumque dicta dolorem architecto voluptate nisi eveniet.',
    },
    {
      question: 'Is Parking Available at the Hotel?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quisquam ipsam unde error, rerum labore modi sit! Expedita, sit natus, itaque cupiditate adipisci cumque dicta dolorem architecto voluptate nisi eveniet.',
    },
    {
      question: 'Are Pets Allowed in the Hotel?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quisquam ipsam unde error, rerum labore modi sit! Expedita, sit natus, itaque cupiditate adipisci cumque dicta dolorem architecto voluptate nisi eveniet.',
    },
    {
      question: 'Can I Cancel My Booking?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quisquam ipsam unde error, rerum labore modi sit! Expedita, sit natus, itaque cupiditate adipisci cumque dicta dolorem architecto voluptate nisi eveniet.',
    },
  ];

  return (
    <div>
      {/* SEO Header Section using React Helmet */}
      <Helmet>
        <title>FAQ's | FoodTrove</title>
        <meta name="description" content="Find answers to common questions about our hotel facilities, services, and pricing." />
        <meta name="keywords" content="FAQ, hotel services, hotel pricing, hotel facilities, frequently asked questions" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Header Section */}
      <header className="h-16 bg-[#F53E32] flex items-center justify-between px-[9vw] text-white">
        <h1 className="text-xl font-semibold">FAQ's</h1>
        <p className="text-sm">Home &gt; Faq's</p>
      </header>

      {/* FAQ Section */}
      <div className="flex flex-col sm:flex-row px-[2vw] sm:px-[4vw] gap-4 lg:gap-16 py-14 lg:px-[7vw]">
        {/* Image Section */}
        <img src={asset.about} alt="About Image" className="w-full sm:w-[50%] h-auto rounded-lg shadow-md" />

        {/* FAQ Content */}
        <div className="w-full sm:w-[50%]">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[40vw] border-2 px-4 py-3 rounded-md shadow-md mt-4 sm:mt-0"
            >
              <h1
                onMouseEnter={() => handleHover(index + 1)} // Open the answer on hover
                onMouseLeave={() => handleHover(null)} // Close the answer on hover out
                className="flex items-center justify-between py-2 mb-2 text-lg font-semibold cursor-pointer hover:text-[#F53E32] transition duration-200"
              >
                {item.question}
                <img
                  src={asset.down}
                  className="w-4 transition-transform transform"
                  style={{ transform: hoveredFaq === index + 1 ? 'rotate(180deg)' : 'rotate(0deg)' }} // Rotate arrow when hovered
                  alt="Toggle Arrow"
                />
              </h1>
              <p
                className={`${hoveredFaq === index + 1 ? 'block' : 'hidden'} text-sm text-gray-700 transition-all duration-300 ease-in-out`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
