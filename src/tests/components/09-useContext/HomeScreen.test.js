import React from "react";
import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";
import "@testing-library/jest-dom";

describe("Pruebas en <HomeScreen/>", () => {
	const user = {
		name: "Fernando",
		email: "testing@gmail.com",
	};
	const wrapper = mount(
		<UserContext.Provider
			value={{
				user,
			}}
		>
			<HomeScreen />
		</UserContext.Provider>
	);
	test("debe de mostrar correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
