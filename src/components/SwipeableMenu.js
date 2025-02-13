import React, { useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import BrowserOnly from '@docusaurus/BrowserOnly';

const SWIPE_THRESHOLD = 70; // Минимальная длина свайпа для срабатывания

const SwipeableMenu = ({ children }) => {
  return (
    <BrowserOnly fallback={<>{children}</>}>
      {() => {
        const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);
        const { toggle, shown } = useNavbarMobileSidebar();
        const swipeRef = useRef(null);

        const handleTouchStart = (event) => {
          swipeRef.current = event.touches[0].clientX;
        };

        const handleTouchMove = (event) => {
          if (!swipeRef.current) return;

          const deltaX = event.touches[0].clientX - swipeRef.current;

          if (shown && deltaX < -SWIPE_THRESHOLD) {
            toggle(); // Закрываем навбар свайпом влево
          } else if (!shown && deltaX > SWIPE_THRESHOLD) {
            toggle(); // Открываем навбар свайпом вправо
          }

          swipeRef.current = null; // Сбрасываем значение
        };

        useEffect(() => {
          const body = document.body;

          if (isMobile()) {
            body.addEventListener('touchstart', handleTouchStart);
            body.addEventListener('touchmove', handleTouchMove);
          }

          return () => {
            body.removeEventListener('touchstart', handleTouchStart);
            body.removeEventListener('touchmove', handleTouchMove);
          };
        }, [shown]);

        return <div>{children}</div>;
      }}
    </BrowserOnly>
  );
};

export default SwipeableMenu;