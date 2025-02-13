import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import BrowserOnly from '@docusaurus/BrowserOnly';

const SWIPE_THRESHOLD = 75; // Минимальная длина свайпа для срабатывания

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
                onSwipedLeft: ({ deltaX }) => {
                  if (shown && Math.abs(deltaX) > SWIPE_THRESHOLD) {
                    toggle();
                  }
                },
                onSwipedRight: ({ deltaX }) => {
                  if (!shown && Math.abs(deltaX) > SWIPE_THRESHOLD) {
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
