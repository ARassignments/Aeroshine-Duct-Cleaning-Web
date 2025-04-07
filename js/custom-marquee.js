$(function(){
    $('.de-marquee-list').marquee({
        direction: 'left',
        duration: 50000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });
// Designed by SMI SOFTS (https://www.smisofts.com/)
    $('.wm-carousel').marquee({
        direction: 'left',
        duration: 20000,
        gap: 100,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: false
    });
});