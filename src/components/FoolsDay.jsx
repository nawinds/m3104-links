import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import BrowserOnly from '@docusaurus/BrowserOnly';

const ConditionalNewTab = ({ url, cookieName = 'visitedTab', probability = 0.25 }) => {
  const location = useLocation();

  // Only run this in the browser
  return (
    <BrowserOnly>
      {() => {
        useEffect(() => {
          const checkAndOpenTab = () => {
            // Check if cookie exists
            const cookies = document.cookie.split(';').map(cookie => cookie.trim());
            const visitedCookie = cookies.find(cookie => cookie.startsWith(`${cookieName}=`));

            // If cookie doesn't exist (never opened before)
            if (!visitedCookie) {
              // Set cookie that expires in 30 days
              const expirationDate = new Date();
              expirationDate.setDate(expirationDate.getDate() + 30);
              document.cookie = `${cookieName}=true; expires=${expirationDate.toUTCString()}; path=/`;

              // Open new tab
              window.location.href = url;
              return;
            }

            // If cookie exists (was opened before), open with probability
            if (Math.random() < probability) {
              window.location.href = url;
            }
          };

          // Only run this once when component mounts
          checkAndOpenTab();
        }, []); // Empty dependency array ensures this runs only once

        // This component doesn't render anything visible
        return null;
      }}
    </BrowserOnly>
  );
};

export default ConditionalNewTab;