import React, { useContext, useState } from "react";
import TodoStore from "../../stores/TodoStore";
import { observer } from "mobx-react-lite";
import { v4 } from "uuid";

const TodoAdd: React.FC = () => {
  const [title, setTitle] = useState("");
  const todoStore = useContext(TodoStore);
  const { addTodo, info } = todoStore;

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
        <input
          className="form-control"
          type="text"
          placeholder="Tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <h3>Adicionar tarefa</h3>
        <button
          className="btn btn-info"
          onClick={(_) => {
            addTodo({
              id: v4(),
              title: title,
              completed: false,
            });
            setTitle("");
          }}
        >
          Adicionar
        </button>
      </div>
    </>
  );
};

export default observer(TodoAdd);
