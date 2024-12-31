import React, { useEffect, useState } from 'react';

const DEADLINES_URL = "/api-deadlines";

const fetchDeadlines = async () => {
    const response = await fetch(DEADLINES_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch deadlines");
    }
    return response.json();
};

const compareDeadlines = (a, b) => {
    const aTime = Date.parse(a.time);
    const bTime = Date.parse(b.time);
    return aTime - bTime;
};

const formatDeadline = (deadline) => {
    const unixTimeDeadline = Date.parse(deadline.time);
    const unixTimeNow = Date.now();

    if (unixTimeDeadline <= unixTimeNow) return null;

    const delta = unixTimeDeadline - unixTimeNow;
    const deltaSeconds = delta / 1000;
    const deltaMinutes = deltaSeconds / 60;
    const deltaHours = deltaMinutes / 60;
    const deltaDays = deltaHours / 24;

    const deltaHoursSDays = deltaHours - 24 * Math.floor(deltaDays);
    const deltaMinutesSDays = deltaMinutes - 60 * Math.floor(deltaHours);

    let text = `<b>${deadline.name}</b> &#8212; `;

    if (deltaDays < 1) {
        text += `${Math.floor(deltaHoursSDays)}ч ${Math.floor(deltaMinutesSDays)}м`;
    } else if (deltaDays < 3) {
        text += `${Math.floor(deltaDays)} ${Math.floor(deltaDays) === 1 ? "день" : "дня"} ${Math.floor(deltaHoursSDays)}ч ${Math.floor(deltaMinutesSDays)}м`;
    } else {
        text += `${Math.floor(deltaDays)} ${Math.floor(deltaDays) === 3 || Math.floor(deltaDays) === 4 ? "дня" : "дней"}`;
    }

    const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', weekday: 'short' };
    text += ` (${new Date(unixTimeDeadline).toLocaleDateString('ru-RU', options)})`;

    return text;
};

const Deadlines = () => {
    const [deadlines, setDeadlines] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadDeadlines = async () => {
            try {
                const data = await fetchDeadlines();
                const sortedDeadlines = data.deadlines.sort(compareDeadlines);
                setDeadlines(sortedDeadlines);
            } catch (err) {
                setError(err.message);
            }
        };

        loadDeadlines();
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div id="deadlinesBlock" style={{ marginBottom: '20px' }}>
            <h2>Подождите, а что это у вас на носу?</h2>
            {deadlines.length === 0 ? (
                <p>Нет предстоящих дедлайнов.</p>
            ) : (
                <p dangerouslySetInnerHTML={{ __html: deadlines.map(formatDeadline).filter(Boolean).join('<br>') }} />
            )}
            <a href="/deadlines-editing-instructions">Добавить дедлайн</a>
        </div>
    );
};

export default Deadlines;
