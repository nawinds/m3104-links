import React, { useEffect, useRef, useState } from "react";
import "@site/src/css/popup.css"; // Styles for the popup

const AppInstallPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const installPrompt = useRef(null);

    // Check if the device is mobile
    useEffect(() => {
        const isSmallScreen = window.innerWidth <= 768;
        setIsMobile(isSmallScreen);
    }, []);

    // Handle the beforeinstallprompt event
    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault();
            installPrompt.current = event;
            if (isMobile) {
                setIsVisible(true); // Show the popup on mobile devices
            }
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, [isMobile]);

    // Handle the install button click
    const handleInstallClick = async () => {
        if (!installPrompt.current) return;
        const result = await installPrompt.current.prompt();
        console.log(`Install prompt was: ${result.outcome}`);
        setIsVisible(false); // Hide the popup after the prompt
    };

    if (!isVisible) return null; // Don't render the popup if it's not visible

    return (
        <div className="popup-container2">
            <div className="popup-content2">
                <p>Установите сайт как веб-приложение на телефон для быстрого доступа к ссылкам!</p>
                <button className="install-button2" onClick={handleInstallClick}>
                    Установить
                </button>
            </div>
        </div>
    );
};

export default AppInstallPopup;