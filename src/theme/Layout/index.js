import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import SnowflakesBackground from '../../components/SnowflakesBackground';

function newYearTime() {

    const date = new Date();
    const year = date.getFullYear();

    if (date.getMonth() === 11) {
        const startDate = new Date(year, 11, 10); // December 10th
        return date >= startDate;

    } else if (date.getMonth() === 0) {
        const endDate = new Date(year, 0, 23); // January 23nd
        return date <= endDate;
    }

    return false;
}

function foolsDayTime() {

    const date = new Date();
    const year = date.getFullYear();

    if (date.getMonth() === 3) {
        const startDate = new Date(year, 3, 1); // April 1th
        const endDate = new Date(year, 3, 2); // April 2th
        return date >= startDate && date < endDate;
    }

    return false;
}

export default function Layout(props) {
    if (newYearTime()) {
        return (
            <>
                <SnowflakesBackground/>
                <OriginalLayout {...props} />
            </>
        );
    } else if (foolsDayTime()) {
        return (
            <>
                <SnowflakesBackground characters="🤡" minSize={12}/>
                <OriginalLayout {...props} />
            </>
        );
    } else {
        return (
            <>
                <OriginalLayout {...props} />
            </>
        );
    }
}
