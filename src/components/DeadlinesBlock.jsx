import React, { useEffect, useState } from 'react';

const DEADLINES_URL = "/DEADLINES.json";

const fetchDeadlines = async () => {
    const response = await fetch(DEADLINES_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch deadlines");
    }
    return response.json();
};

const compareDeadlines = (a, b) => {
    return Date.parse(a.time) - Date.parse(b.time);
};

const formatUnixTimeIntoGCalTime = (unixTimeDeadline) => {
    const date = new Date(unixTimeDeadline);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const timeZoneOffset = -date.getTimezoneOffset();
    const sign = timeZoneOffset >= 0 ? '+' : '-';
    const offsetHours = String(Math.floor(Math.abs(timeZoneOffset) / 60)).padStart(2, '0');
    const offsetMinutes = String(Math.abs(timeZoneOffset) % 60).padStart(2, '0');
    return `${year}${month}${day}T${hours}${minutes}${seconds}${sign}${offsetHours}${offsetMinutes}`;
};

const formatDeadline = (deadline) => {
    const unixTimeDeadline = Date.parse(deadline.time);
    const unixTimeNow = Date.now();
    if (unixTimeDeadline <= unixTimeNow) return null;

    const delta = unixTimeDeadline - unixTimeNow;
    const deltaMinutes = delta / 60000;
    const deltaHours = deltaMinutes / 60;
    const deltaDays = deltaHours / 24;

    const deltaHoursSDays = deltaHours - 24 * Math.floor(deltaDays);
    const deltaMinutesSDays = deltaMinutes - 60 * Math.floor(deltaHours);

    let deadlineName = deadline.name.replace("[Тест]", "📚").replace("[тест]", "📚");
    const formattedTime = formatUnixTimeIntoGCalTime(unixTimeDeadline);
    const description = "Дедлайн добавлен с сайта m3104.nawinds.dev";
    const link = deadline.url;
    const gcalLink = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(deadlineName)}&dates=${formattedTime}/${formattedTime}&details=${encodeURIComponent(description)}&color=6`;

    let text = "";
    if (link) {
        text += `<b style="padding-left: 5px; border-left: 2px solid rgba(157,128,218,0.5); ackground: rgba(157,128,218,0.3);"><a href=\"${link}\" target=\"_blank\" style=\"text-decoration: none; color: inherit;\" onmouseover=\"this.style.opacity='0.8'\" onmouseout=\"this.style.opacity='1'\">${deadlineName}</a></b>`;
    } else {
        text += `<b style="padding-left: 8px;">${deadlineName}</b>`;
    }

    text += ` &#8212; <a href="${gcalLink}" target="_blank" style="text-decoration: none; color: inherit;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">`;

    if (deltaDays < 1) {
        text += `${Math.floor(deltaHoursSDays)}ч ${Math.floor(deltaMinutesSDays)}м`;
    } else if (deltaDays < 3) {
        text += `${Math.floor(deltaDays)} ${Math.floor(deltaDays) === 1 ? "день" : "дня"} ${Math.floor(deltaHoursSDays)}ч ${Math.floor(deltaMinutesSDays)}м`;
    } else {
        text += `${Math.floor(deltaDays)} ${Math.floor(deltaDays) === 3 || Math.floor(deltaDays) === 4 ? "дня" : "дней"}`;
    }
    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', weekday: 'short' };
    text += ` (${new Date(unixTimeDeadline).toLocaleDateString('ru-RU', options)}) </a>`;
    return text;
};

const Deadlines = () => {
    const [deadlines, setDeadlines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadDeadlines = async () => {
            try {
                const data = await fetchDeadlines();
                const sortedDeadlines = data.deadlines.sort(compareDeadlines);
                setDeadlines(sortedDeadlines);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const updateInterval = () => {
            const now = new Date();
            const nextMinute = new Date(now);
            nextMinute.setSeconds(0, 0);
            nextMinute.setMinutes(now.getMinutes() + 1);
            const delay = nextMinute - now;
            setTimeout(() => {
                loadDeadlines();
                setInterval(loadDeadlines, 60000); // Every 60 seconds
            }, delay);
        };

        loadDeadlines();
        updateInterval();
    }, []);

    if (loading) {
        return <p>Загрузка дедлайнов...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div id="deadlinesBlock" style={{ marginBottom: '20px' }}>
            <h2>Дедлайны</h2>
            {deadlines.length === 0 ? (
                <p>Нет предстоящих дедлайнов.</p>
            ) : (
                <p dangerouslySetInnerHTML={{ __html: deadlines.map(formatDeadline).filter(Boolean).join('<br>') }} style={{ lineHeight: "1.8em" }} />
            )}
            <a href="/deadlines-editing-instructions">Добавить дедлайн</a>
        </div>
    );
};

export default Deadlines;
