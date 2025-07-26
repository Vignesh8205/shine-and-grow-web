import React, { useEffect, useState } from 'react';
import { MdShare } from 'react-icons/md';
import { numbers, socialmedialink } from '../../Data';

const ShareButton = () => {

   
  const [selectedNumber, setSelectedNumber] = useState('');
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    setSelectedNumber(numbers[randomIndex]);
  }, []);


const handleShare = async () => {
  const fullMessage = `
  📢 Check out our services! 
  
  🌐 Website: ${socialmedialink.websiteUrl}
  📱 Instagram: ${socialmedialink.instagram}
  📘 Facebook: ${socialmedialink.facebook}
  🐦 Twitter: ${socialmedialink.twiter}

  📇 Contact Details:
  📧 Email: ${socialmedialink.email}
  📞 Call us: ${selectedNumber}
  💬 WhatsApp:${selectedNumber}

  We're excited to have you visit! 🎉
  
  `;
  

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Visit Our Website!',
        text: fullMessage,
      });
   
    } catch (err) {
      console.error('Share failed:', err.message);
      alert('Sharing was cancelled or failed.');
    }
  } else {
    try {
      await navigator.clipboard.writeText(fullMessage);
      alert('Sharing not supported. Message copied to clipboard!');
    } catch (err) {
      console.error('Copy failed:', err.message);
      alert('Failed to copy the message.');
    }
  }
};



  return (
    <div className="relative group inline-block">
      <button
        onClick={handleShare}
        className="text-black border border-gray-300 p-1 rounded-md hover:bg-gray-100 transition duration-200"
      >
        <MdShare size={20} color='black' />
      </button>
      
    </div>
  );
};

export default ShareButton;
