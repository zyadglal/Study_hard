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
                // console.log('clicked dis');
                subjectContainer.classList.toggle('visible');
                // console.log('clicked sub');
            } else {
                displayContainer.classList.remove('visible');
                // console.log('clicked dis');
                subjectContainer.classList.remove('visible');
                // console.log('clicked sub');
                displayOptions.classList.remove('visible');
                subjectOptions.classList.remove('visible');

            }
        });

        //     // Show display options
        displayBtn.addEventListener('click', function () {
            // console.log('jsajdjsa');
            displayOptions.classList.toggle('visible');
            // console.log('sub done');
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
        // console.log("dsaldk");
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















