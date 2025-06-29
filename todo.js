import fs from 'fs';
import chalk from 'chalk';

const dataFile = './data.json';

function loadTasks() {
  if (!fs.existsSync(dataFile)) return [];
  const data = fs.readFileSync(dataFile, 'utf8');
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  fs.writeFileSync(dataFile, JSON.stringify(tasks, null, 2));
}

export function addTask(description) {
  const tasks = loadTasks();
  tasks.push({ id: Date.now(), description, done: false });
  saveTasks(tasks);
  console.log('✅ Tarefa adicionada com sucesso!');
}

export function listTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log('Nenhuma tarefa encontrada.');
    return;
  }

  tasks.forEach((task, index) => {
    const status = task.done ? '[✔]' : '[ ]';
    console.log(`${status} ${index + 1}. ${task.description}`);
  });
}

export function removeTask(index) {
  const tasks = loadTasks();
  if (index < 1 || index > tasks.length) {
    console.log('❌ Índice inválido.');
    return;
  }

  const removed = tasks.splice(index - 1, 1);
  saveTasks(tasks);
  console.log(`🗑️ Tarefa removida: "${removed[0].description}"`);
}

export function completeTask(index) {
  const tasks = loadTasks();
  if (index < 1 || index > tasks.length) {
    console.log('❌ Índice inválido.');
    return;
  }

  tasks[index - 1].done = true;
  saveTasks(tasks);
  console.log(`✅ Tarefa marcada como concluída: "${tasks[index - 1].description}"`);
}