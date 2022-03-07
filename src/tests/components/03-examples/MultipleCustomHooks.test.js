import { shallow } from "enzyme";
import React from "react";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { useFectch } from "../../../hooks/useFectch";

jest.mock("../../../hooks/useFectch");
jest.mock("../../../hooks/useCounter");

describe("Prueba en <MultipleCustomHooks/>", () => {
	beforeEach(() => {
		useCounter.mockReturnValue({
			counter: 10,
			increment: () => {},
		});
	});

	test("debe de mostrarse correctamente", () => {
		useFectch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		});
		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper).toMatchSnapshot();
	});
	test("debe de mostrar la informacion", () => {
		useFectch.mockReturnValue({
			data: [
				{
					author: "Alexis",
					quote: "hola mundo",
				},
			],
			loading: false,
			error: null,
		});
		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper.find(".alert").exists()).toBe(false);
		expect(wrapper.find(".mb-0").text().trim()).toBe("hola mundo");
		expect(wrapper.find("footer").text().trim()).toBe("Alexis");
		// console.log(wrapper.html());
	});
});
