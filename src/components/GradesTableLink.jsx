import React, { useEffect } from "react";
import OpenIcon from '@site/src/components/OpenIcon';

const GradesTableLink = ({ title, url, shortcutKeys }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            const pressedKey = event.key.toLowerCase();

            if (shortcutKeys.includes(pressedKey)) {
                window.open(url, "_blank");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [shortcutKeys, url]);

    return (
        <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <OpenIcon marginRight={5} />
                {title}
            </a>
        </h2>
    );
};

export default GradesTableLink;