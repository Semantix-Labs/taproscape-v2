import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

const MessengerChat: React.FC = () => {
  const [debug, setDebug] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return; // Skip on server-side

    if (!process.env.NEXT_PUBLIC_FB_APP_ID || !process.env.NEXT_PUBLIC_FB_PAGE_ID) {
      setDebug('Environment variables are not set correctly');
      return;
    }

    const loadFacebookSDK = () => {
      if (document.getElementById('facebook-jssdk')) {
        return;
      }
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    const initializeFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: "v11.0",
          appId: process.env.NEXT_PUBLIC_FB_APP_ID,
        });
        setDebug('Facebook SDK initialized');
      };
    };

    try {
      loadFacebookSDK();
      initializeFacebookSDK();
    } catch (error) {
      console.error('Error initializing Facebook SDK:', error);
      
    }

    return () => {
      // Cleanup function
      const fbjssdk = document.getElementById('facebook-jssdk');
      const fbroot = document.getElementById('fb-root');
      if (fbjssdk) {
        fbjssdk.remove();
      }
      if (fbroot) {
        fbroot.remove();
      }
    };
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id={process.env.NEXT_PUBLIC_FB_PAGE_ID}
      ></div>
      {debug && <div style={{ position: 'fixed', bottom: 0, right: 0, background: 'white', padding: '10px' }}>{debug}</div>}
    </>
  );
};

export default MessengerChat;