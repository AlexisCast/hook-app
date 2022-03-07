import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";

describe("Prueba en <LoginScreen/>", () => {
	const setUser = jest.fn();
	const wrapper = mount(
		<UserContext.Provider
			value={{
				setUser,
			}}
		>
			<LoginScreen />
		</UserContext.Provider>
	);
	test("debe de mostrar correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});
	test("debe de ejecutar el seUser con el argumento esperado", () => {
		wrapper.find("button").prop("onClick")();
		expect(setUser).toHaveBeenCalledWith({
			id: 123,
			name: "Alexis",
		});
	});
});
