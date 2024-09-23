import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const MessengerChat: React.FC = () => {
  return (
    <div className="custom-facebook-chat">
      <FacebookProvider appId={process.env.NEXT_PUBLIC_FB_APP_ID as string}>
        <CustomChat 
          pageId={process.env.NEXT_PUBLIC_FB_PAGE_ID as string}
          minimized={false}
          themeColor="#0084ff"
          loggedInGreeting="Hello! How can we assist you?"
          loggedOutGreeting="Please log in to chat with us."
        />
      </FacebookProvider>
    </div>
  );
};

export default MessengerChat;
