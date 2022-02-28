import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFectch } from "../../hooks/useFectch";

import "./layout.css";

export const Layout = () => {
	const { counter, increment } = useCounter(1);
	const { data } = useFectch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);
	// console.log(loading);

	const { quote } = !!data && data[0];
	// console.log(author,quote);
	const [boxSize, setboxSize] = useState({});
	const pTag = useRef();
	useLayoutEffect(() => {
		setboxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>Layout Effect</h1>
			<hr />

			<blockquote className="blockquote text-end">
				<p className="mb-0" ref={pTag}>
					{quote}
				</p>
			</blockquote>

			<pre>{JSON.stringify(boxSize, null, 3)}</pre>

			<button className="btn btn-primary" onClick={increment}>
				Siquiente Quote
			</button>
		</div>
	);
};
