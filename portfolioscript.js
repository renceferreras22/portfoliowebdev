/* ==========================================================
   F1 PORTFOLIO SCRIPT
   1. Scroll progress bar ("rev bar")
   2. Splash intro video
   ========================================================== */

(function () {

    /* ---------- 1. Scroll progress bar ---------- */
    var bar = document.getElementById('rev');

    if (bar) {
        window.addEventListener('scroll', function () {
            var page = document.documentElement;
            var scrollable = page.scrollHeight - page.clientHeight;
            var percent = (page.scrollTop / scrollable) * 100;
            bar.style.width = percent + '%';
        });
    }


    /* ---------- 2. Splash intro video ---------- */
    var splash = document.getElementById('splash');

    // Activity pages have no splash, so stop here
    if (!splash) {
        return;
    }

    var video = splash.querySelector('video');
    var closed = false;

    // Fade out the splash, then remove it
    function closeSplash() {
        if (closed) {
            return;
        }
        closed = true;

        splash.classList.add('out');
        document.body.style.overflow = ''; // allow scrolling again

        setTimeout(function () {
            splash.remove();
        }, 900);
    }

    // Lock scrolling while the video plays
    document.body.style.overflow = 'hidden';

    // Close the splash when: skip is clicked, video ends, or video fails
    document.getElementById('skip').addEventListener('click', closeSplash);
    video.addEventListener('ended', closeSplash);
    video.addEventListener('error', closeSplash);

    // Try to start the video (the browser may block it)
    var attempt = video.play();
    if (attempt && attempt.catch) {
        attempt.catch(function () {});
    }

    // Safety: if the video never starts after 6 seconds, open the site
    setTimeout(function () {
        if (video.paused && video.currentTime === 0) {
            closeSplash();
        }
    }, 6000);

})();
