import React from 'react';
import { Routes as RoutesDom, Route } from "react-router-dom";
import TodoList from '../pages/TodoList';
import TodoAdd from '../pages/TodoAdd';
const Routes: React.FC = () => {
  return (
        <RoutesDom>
            <Route path="/" element={<TodoList/>} />
            <Route path="/add" element={<TodoAdd/>} />
        </RoutesDom>
  );
}

export default Routes;
