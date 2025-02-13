import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';

const SwipeableMenu = ({ children }) => {
  const { mobileSidebar } = useThemeConfig();
  const { toggle, shown } = useNavbarMobileSidebar();

  const handlers = useSwipeable({
    onSwipedLeft: () => shown && toggle(), // Закрыть меню при свайпе влево
    onSwipedRight: () => !shown && toggle(), // Открыть меню при свайпе вправо
    trackMouse: true, // Для поддержки свайпов мышью
  });

  return (
    <div {...handlers}>
      {children}
    </div>
  );
};

export default SwipeableMenu;