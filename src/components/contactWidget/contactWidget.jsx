import React, { useEffect, useState } from 'react';
import { BsPhone, BsShare } from 'react-icons/bs';
import { FiMessageCircle } from 'react-icons/fi';
import { IoMdContact } from 'react-icons/io'; // main toggle icon
import { numbers } from '../../Data';
import ShareButton from '../sharebutton/sharebutton';
import ChatbotButton from './chatBot';

const ContactWidget = () => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    setSelectedNumber(numbers[randomIndex]);
  }, []);

  const toggleIcons = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    selectedNumber && (
      <div className="fixed bottom-6 right-6 flex flex-col items-center z-50 gap-4">
        {/* Animated Expandable Icons */}
        {isOpen && (
          <>
            <a href={`https://wa.me/${selectedNumber.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-slow-open">
              <FiMessageCircle size={30} />
            </a>
            <a href={`tel:${selectedNumber}`}
              className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-slow-open">
              <BsPhone size={30} />
            </a>

            <div className="bg-purple-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-slow-open">
             <ShareButton/>
            </div>
          </>
        )}

        {/* Main Toggle Icon */}
        <button
          onClick={toggleIcons}
          className="bg-[rgb(33,33,33)] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:bg-[rgb(50,50,50)] transition-transform duration-300"
        >
          <IoMdContact style={{ color: 'royalblue' }} size={30} />
        </button>
        <ChatbotButton/>
      </div>
    )
  );
};

export default ContactWidget;
