#!/usr/bin/env node

import { addTask, listTasks, removeTask, completeTask } from './todo.js';

const [,, command, ...args] = process.argv;

switch (command) {
  case 'add':
    addTask(args.join(' '));
    break;
  case 'list':
    listTasks();
    break;
  case 'remove':
    removeTask(parseInt(args[0]));
    break;
  case 'complete':
    completeTask(parseInt(args[0]));
    break;
  default:
    console.log('Comandos disponíveis: add, list, remove, complete');
}

