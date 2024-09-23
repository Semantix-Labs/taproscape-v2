import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const MessengerChat = () => {
  return (
    <FacebookProvider appId={process.env.NEXT_PUBLIC_FB_APP_ID as string}>
      <CustomChat 
        pageId={process.env.NEXT_PUBLIC_FB_PAGE_ID as string}
        minimized={false}
      />
    </FacebookProvider>
  );
};

export default MessengerChat;
