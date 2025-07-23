// DOM Elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('task-count');
const clearButton = document.getElementById('clear-all');

// Initialize todos
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Initialize app 
function init() {
    renderTodos();
    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
    clearButton.addEventListener('click', clearCompleted);
}

// Add new todo
function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false 
        };
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        todoInput.value = '';
        todoInput.focus();
    }
}

// Render todos to DOM
function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        if (todo.completed) todoItem.classList.add('completed');

        todoItem.innerHTML = `
            <input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${todo.text}</span>
            <button class="delete-btn">Delete</button>
        `;

        const checkbox = todoItem.querySelector('.checkbox');
        const deleteBtn = todoItem.querySelector('.delete-btn');

        checkbox.addEventListener('change', () => toggleComplete(todo.id));
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

        todoList.appendChild(todoItem);
    });

    updateStats();
}

// Toggle todo completion
function toggleComplete(id) {
    todos = todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    );
    saveTodos();
    renderTodos();
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

// Clear completed todos
function clearCompleted() {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    renderTodos();
}

// Update task counter
function updateStats() {
    const activeTodos = todos.filter(todo => !todo.completed).length;
    taskCount.textContent = `${activeTodos} ${activeTodos === 1 ? 'task' : 'tasks'} remaining`;
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Initialize app
init();