import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import TodoStore from "../../stores/TodoStore";

const TodoList: React.FC = () => {
  const todoStore = useContext(TodoStore);
  const { todos, toggleTodo, removeTodo, info } = todoStore;

  return (
    <>
      <div className="alert alert-dark">
        <div className="d-inline col-4">
          Total de tarefas: &nbsp;
          <span className="badge bg-info">{info.total}</span>
        </div>
        <div className="d-inline col-4">
          Tarefas concluídas: &nbsp;
          <span className="badge bg-success">{info.completed}</span>
        </div>
        <div className="d-inline col-4">
          Tarefas pendentes: &nbsp;
          <span className="badge bg-danger">{info.uncompleted}</span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <h3>Lista de tarefas</h3>
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th>Título</th>
                <th>Concluída</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>
                    {todo.completed ? (
                      <span className="badge bg-success">Sim</span>
                    ) : (
                      <span className="badge bg-danger">Não</span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => toggleTodo(todo.id)}
                    >
                      Toogle
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeTodo(todo.id)}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default observer(TodoList);
