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








let newTask = JSON.parse(localStorage.getItem("tasks")) || [];

const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.task-input');
const taskContainer = document.getElementById('task-container');

if (input && addBtn) {
    input.onkeyup = function () {
        let task = input.value;
        if (task.length > 0) {
            addBtn.style.display = 'inline-block';
        } else {
            addBtn.style.display = 'none';
        }
    };


    addBtn.onclick = function () {
        let task = input.value;
        newTask.push(task);
        input.value = '';
        addBtn.style.display = 'none';
        localStorage.setItem('tasks', JSON.stringify(newTask));
        display();

    }


    display();

    function deleteTask(index) {
        newTask.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(newTask));
        // Remove the corresponding state
        let states = JSON.parse(localStorage.getItem('taskStates')) || [];
        states.splice(i, 1);
        localStorage.setItem('taskStates', JSON.stringify(states));
        display();
    }



    

    function saveTaskStates() {
        const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
        const states = [];
        checkboxes.forEach(cb => {
            states.push(cb.checked);
        });
        localStorage.setItem('taskStates', JSON.stringify(states));
    }

    function display() {
        let table = '';
        const states = JSON.parse(localStorage.getItem('taskStates')) || [];

        // Pair each task with its checked state and index
        const paired = newTask.map((task, i) => ({
            task,
            checked: !!states[i],
            index: i
        }));

        // Sort: unchecked first, checked last
        paired.sort((a, b) => a.checked - b.checked);

        // Render in sorted order
        for (let i = 0; i < paired.length; i++) {
            const { task, checked, index } = paired[i];
            const checkedAttr = checked ? 'checked' : '';
            const doneClass = checked ? 'done' : '';

            table += `
        <div class="task ${doneClass}">
            <input type="checkbox" data-index="${index}" onclick="ChangeBgToGreen(event)" ${checkedAttr}>
            ${task}
            <button onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></button>
        </div>`;
        }

        taskContainer.innerHTML = table;
        updateStats();
    }

function ChangeBgToGreen(event) {
        const checkbox = event.target;
        const index = parseInt(checkbox.dataset.index, 10);

        // تغيير اللون أو الشكل
        const taskDiv = checkbox.closest('.task');
        taskDiv.classList.toggle('done', checkbox.checked);

        // حفظ الحالة في localStorage
        const states = JSON.parse(localStorage.getItem('taskStates')) || [];
        states[index] = checkbox.checked;
        localStorage.setItem('taskStates', JSON.stringify(states));

        // إعادة العرض بعد التحديث
        display();
    }


    function updateStats() {
        const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
        const total = checkboxes.length;
        let done = 0;


        checkboxes.forEach(cb => {
            if (cb.checked) { done++ };
        });



        const remaining = total - done;
        const progress = total === 0 ? 0 : Math.round((done / total) * 100);

        // تحديث الصناديق في الصفحة
        if (document.getElementById('total2')) {
            document.getElementById('total2').innerHTML = `<i class="fa-solid fa-list-check"></i>${remaining}<br>Tasks`;
        }
        if (document.getElementById('progres2s') && document.getElementById('total') && document.getElementById('comp') && document.getElementById('rem')) {
            document.getElementById('total').innerHTML = `<i class="fa-solid fa-bars-progress"></i>${total}<br>Total Tasks`;
            document.getElementById('comp').innerHTML = `<i class="fa-regular fa-square-check"></i>${done}<br>Completed`;
            document.getElementById('rem').innerHTML = `<i class="fa-regular fa-square"></i>${remaining}<br>Remaining`;
            document.getElementById('progres2s').innerHTML = `<i class="fa-solid fa-bars-progress"></i>${progress}%<br> progress`;
        }
    };
    display();

};

if (document.getElementById('title').innerText == 'Timetable') {
    document.addEventListener('DOMContentLoaded', function () {
        //     // Chain menu logic
        const updateBtn = document.querySelector('.update');
        const options = document.getElementById('options');
        const displayBtn = document.querySelector('.display');
        const subjectBtn = document.querySelector('.Subject');
        const subjectContainer = document.querySelector('.subject-container');
        const displayContainer = document.querySelector('.display-container');
        const displayOptions = document.querySelector('.display-options');
        const subjectOptions = document.querySelector('.Subject-options');
        const addBtn = document.querySelector('.Add');
        const addSubject = document.querySelector('.add-subject');
        const deleteBtn = document.querySelector('.Delete');
        const deleteSubject = document.querySelector('.delete-subject');
        const lessonBtn = document.querySelector('.Lesson');
        const lessonOptions = document.querySelector('.Lesson-options');
        const homeworkBtn = document.querySelector('.Homework');
        const homeworkOptions = document.querySelector('.Homework-options');
        const linkBtn = document.querySelector('.Link');
        const AddBtn = document.querySelector('.add-sub');
        const linkPage = document.querySelector('.link-page');
        //     const listBtn = document.querySelector('.list');
        //     const gridBtn = document.querySelector('.grid');
        //     const table = document.querySelector('.timetable-table');

        //     // Show options when Edit Timetable is clicked
        updateBtn.addEventListener('click', function () {
            if (!displayContainer.classList.contains('visible') && !subjectContainer.classList.contains('visible')) {
                displayContainer.classList.toggle('visible');
                console.log('clicked dis');
                subjectContainer.classList.toggle('visible');
                console.log('clicked sub');
            } else {
                displayContainer.classList.remove('visible');
                console.log('clicked dis');
                subjectContainer.classList.remove('visible');
                console.log('clicked sub');
                displayOptions.classList.remove('visible');
                subjectOptions.classList.remove('visible');

            }
        });

        //     // Show display options
        displayBtn.addEventListener('click', function () {
            console.log('jsajdjsa');
            displayOptions.classList.toggle('visible');
            console.log('sub done');
            subjectContainer.classList.toggle('visible');


        });

        //     // Show subject options
        subjectBtn.addEventListener('click', function () {
            subjectOptions.classList.toggle('visible');
            displayContainer.classList.toggle('visible');

        });

        //     // Show/hide Add Subject
        addBtn.addEventListener('click', function () {
            addSubject.classList.toggle('visible');
            deleteSubject.classList.add('visible');
            lessonOptions.classList.add('visibie');
            homeworkOptions.classList.add('hide');
            linkPage.classList.add('hide');
        });

    });

    function plus() {
        const checkboxes = document.querySelectorAll('input[id^="lesson_"]');
        let x = 0;
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                x++;
                localStorage.setItem(`lesson_${index}`, "true");
            } else {
                localStorage.setItem(`lesson_${index}`, "false");
            }
        });
        if (document.getElementById("num")) {
            document.getElementById("num").innerHTML = `<i class="fa-solid fa-clock"></i>${x}<br>Lessons Done`;
        }
        localStorage.setItem("lessonsDone", x);
        localStorage.setItem("lessons", checkboxes.length);
    }

    plus();

    function homeworkFunc() {
        const checkboxes = document.querySelectorAll('input[id^="homework_"]');
        let x = 0;
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                x++;
                localStorage.setItem(`homework_${index}`, "true");
            } else {
                localStorage.setItem(`homework_${index}`, "false");
            }
        });
        if (document.getElementById("homework-input")) {
            document.getElementById("homework-input").innerHTML = `<i class="fa-solid fa-clock"></i>${x}<br>Homework Done`;
        }
        localStorage.setItem("homeworkDone", x);
        localStorage.setItem("homework", checkboxes.length);
    }

    homeworkFunc();

    function updateProgress() {
        // Select all lesson and homework checkboxes by their id prefix
        const lessons = document.querySelectorAll('input[id^="lesson_"]');
        const homework = document.querySelectorAll('input[id^="homework_"]');
        const total = lessons.length + homework.length;

        let completed = 0;
        lessons.forEach(ch => { if (ch.checked) completed++; });
        homework.forEach(ch => { if (ch.checked) completed++; });

        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

        // Update the progress box if it exists
        const progressBox = document.getElementById("progress");
        if (progressBox) {
            progressBox.innerHTML = `<i class="fa-solid fa-book"></i>${percent}%<br>progress`;
        }
        localStorage.setItem("progress", percent);
    }

    function total_subjects() {
        const itemsLen = new_subject.length;
        document.getElementById('element8').innerHTML = `<i class="fa-solid fa-calendar"></i>${itemsLen}<br>Total Subjects`;
    }


    let new_subject = JSON.parse(localStorage.getItem("subjects")) || [];

    const AddBtn = document.querySelector('.add-sub');

    AddBtn.onclick = function () {
        if (document.getElementById('subject').value.trim() != '' && document.getElementById('teacher').value.trim() != '') {
            let new_sub = {
                subject: document.getElementById('subject').value.trim(),
                teacher: document.getElementById('teacher').value.trim(),
                day: document.getElementById('day').value.trim(),
                lesson: document.getElementById('lesson').value.trim(),
                homework: document.getElementById('homewor2k').value.trim(),
                link: document.getElementById('link').value.trim(),
                color: document.getElementById('color').value,
            }
            new_subject.push(new_sub);
            localStorage.setItem('subjects', JSON.stringify(new_subject));
            clear_sub();
            display_subject();
        } else {
            alert('Please fill all the fields');
        }
    }

    function clear_sub() {
        document.getElementById('subject').value = '';
        document.getElementById('teacher').value = '';
        document.getElementById('day').value = '';
        document.getElementById('lesson').value = '';
        document.getElementById('homewor2k').value = '';
        document.getElementById('link').value = '';
        document.getElementById('color').value = '';
    }

    function display_subject() {

        table = `<tr>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Lesson Day</th>
                <th>Homework Day</th>
                <th>Link</th>
                <th>Lesson</th>
                <th>Homework</th>
            </tr>`;
        for (let i = 0; i < new_subject.length; i++) {
            const lessonChecked = localStorage.getItem(`lesson_${i}`) === "true" ? "checked" : "";
            const homeworkChecked = localStorage.getItem(`homework_${i}`) === "true" ? "checked" : "";
            table += `<tr>
                <td>
                    <h5 id="subject_${i}" class="user-select" style="color:${new_subject[i].color};display: inline-block;background-color:${new_subject[i].color}50;text-align: center;padding:10px;border-radius: 25px;font-size: 14px;border-radius:10px" >${new_subject[i].subject}</h5>
                </td>
                <td>${new_subject[i].teacher}</td>
                <td>${new_subject[i].day}<br>${new_subject[i].lesson}</td>
                <td>${new_subject[i].homework}</td>
                <td><a href="${new_subject[i].link}" target="_blank"><i
                            class="fa-solid fa-up-right-from-square"></i> Join</a></td>
                <td><input type="checkbox" id="lesson_${i}" ${lessonChecked} onclick="plus() , updateProgress()"></td>
                <td><input type="checkbox" id="homework_${i}" ${homeworkChecked} onclick="homeworkFunc() , updateProgress()"></td>
            </tr>`;
        }
        document.getElementById('table_sub').innerHTML = table;
        updateProgress();
        plus();
        homeworkFunc();
        total_subjects();
        attachHoldListeners();
    }

    

    

    display_subject();

    function delete_subject(i) {
        console.log("dsaldk");
        localStorage.removeItem(`lesson_${i}`);
        localStorage.removeItem(`homework_${i}`);

        // Remove subject from array and localStorage
        new_subject.splice(i, 1);
        localStorage.setItem('subjects', JSON.stringify(new_subject));

        // Re-index remaining checkbox states
        for (let j = i; j < new_subject.length; j++) {
            // Move next subject's state up one index
            localStorage.setItem(`lesson_${j}`, localStorage.getItem(`lesson_${j + 1}`) || "false");
            localStorage.setItem(`homework_${j}`, localStorage.getItem(`homework_${j + 1}`) || "false");
        }
        // Remove the last (now unused) keys
        localStorage.removeItem(`lesson_${new_subject.length}`);
        localStorage.removeItem(`homework_${new_subject.length}`);

        localStorage.setItem('subjects', JSON.stringify(new_subject));
        display_subject();
    }

    function attachHoldListeners() {
        for (let i = 0; i < new_subject.length; i++) {
            const h5 = document.getElementById(`subject_${i}`);
            let holdTimer;
            h5.addEventListener('mousedown', function () {
                holdTimer = setTimeout(() => delete_subject(i), 1000);
            });
            h5.addEventListener('mouseup', function () {
                clearTimeout(holdTimer);
            });
            h5.addEventListener('mouseleave', function () {
                clearTimeout(holdTimer);
            });
            // For touch devices
            h5.addEventListener('touchstart', function () {
                holdTimer = setTimeout(() => delete_subject(i), 1000);
            });
            h5.addEventListener('touchend', function () {
                clearTimeout(holdTimer);
            });
            h5.addEventListener('touchcancel', function () {
                clearTimeout(holdTimer);
            });

        }
    }


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











