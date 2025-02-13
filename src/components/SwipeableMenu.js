import React, { useEffect, useRef } from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import BrowserOnly from '@docusaurus/BrowserOnly';

const SWIPE_THRESHOLD = 70; // Минимальная длина свайпа для срабатывания

const SwipeableMenu = ({ children }) => {
  return (
    <BrowserOnly fallback={<>{children}</>}>
      {() => {
        const { toggle, shown } = useNavbarMobileSidebar();
        const swipeRef = useRef(null);

        useEffect(() => {
          const handleTouchStart = (event) => {
            swipeRef.current = event.touches[0].clientX;
          };

          const handleTouchMove = (event) => {
            if (!swipeRef.current) return;

            // Игнорируем свайпы внутри навбара
            if (event.target.closest('.navbar')) return;

            const deltaX = event.touches[0].clientX - swipeRef.current;

            if (shown && deltaX < -SWIPE_THRESHOLD) {
              toggle(); // Закрываем навбар свайпом влево
            } else if (!shown && deltaX > SWIPE_THRESHOLD) {
              toggle(); // Открываем навбар свайпом вправо
            }

            swipeRef.current = null; // Сбрасываем значение
          };

          window.addEventListener('touchstart', handleTouchStart, { passive: false });
          window.addEventListener('touchmove', handleTouchMove, { passive: false });

          return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
          };
        }, [shown]);

        return <div>{children}</div>;
      }}
    </BrowserOnly>
  );
};

export default SwipeableMenu;
