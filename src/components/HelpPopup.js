import React, { useState, useEffect } from 'react';
import './HelpPopup.css';

const HelpPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (event) => {
    event.preventDefault();
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    // Event listener for links with the `data-help-popup` attribute
    const handleLinkClick = (event) => {
      const target = event.target;
      if (target.matches('[data-help-popup]')) {
        openPopup(event);
      }
    };

    document.addEventListener('click', handleLinkClick);

    // Cleanup event listener
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  if (!isPopupOpen) return null;

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-icon" onClick={closePopup} aria-label="Close">&times;</button>
        <h3>Горячие клавиши</h3>
        <ul>
          <li><b><code>M</code>, <code>М (рус)</code>:</b> Матан</li>
          <li><b><code>S</code>, <code>С (рус)</code>:</b> Спецразделы</li>
          <li><b><code>D</code>, <code>Д (рус)</code>:</b> Дискретная математика</li>
          <li><b><code>A</code>, <code>А (рус)</code>:</b> Алгоритмы</li>
          <li><b><code>O</code>, <code>О (рус)</code>:</b> ОП</li>
          <li><b><code>E</code>, <code>Э (рус)</code>:</b> Архитектура ЭВМ</li>
          <hr/>
          <li><b><code>V</code>:</b> Ведомости</li>
          <li><b><code>P</code>, <code>П (рус)</code>:</b> Правила оценивания</li>
          <li><b><code>H</code>, <code>Г (рус)</code>:</b> Домашняя страница</li>
          <li><b><code>B</code>, <code>Н (рус)</code>:</b> Назад (браузерное действие)</li>
        </ul>
      </div>
    </div>
  );
};

export default HelpPopup;
