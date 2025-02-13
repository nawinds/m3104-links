import React from 'react';
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

        // Обрабатываем свайпы глобально, чтобы работало поверх навбара
        const handlers = useSwipeable({
          onSwipedLeft: (eventData) => {
            eventData.event.stopPropagation();
            if (shown && Math.abs(eventData.deltaX) > SWIPE_THRESHOLD) {
              toggle(); // Закрываем навбар
            }
          },
          onSwipedRight: (eventData) => {
            eventData.event.stopPropagation();
            if (!shown && Math.abs(eventData.deltaX) > SWIPE_THRESHOLD) {
              toggle(); // Открываем навбар
            }
          },
          trackTouch: true, // Включаем обработку свайпов на мобильных устройствах
          trackMouse: false, // Отключаем поддержку свайпов мышью
          preventScrollOnSwipe: true, // Блокируем скролл во время свайпа
        });

        return (
          <div {...handlers} style={{ width: '100%', height: '100vh' }}>
            {children}
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default SwipeableMenu;
