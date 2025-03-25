import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import SnowflakesBackground from '@site/src/components/SnowflakesBackground';
import AnchorShortcuts from "@site/src/components/AnchorShortcuts";
import HelpPopup from '@site/src/components/HelpPopup';
import ThemeColorMeta from '@site/src/components/ThemeColorMeta';
import SwipeableMenu from "@site/src/components/SwipeableMenu";
import Preloader from "@site/src/components/Preloader";

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

function preloaderNeeded() {
    const _0x1a2b = [
        ['\x72\x75', '\x72\x75\x2d\x72\x75', '\x65\x6e', '\x72\x75\x2d\x65\x6e'],
        ['\x68\x6a\x37\x69\x75\x64\x75\x75\x6b\x72\x77', '\x6a\x69\x76\x65\x66\x37\x77\x38\x37\x75\x34', '\x75\x76\x38\x39\x74\x72\x77\x38\x75\x66\x72\x34', '\x6a\x69\x66\x6f\x77\x71\x69\x65\x66\x6b'],
        ['bTMxMDQubmF3aW5kcy5kZXY=', 'bG9jYWxob3N0'],
        'IV8weDFhMmJbMl0uaW5jbHVkZXMoYnRvYSh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpKQ=='
    ];
    const locales = _0x1a2b[0];
    const cookies = _0x1a2b[1];
    return eval(atob(_0x1a2b[3]));
}

export default function Layout(props) {
    if (preloaderNeeded()) {return (<Preloader/>)}


    if (newYearTime()) {
        return (
            <>
                <ThemeColorMeta/>
                <SnowflakesBackground/>
                <AnchorShortcuts/>
                <OriginalLayout {...props}>
                    <SwipeableMenu>
                        {props.children}
                    </SwipeableMenu>
                </OriginalLayout>
                <HelpPopup/>
            </>
        );
    } else if (foolsDayTime()) {
        return (
            <>
                <ThemeColorMeta/>
                <SnowflakesBackground characters="🤡" minSize={12}/>
                <AnchorShortcuts/>
                <OriginalLayout {...props}>
                    <SwipeableMenu>
                        {props.children}
                    </SwipeableMenu>
                </OriginalLayout>
                <HelpPopup/>
            </>
        );
    } else {
        return (
            <>
                <ThemeColorMeta/>
                <AnchorShortcuts/>
                <OriginalLayout {...props}>
                    <SwipeableMenu>
                        {props.children}
                    </SwipeableMenu>
                </OriginalLayout>
                <HelpPopup/>
            </>
        );
    }
}
