import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';

const SWIPE_THRESHOLD = 50; // Минимальная длина свайпа для срабатывания

const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

const SwipeableMenu = ({ children }) => {
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
};

export default SwipeableMenu;
