// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'M3104',
    noIndex: true,
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://m3104.nawinds.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'nawinds', // Usually your GitHub org/user name.
    projectName: 'm3104-links', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                /*docs: {
                    sidebarPath: './sidebars.js',

                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },

                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },*/
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

        ({
            // announcementBar: {
            //     id: 'support_us',
            //     content:
            //         'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
            //     backgroundColor: '#000000',
            //     textColor: '#091E42',
            //     isCloseable: false,
            // },
            colorMode: {
                defaultMode: 'dark',
                respectPrefersColorScheme: false,
            },
            navbar: {
                title: 'Полезные ссылки',
                items: [
                    {
                        label: 'Ведомости',
                        href: '/table-grades',
                    },
                    {
                        label: 'Правила оценивания',
                        href: '/point-distribution',
                    },
                    {
                        type: 'dropdown',
                        label: 'Архив',
                        position: 'left',
                        items: [
                            {
                                label: 'Семестр 1',
                                href: '/archive/semester/1',
                            }
                        ],
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Сайты ИТМО',
                        items: [
                            {
                                label: 'my.itmo',
                                href: 'https://my.itmo.ru',
                            },
                            {
                                label: 'ИСУ',
                                href: 'https://isu.ifmo.ru',
                            },
                            {
                                label: 'BARS',
                                href: 'https://bars.itmo.ru',
                            },
                        ],
                    },
                    {
                        title: 'Контакты',
                        items: [
                            {
                                html: "Email: <a href='mailto:m3104@nawinds.dev'>m3104@nawinds.dev</a>",
                            },
                            {
                                html: 'GitHub: <a href="https://github.com/nawinds/m3104-links">Исходный код</a>',
                            },
                        ],
                    },
                    {
                        title: 'Пожертвования',
                        items: [
                            {
                                label: 'Задонатить',
                                href: 'https://www.tbank.ru/cf/4tI8tyioxMb',
                            },
                        ],
                    },
                ],
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
    scripts: ['/ya_metrika.js', '/deadlines.js'],
    plugins: [
        [
            '@docusaurus/plugin-pwa',
            {
                debug: true,
                offlineModeActivationStrategies: [
                    'appInstalled',
                    'standalone',
                    'queryString',
                ],
                pwaHead: [
                    {
                        tagName: 'link',
                        rel: 'icon',
                        href: '/img/android-chrome-512x512.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'manifest',
                        href: '/manifest.json', // your PWA manifest
                    },
                    {
                        tagName: 'meta',
                        name: 'theme-color',
                        content: 'rgb(255, 255, 255)',
                    },
                ],
            },
        ],
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: 'G-31L3HQGM6Q',
                anonymizeIP: false,
            },
        ],
    ],
};

export default config;
