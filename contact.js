
let isbar = true;
const bars = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const dashboard = document.querySelector('.dashboard');

if (bars && sidebar && dashboard) {

    bars.addEventListener('click', function () {

        sidebar.classList.toggle('hide');
        sidebar.classList.toggle('slide');
        if (window.innerWidth > 760) {
            if (isbar) {
                dashboard.style.width = '84%';
                isbar = false;
            } else {
                dashboard.style.width = '100%';
                isbar = true;
            }
        } else {
            if (isbar) {
                dashboard.style.width = '40%';
                isbar = false;
            } else {
                dashboard.style.width = '100%';
                isbar = true;
            }
        }
    });
}














if (document.querySelector('.F-ahmed') && document.querySelector('.F-salah') && document.querySelector('.F-khaled') && document.querySelector('.F-mohamed') && document.querySelector('.Y-salah') && document.querySelector('.Y-ahmed')) {
    document.querySelector('.F-ahmed').addEventListener('click', () => window.open("https://www.facebook.com/bashmohandesAE?locale=ar_AR", "_blank"));
    document.querySelector('.F-salah').addEventListener('click', function () {
        window.open("https://www.facebook.com/salah.bassthalk?locale=ar_AR", "_blank")
    })
    document.querySelector('.F-khaled').addEventListener('click', function () {
        window.open("https://www.facebook.com/profile.php?id=100064076050923&locale=ar_AR", "_blank")
    })
    document.querySelector('.F-mohamed').addEventListener('click', function () {
        window.open("https://www.facebook.com/Mr.AbdELMaaboud?locale=ar_AR", "_blank")
    })
    document.querySelector('.Y-salah').addEventListener('click', function () {
        window.open("https://www.youtube.com/@mohamedsalah.bassthalk/videos", "_blank")
    })
    document.querySelector('.Y-ahmed').addEventListener('click', function () {
        window.open("https://www.youtube.com/@BashmohandesAE", "_blank")
    })
    document.querySelector('.Y-khaled').addEventListener('click', function () {
        window.open("https://www.youtube.com/@khaledsakr8181", "_blank")
    })
    document.querySelector('.Y-mohamed').addEventListener('click', function () {
        window.open("https://www.youtube.com/@mr.abdelmaaboud", "_blank")
    })
    document.querySelector('.T-ahmed').addEventListener('click', function () {
        window.open("https://web.telegram.org/k/#@ahmedessamdx", "_blank")
    })
    document.querySelector('.T-ayman').addEventListener('click', function () {
        window.open("https://web.telegram.org/k/#6588738336", "_blank")
    })
    document.querySelector('.W-ayman').addEventListener('click', function () {
        window.open("https://web.whatsapp.com/", "_blank")
    })
    document.querySelector('.W-salah').addEventListener('click', function () {
        window.open("https://web.whatsapp.com/", "_blank")
    })
    document.querySelector('.I-salah').addEventListener('click', function () {
        window.open("https://www.instagram.com/mosalah.bassthalk/", "_blank")
    })
    document.querySelector('.I-mohamed').addEventListener('click', function () {
        window.open("https://www.instagram.com/mr.abdelmaaboud/", "_blank")
    })
    document.querySelector('.I-khaled').addEventListener('click', function () {
        window.open("https://www.instagram.com/mrkhaledsakr", "_blank")
    })
};



















