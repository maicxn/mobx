import { makeObservable, observable, action, computed } from "mobx";
import { createContext } from "react";
import { v4 } from "uuid";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

class TodoStore {
  todos: Todo[] = [
    { id: v4(), title: "Item #1", completed: false },
    { id: v4(), title: "Item #2", completed: false },
    { id: v4(), title: "Item #3", completed: false },
    { id: v4(), title: "Item #4", completed: false },
    { id: v4(), title: "Item #5", completed: true },
    { id: v4(), title: "Item #6", completed: false },
  ];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      toggleTodo: action,
      removeTodo: action,
      info: computed,
    });
  }

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  };

  toggleTodo = (id: string) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  };

  removeTodo = (id: string) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter((todo) => todo.completed).length,
      uncompleted: this.todos.filter((todo) => !todo.completed).length,
    };
  }
}

export default createContext(new TodoStore());
