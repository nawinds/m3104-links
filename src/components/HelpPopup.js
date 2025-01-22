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
          <li><b><code>M</code>, <code>L</code>:</b> Матан и линал</li>
          <li><b><code>D</code>:</b> Дискретная математика</li>
          <li><b><code>A</code>:</b> Алгоритмы</li>
          <li><b><code>O</code>:</b> ОП</li>
          <li><b><code>I</code>:</b> ИСРПО</li>
          <hr/>
          <li><b><code>V</code>:</b> Ведомости</li>
          <li><b><code>P</code>:</b> Правила оценивания</li>
          <li><b><code>H</code>:</b> Домашняя страница</li>
          <li><b><code>B</code>:</b> Назад (браузерное действие)</li>
        </ul>
      </div>
    </div>
  );
};

export default HelpPopup;
