import React, {useEffect} from 'react';
import '../css/snowflakes.css';

export default function SnowflakesBackground() {
    // Количество снежинок на ваш вкус
    const numberOfSnowflakes = 50;

    useEffect(() => {
        const container = document.getElementById('snowflake-container');

        // Генерируем заданное количество снежинок
        for (let i = 0; i < numberOfSnowflakes; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = '❄' //'•' //'❄'; // Можно заменить на любой символ или даже иконку

            // Случайная позиция по горизонтали (0% - 100%)
            snowflake.style.left = Math.random() * 100 + '%';

            snowflake.style.animationDelay = Math.random() * 10 + 's';

            // Случайная продолжительность падения
            const duration = 10 + Math.random() * 20; // от 10 до 30 секунд
            snowflake.style.animationDuration = `${duration}s`;


            // Случайный размер шрифта снежинки
            const size = 5 + Math.random() * 10; // от 10px до 20px
            snowflake.style.fontSize = size + 'px';

            container.appendChild(snowflake);
        }

        // Удалим снежинки при размонтировании компонента, чтобы не плодить их заново
        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return (
        <div id="snowflake-container"/>
    );
}
