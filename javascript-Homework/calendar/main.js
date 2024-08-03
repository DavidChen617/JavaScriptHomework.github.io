const calendarHeader = document.getElementById('month-year');

const daysContainer = document.getElementById('days');

const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');


const todoInput = document.querySelector("#todo"); 
const addButton = document.querySelector(".add-btn");
const modal = document.querySelector('#modal');

const key = "todoList";

const tmeplate = document.querySelector('.todo-item-template');


const deleteBtn = document.querySelector('.delete-btn');
const cancelBtn = document.querySelector('.cancel-btn');

const saveBtn = document.querySelector('.save-btn');
saveBtn.addEventListener('click', save);

addButton.addEventListener("click", (e) => {
    addtodoItem(e)
});


let currentDate = new Date();

renderCalendar(); 
initCalendar();
document.querySelector('.close-btn').addEventListener('click', closeModal);



function createTodoItemEl(todoItem) {
    const todoItemEl = tmeplate.content
        .querySelector(".todo-item") // li
        .cloneNode(true);
    // console.log(todoItemEl);
    todoItemEl.dataset.id = todoItem.id;

    todoItemEl.querySelector(".displayInput").value = todoItem.content;
    todoItemEl.addEventListener("click", handleTodoItemClick); //為事項添加事件監聽
    return todoItemEl;
}



function initCalendar() {

    const todoList = getTodoListFromStorage();
    const calendarTodos = document.querySelectorAll('.todoGroup');
    calendarTodos.forEach(calendarTodoGroup => {
        calendarTodoGroup.textContent = "";
        todoList.forEach(item => {
            if (calendarTodoGroup.id == item.date) {
                const todoItemDOM = createTodoItemEl(item); //li
                todoItemDOM.querySelector('.edit-btn').remove();;
                todoItemDOM.querySelector('.remove-btn').remove();;
                calendarTodoGroup.appendChild(todoItemDOM);
            }
        })

    })
}


function handleTodoItemClick(e) {
    const targetEl = e.target;
    console.log(targetEl)

    if (targetEl.classList.contains("edit-btn")) {
        edit(targetEl);
    } else if (targetEl.classList.contains("save-btn")) {
        save(todoItemId, targetEl);
    } else if (targetEl.classList.contains("remove-btn")) {
        remove(targetEl);
    }
}

function renderingTodoList(date) {
    // 日期欄位要有值
    // modal 對應的值
    const modalBox = document.querySelector('#todo-box');

    modalBox.textContent = " ";
    const todoList = getTodoListFromStorage();  //取資料
    todoList.forEach(item => {

        if (item.date == date) {
            const todoItemDOM = createTodoItemEl(item); //li

            modalBox.appendChild(todoItemDOM);
        }
        initCalendar();
    });
}



function getTodoListFromStorage() {
    //取得現在所有的todoItem,再加上去
    const localStorageItem = localStorage.getItem(key);
    return localStorageItem ? JSON.parse(localStorageItem) : [];
}


function saveTodoListToStorage(todoList) {
    const json = JSON.stringify(todoList);
    localStorage.setItem(key, json);
}


function saveTodoItem(todoItem) {
    //取得現在所有的todoItem,再加上去
    const todoList = getTodoListFromStorage();
    todoList.push(todoItem);
    saveTodoListToStorage(todoList);
}


function edit(el) {
    const todoContent = el.parentElement.querySelector(".displayInput");
  
    addButton.style.display = 'none';
    saveBtn.style.display = 'block';
    todoContent.disabled = false;

    saveBtn.classList.remove("d-none");
    el.classList.add("d-none");
}

function save() {
    const todoContent = saveBtn.parentElement.parentElement.querySelector(".modal-todoitem .todo-item");
    const id = todoContent.dataset.id;

    const val = todoContent.querySelector('input').value.trim();
    if (!val) return;

    const todoList = getTodoListFromStorage();
    const todoItem = todoList.find((item) => item.id == id);

    todoItem.content = val;
    saveTodoListToStorage(todoList);
    renderingTodoList(todoItem.date); // 更新顯示待辦事項
    addButton.style.display = 'block';
    saveBtn.style.display = 'none';
}
function remove(el) {
    if (confirm("確定要刪除這項待辦事項嗎？")) {

        const todoList = getTodoListFromStorage();
        const id = el.closest('.todo-item').dataset.id;
        const todoItemIdx = todoList.findIndex((item) =>
            item.id == id);

        const date = todoList[todoItemIdx].date;
        todoList.splice(todoItemIdx, 1);

        saveTodoListToStorage(todoList);
        renderingTodoList(); // 更新顯示待辦事項
        initCalendar();
    }
}

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    calendarHeader.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
    daysContainer.innerHTML = '';

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement("div");
        daysContainer.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const dayDiv = document.createElement('div');
        dayDiv.className = "day";
        dayDiv.textContent = day;

        const overflow = document.createElement('div');
        overflow.className = 'overflow';
        dayDiv.appendChild(overflow);

        const ulDiv = document.createElement('ul');
        ulDiv.className = "todoGroup";
        ulDiv.id = date; // 使用日期作為 id
        overflow.appendChild(ulDiv);

        daysContainer.appendChild(dayDiv);

        dayDiv.addEventListener('click', () => {
            openModal(date);
        });
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
    initCalendar() ;
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
    initCalendar() ;
});


function openModal(date) {

    modal.style.display = 'block';
    document.querySelector('.modal-header .modalDate').textContent = date;

    renderingTodoList(date);
}

function addtodoItem(e) {
    const todoContent = todoInput.value.trim();
    if (!todoContent) {
        alert("請輸入待辦事項內容！");
        return;
    }
    const date = e.target.closest('#modal').querySelector('.modal-header .modalDate').textContent;

    const todoItem = {
        date: date,
        id: new Date().valueOf(),
        content: todoContent,
        isDone: false,
    };
    saveTodoItem(todoItem);
    renderingTodoList(date); // 更新顯示待辦事項
    todoInput.value = ""; // 清空輸入框
}



function closeModal() {
    modal.style.display = 'none';
}

