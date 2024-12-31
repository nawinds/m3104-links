import React from 'react';
import Link from '@docusaurus/Link';

export default function BackButton() {
    return (
        <Link
            to="/"
            style={{
                padding: '5px 12px',
                fontSize: '15px',
                border: '1px solid var(--ifm-color-primary)',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block',
                textAlign: 'center',
                cursor: 'pointer',
                marginBottom: '20px',
                transition: 'background-color 0.3s ease, color 0.3s ease'
            }}
            className="back-to-home-button"
        >
            ← На главную
        </Link>
    );
}
