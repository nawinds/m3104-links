import React from 'react';
import Icon from '@site/static/img/top-right-arrow-icon.svg';


export default function OpenIcon({marginRight = 0}) {
    return (
        <Icon style={{
            verticalAlign: 'middle',
            width: '17px',
            height: '17px',
            marginRight: marginRight,
            fill: 'var(--ifm-font-color-base)'
        }}/>
    );
}
