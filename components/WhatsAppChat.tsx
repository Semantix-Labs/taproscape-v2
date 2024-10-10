import { useState } from 'react';
import Link from 'next/link';
import { IoLogoWhatsapp } from "react-icons/io";
import { X, Send } from 'lucide-react';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  
  const phoneNumber = '94777181236';
  const defaultMessage = 'Hello, I would like to know more!';

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const message = userMessage.trim() || defaultMessage;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setUserMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-2xl w-80  overflow-hidden mb-4 animate-fade-in">
          {/* Chat Header */}
          <div className="bg-[#25D366] p-4 text-white relative">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/custome.jpg" 
                  alt="Profile" 
                  className=" object-cover"
                />
              </div>
              <div className='grid'>
                <span className="font-semibold text-2xl">Chat with us</span>
                <span className="text-sm opacity-90">Typically replies instantly</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:opacity-80"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="bg-[#E5DDD5] p-4 h-80">
            <div className="bg-white rounded-lg p-3 inline-block max-w-[80%] shadow-sm">
              <p>Hi there 👋</p>
              <p>How can we help you today?</p>
            </div>
          </div>

          {/* Message Input */}
          <form onSubmit={handleSubmit} className="p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-[#25D366]"
              />
              <button 
                type="submit"
                className="bg-[#25D366] text-white rounded-full p-2 hover:bg-[#1ea855] transition-colors duration-200"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="hover:scale-110 transition-transform duration-200"
        >
          <IoLogoWhatsapp 
            size={60} 
            color="#25D366" 
            className="hover:scale-120 animate-bounce transition-transform duration-200 cursor-pointer" 
          />
        </button>
      )}
    </div>
  );
}