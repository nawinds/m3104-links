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
        const { mobileSidebar } = useThemeConfig();
        const { toggle, shown } = useNavbarMobileSidebar();

        const handlers = useSwipeable(
          isMobile()
            ? {
                onSwipedLeft: (eventData) => {
                  eventData.event.stopPropagation();
                  if (shown && Math.abs(eventData.deltaX) > SWIPE_THRESHOLD) {
                    toggle();
                  }
                },
                onSwipedRight: (eventData) => {
                  eventData.event.stopPropagation();
                  if (!shown && Math.abs(eventData.deltaX) > SWIPE_THRESHOLD) {
                    toggle();
                  }
                },
                trackMouse: false, // Отключаем поддержку свайпов мышью
                preventScrollOnSwipe: true, // Предотвращает скролл при свайпе
              }
            : {}
        );

        return <div {...handlers}>{children}</div>;
      }}
    </BrowserOnly>
  );
};

export default SwipeableMenu;
