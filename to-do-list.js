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
        states.splice(index, 1);
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