// Variables
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const prioritySelect = document.getElementById('prioritySelect');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const confirmModal = document.getElementById('confirmModal');
const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');
const modalMessage = document.getElementById('modalMessage');
const toast = document.getElementById('toast');

const STORAGE_KEY = 'todos';
let todos = [];
let currentFilter = 'all';
let modalAction = null;

// Load todos from localStorage
function loadTodos() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        todos = JSON.parse(stored);
    }
    render();
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// Generate unique ID
function generateId() {
    return Date.now() + Math.random();
}

// Format date
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
        return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Ayer';
    } else {
        return date.toLocaleDateString('es-ES');
    }
}

// Add todo
function addTodo() {
    const text = todoInput.value.trim();
    
    if (!text) {
        showToast('Por favor ingresa una tarea', 'error');
        return;
    }

    const newTodo = {
        id: generateId(),
        text: text,
        completed: false,
        priority: prioritySelect.value,
        createdAt: Date.now()
    };

    todos.unshift(newTodo);
    saveTodos();
    todoInput.value = '';
    prioritySelect.value = 'medium';
    showToast('Tarea agregada', 'success');
    render();
}

// Toggle todo completion
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        render();
    }
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    showToast('Tarea eliminada', 'info');
    render();
}

// Edit todo
function editTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        const newText = prompt('Editar tarea:', todo.text);
        if (newText !== null && newText.trim()) {
            todo.text = newText.trim();
            saveTodos();
            showToast('Tarea actualizada', 'success');
            render();
        }
    }
}

// Filter todos
function getFilteredTodos() {
    switch (currentFilter) {
        case 'pending':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t => t.completed);
        case 'high':
            return todos.filter(t => t.priority === 'high');
        default:
            return todos;
    }
}

// Update stats
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById('totalCount').textContent = total;
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('pendingCount').textContent = pending;
}

// Show/hide empty state
function toggleEmptyState() {
    const filtered = getFilteredTodos();
    if (filtered.length === 0) {
        emptyState.classList.add('show');
        todoList.style.display = 'none';
    } else {
        emptyState.classList.remove('show');
        todoList.style.display = 'block';
    }
}

// Render todos
function render() {
    const filtered = getFilteredTodos();
    todoList.innerHTML = '';

    filtered.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item priority-${todo.priority} ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="checkbox" 
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${todo.id})"
            >
            <div class="todo-content">
                <span class="todo-text">${escapeHtml(todo.text)}</span>
                <span class="todo-priority ${todo.priority}">${getPriorityLabel(todo.priority)}</span>
                <span class="todo-time">${formatDate(todo.createdAt)}</span>
            </div>
            <div class="todo-actions">
                <button class="todo-btn edit-btn" onclick="editTodo(${todo.id})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="todo-btn delete-btn" onclick="deleteTodo(${todo.id})" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        todoList.appendChild(li);
    });

    updateStats();
    toggleEmptyState();
}

// Helper to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Get priority label
function getPriorityLabel(priority) {
    const labels = {
        'high': '🔴 Alta',
        'medium': '🟡 Media',
        'low': '🟢 Baja'
    };
    return labels[priority] || priority;
}

// Show toast notification
function showToast(message, type = 'info') {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Show confirmation modal
function showConfirmModal(message, action) {
    modalMessage.textContent = message;
    modalAction = action;
    confirmModal.classList.add('show');
}

// Hide confirmation modal
function hideConfirmModal() {
    confirmModal.classList.remove('show');
    modalAction = null;
}

// Clear completed todos
function clearCompleted() {
    const completed = todos.filter(t => t.completed).length;
    if (completed === 0) {
        showToast('No hay tareas completadas', 'info');
        return;
    }
    showConfirmModal(`¿Eliminar ${completed} tarea(s) completada(s)?`, 'clearCompleted');
}

// Clear all todos
function clearAll() {
    if (todos.length === 0) {
        showToast('No hay tareas para eliminar', 'info');
        return;
    }
    showConfirmModal(`¿Eliminar todas las ${todos.length} tarea(s)?`, 'clearAll');
}

// Execute modal action
function executeModalAction() {
    if (modalAction === 'clearCompleted') {
        todos = todos.filter(t => !t.completed);
        showToast('Tareas completadas eliminadas', 'success');
    } else if (modalAction === 'clearAll') {
        todos = [];
        showToast('Todas las tareas eliminadas', 'success');
    }
    saveTodos();
    hideConfirmModal();
    render();
}

// Event Listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

clearCompletedBtn.addEventListener('click', clearCompleted);
clearAllBtn.addEventListener('click', clearAll);

cancelBtn.addEventListener('click', hideConfirmModal);
confirmBtn.addEventListener('click', executeModalAction);

// Filter buttons
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        render();
    });
});

// Close modal on outside click
confirmModal.addEventListener('click', (e) => {
    if (e.target === confirmModal) {
        hideConfirmModal();
    }
});

// Initialize
loadTodos();