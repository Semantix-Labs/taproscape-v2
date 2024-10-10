import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppChat() {
  const phoneNumber = '94777181236'; // International format, without + or spaces
  const message = 'Hello, I would like to know more!'; // Default message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform duration-200"
      >
        <FaWhatsapp size={40} color="#25D366" className='hover:scale-120 animate-bounce transition-transform duration-200 coursor-pointer' />
      </a>
    </div>
  );
}
