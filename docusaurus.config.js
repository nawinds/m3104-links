// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'M3104',
    tagline: 'Полезные ссылки группы M3104 ИТМО',
    favicon: 'img/favicon.ico',
    trailingSlash: false,

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

    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'robots',
                content: 'nofollow, follow',
            },
        },
    ],


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
                        label: 'Лекции',
                        to: 'https://t.me/+_GAv-z_aZplhYmEy',
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
                    // {
                    //     type: 'html',
                    //     position: 'right',
                    //     value: '<button class="clean-btn" style="width: 32px; height: 32px;">' +
                    //         '<img src="/img/help.svg" alt="Help" ' +
                    //         'style="cursor: pointer;" title="Help" ' +
                    //         'data-help-popup="" /></button>',
                    // },
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
                                label: 'Бронирования',
                                href: 'https://isu.ifmo.ru/pls/apex/f?p=2431:4',
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
                                label: 'm3104@nawinds.dev',
                                href: 'mailto:m3104@nawinds.dev',
                            },
                            {
                                label: 'Исходный код',
                                href: 'https://github.com/nawinds/m3104-links',
                            },
                            {
                                label: 'Внесли вклад',
                                href: 'https://github.com/nawinds/m3104-links/graphs/contributors',
                            },
                        ],
                    },
                    {
                        title: 'О сайте',
                        items: [
                            {
                                label: 'Отзывы',
                                href: 'https://yandex.ru/maps/org/230826642884/reviews',
                            },
                            {
                                label: 'Задонатить',
                                href: 'https://www.tbank.ru/cf/3AbJDkT6VIA',
                            },
                            {
                                html: '<a href="#" data-help-popup="" onclick="ym(98560217, \'reachGoal\', \'footer_hotkeys_reference\'); return true;">Горячие клавиши</a>',
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
    scripts: ['/ya_metrika.js'],
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
                        content: '#3d1a55',
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
    customFields: {
        licenseKey: process.env.LICENSE_KEY,
        ymCounter: '98560217',
    },
};

export default config;
