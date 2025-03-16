import React, { useEffect, useRef } from "react";

const AppInstall = () => {
    const installPrompt = useRef(null);
    const installButton = useRef(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault();
            installPrompt.current = event;
            if (installButton.current) {
                installButton.current.removeAttribute("hidden");
            }
        };

        const handleInstallButtonClick = async () => {
            if (!installPrompt.current) {
                return;
            }
            const result = await installPrompt.current.prompt();
            console.log(`Install prompt was: ${result.outcome}`);
            disableInAppInstallPrompt();
        };

        const disableInAppInstallPrompt = () => {
            installPrompt.current = null;
            if (installButton.current) {
                installButton.current.setAttribute("hidden", "");
            }
        };

        const handleAppInstalled = () => {
            disableInAppInstallPrompt();
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        if (installButton.current) {
            installButton.current.addEventListener("click", handleInstallButtonClick);
        }
        window.addEventListener("appinstalled", handleAppInstalled);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
            if (installButton.current) {
                installButton.current.removeEventListener("click", handleInstallButtonClick);
            }
            window.removeEventListener("appinstalled", handleAppInstalled);
        };
    }, []);

    return (
        <button id="install" ref={installButton} hidden>
            Install App
        </button>
    );
};

export default AppInstall;