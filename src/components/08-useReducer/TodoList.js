import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
	console.log(todos);
	return (
		<>
			<ul className="list-group list-group-flush">
				{todos.map((todo, i) => (
					//TodoListItem, index,handleDelete,handleToggle
					<TodoListItem 
                  key={todo.id}
                  todo={todo}
                  index={i}
                  handleDelete={handleDelete}
                  handleToggle={handleToggle}
               />
				))}
			</ul>
		</>
	);
};
