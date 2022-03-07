import { shallow } from "enzyme";
import React from "react";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoToodos";
import "@testing-library/jest-dom";

describe("Pruebas en <TodoListItem/>.", () => {
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();

	const wrapper = shallow(
		<TodoListItem
			todo={demoTodos[0]}
			index={0}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/>
	);
	test("debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});
	test("debe de llamar la funcion handleDelete", () => {
		//jest.fn
		//tohavebeencalled
		//tohavebeencalledwith
		wrapper.find("button").simulate("click");
		expect(handleDelete).toHaveBeenCalled();
		expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
	});
	test("debe de llamar la funcion handleToggle", () => {
		wrapper.find("p").simulate("click");
		expect(handleToggle).toHaveBeenCalled();
		expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
		//jest.fn
		//tohavebeencalled
		//tohavebeencalledwith
	});
	test("debe de mostrar el texto correctamente", () => {
		//jest.fn
		//tohavebeencalled
		//tohavebeencalledwith
		const p = wrapper.find("p");
		expect(p.text()).toBe(`${0 + 1}. ${demoTodos[0].desc}`);
	});
	test("debe de tener la clase complete", () => {
		const todo = demoTodos[0];
		todo.done = true;
		const wrapper = shallow(<TodoListItem todo={demoTodos[0]} />);
		// console.log(wrapper.html());
		expect(wrapper.find("p").hasClass("complete")).toBe(true);
	});
});
