
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




window.addEventListener('scroll', function () {
    const el1 = document.getElementById('smart_time');
    const el2 = document.getElementById('T-channels');
    const el3 = document.getElementById('element3');
    const el4 = document.getElementById('element4');
    const el5 = document.getElementById('element5');
    const el6 = document.getElementById('homework-input');
    const el7 = document.getElementById('num');
    const el8 = document.getElementById('element8');
    const el9 = document.getElementById('progress');
    const el10 = document.getElementById('element10');
    const el11 = document.getElementById('element11');
    const el12 = document.getElementById('element12');
    const el13 = document.getElementById('element13');
    const el14 = document.getElementById('element14');
    const el15 = document.getElementById('element15');
    const el16 = document.getElementById('total');
    const el17 = document.getElementById('comp');
    const el18 = document.getElementById('rem');
    const el19 = document.getElementById('progres2s');
    [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17, el18, el19].forEach(el => {
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 180) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        }
    });

});





document.getElementById('contacts').onclick = function () {
    window.location.href = 'project-contact/index.html';
};

document.getElementById('view').onclick = function () {
    window.location.href = 'project-timetable/index.html';
};

document.getElementById('links').onclick = function () {
    window.location.href = 'project-timetable/index.html';
};

document.getElementById('channels').onclick = function () {
    window.location.href = 'project-contact/index.html';
};

document.getElementById('tasks').onclick = function () {
    window.location.href = 'project-To-Do-list/index.html';
};

document.getElementById('timetable').onclick = function () {
    window.location.href = 'project-timetable/index.html';
};

document.getElementById('time_table').onclick = function () {
    window.location.href = 'project-timetable/index.html';
};




let currentLang = "en";

function toggleLang() {
    if (currentLang === "en") {
        document.querySelector(".j3").textContent = "القائمة";
        document.querySelector(".j4").textContent = "الصفحة الرئيسية";
        document.querySelector(".j5").textContent = "الجدول الزمني";
        document.querySelector(".j6").textContent = "صفحات المعلمين";
        document.querySelector(".j7").textContent = "قائمة المهام";
        document.querySelector(".j15").textContent = "منصتك الشاملة لتنظيم جداول الدراسة، والتواصل مع المعلمين، وإدارة رحلتك التعليمية في  جميع المواد الدراسية العربية، والإنجليزية، والرياضيات، والكيمياء، والفيزياء";
        document.querySelector(".j16").textContent = "عرض الجدول الزمني";
        document.querySelector(".j17").textContent = "تواصل مع المعلمين";
        document.querySelector(".j18").textContent = "المواد";
        document.querySelector(".j19").textContent = "المعلمين";
        document.querySelector(".j20").textContent = "المهام";
        document.querySelector(".j21").textContent = "جدول زمني ذكي";
        document.querySelector(".j22").textContent = "قم بتنظيم جدولك الأسبوعي لجميع المواد الخمس، وتتبع مواعيد تسليم الواجبات المنزلية، وقم بتحديد المهام المكتملة";
        document.querySelector(".j23").textContent = "استكشف";
        document.querySelector(".j24").textContent = "صفحات المدرسين";
        document.querySelector(".j25").textContent = "يمكنك الوصول إلى الملفات الشخصية المفصلة لمعلميك من خلال روابط سريعة للمنصة";
        document.querySelector(".j26").textContent = "استكشف";
        document.querySelector(".j27").textContent = "قنوات المعلمين";
        document.querySelector(".j40").textContent = "استكشف";
        document.querySelector(".j28").textContent = "تواصل مع معلميك من خلال منصات متعددة - يوتيوب، تيليجرام، فيسبوك، واتساب، ومنصات الدروس";
        document.querySelector(".j29").textContent = "قوائم المهام الذكية";
        document.querySelector(".j30").textContent = "أنشئ مهامك الدراسية، وقم بإدارتها وتتبعها. لن تفوتك أي مهمة أو جلسة مراجعة بعد الآن";
        document.querySelector(".j31").textContent = "استكشف";
        document.querySelector(".j32").textContent = "هل أنت مستعد لإحداث نقلة نوعية في عملية التعلم؟";
        document.querySelector(".j34").textContent = "ابدأ بتنظيم رحلتك التعليمية اليوم. أنشئ جداول ابدأ بتنظيم رحلتك التعليمية اليوم. أنشئ جداول زمنية، وتواصل مع المعلمين، وتابع تقدمك.";
        document.querySelector(".j33").textContent = "ابدأ الان";

        document.documentElement.lang = "ar"; 
        currentLang = "ar";
    } else {
        document.querySelector(".j3").textContent = "Menu";
        document.querySelector(".j4").textContent = "Home";
        document.querySelector(".j5").textContent = "Timetable";
        document.querySelector(".j6").textContent = "Teacher Channels";
        document.querySelector(".j7").textContent = "To-Do List";
        document.querySelector(".j15").textContent = "Your all-in-one platform to organize study schedules, connect with teachers, and manage<br>your educational journey across Arabic, English, Math, Chemistry, and Physics.";
        document.querySelector(".j16").textContent = "View Timetable";
        document.querySelector(".j17").textContent = "Connect with Teachers";
        document.querySelector(".j18").textContent = "Subjects";
        document.querySelector(".j19").textContent = "Teachers";
        document.querySelector(".j20").textContent = "Tasks";
        document.querySelector(".j21").textContent = "Smart Timtable";
        document.querySelector(".j22").textContent = "Organize your weekly schedule with all 5 subjects, track homework deadlines, and mark completed tasks.";
        document.querySelector(".j23").textContent = "Explore";
        document.querySelector(".j24").textContent = "Teacher Profiles";
        document.querySelector(".j25").textContent = "Access detailed profiles of your Arabic, English, Math, Chemistry, and Physics teachers with quick platform links.";
        document.querySelector(".j26").textContent = "Explore";
        document.querySelector(".j27").textContent = "Teacher Channels";
        document.querySelector(".j40").textContent = "Explore";
        document.querySelector(".j28").textContent = "Connect with your teachers through multiple platforms - YouTube, Telegram, Facebook, WhatsApp, and lesson platforms.";
        document.querySelector(".j29").textContent = "Smart To-Do Lists";
        document.querySelector(".j30").textContent = "Create, manage, and track your study tasks. Never miss an assignment or revision session again.";
        document.querySelector(".j31").textContent = "Explore";
        document.querySelector(".j32").textContent = "Ready to Transform Your Learning?";
        document.querySelector(".j34").textContent = "Start organizing your educational journey today. Create schedules, connect with teachers, and track your progress.";
        document.querySelector(".j33").textContent = "Get Started Now";
        document.documentElement.lang = "en";
        currentLang = "en";
    }
}











