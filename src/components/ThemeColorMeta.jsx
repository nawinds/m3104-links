import React, {useEffect} from 'react';

const ThemeColorMeta = () => {
    useEffect(() => {
        const updateThemeColor = () => {
            const themeColorMeta = document.querySelector('meta[name="theme-color"]');
            if (themeColorMeta) {
                const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
                themeColorMeta.setAttribute('content', isDarkTheme ? '#3d1a55' : '#ffffff');
            }
        };

        // Вызываем функцию при загрузке
        updateThemeColor();

        // Наблюдаем за изменениями темы
        const observer = new MutationObserver(updateThemeColor);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme'],
        });

        // Очистка при размонтировании
        return () => observer.disconnect();
    }, []);

    return null; // Компонент не рендерит ничего в DOM
};

export default ThemeColorMeta;