import { renderHook } from "@testing-library/react-hooks";
import { useFectch } from "../../hooks/useFectch";

describe("Pruebas en useFetch", () => {
	test("debe de retornar la informacion por defecto", () => {
		const { result } = renderHook(() =>
			useFectch(`https://www.breakingbadapi.com/api/quotes/1`)
		);
		// console.log(result.current);
		const { data, loading, error } = result.current;
		expect(data).toBe(null);
		expect(loading).toBe(true);
		expect(error).toBe(null);
	});
	test("debe de tener la info deseadoa, loading false, error false", async() => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFectch(`https://www.breakingbadapi.com/api/quotes/1`)
		);
		// console.log(result.current);
      await waitForNextUpdate();
      
		const { data, loading, error } = result.current;

		expect(data.length).toBe(1);
		expect(loading).toBe(false);
		expect(error).toBe(null);
	});
	test("debe de manejar el error", async() => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFectch(`https://reqres.in/apid/users?page=2`)
		);
		// console.log(result.current);
      await waitForNextUpdate();
      
		const { data, loading, error } = result.current;

		expect(data).toBe(null);
		expect(loading).toBe(false);
		expect(error).toBe('No se pudo cargar la info');
	});
});
