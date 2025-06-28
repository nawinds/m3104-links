(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
            return;
        }
    }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(98560217, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});

// Varioqub experiments
(function(e, x, pe, r, i, me, nt){
e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],me.addEventListener('error',function(){function cb(t){t=t[t.length-1],'function'==typeof t&&t({flags:{}})};Array.isArray(e[i].a)&&e[i].a.forEach(cb);e[i]=function(){cb(arguments)}}),nt.parentNode.insertBefore(me,nt)})
(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
ymab('metrika.98560217', 'init'/*, {clientFeatures}, {callback}*/);

