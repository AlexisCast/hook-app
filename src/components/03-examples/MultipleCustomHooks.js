import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFectch } from "../../hooks/useFectch";

import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {

   const{counter,increment}=useCounter(1);
	const { loading,data } = useFectch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	// console.log(loading);

   const{author,quote}=!!data&&data[0];
	// console.log(author,quote);

	return (
		<div>
			<h1>BeakingBad Quotes</h1>
			<hr />

			{loading ? (
				<div className="alert alert-info text-center">Loading...</div>
			) : (
				<blockquote className="blockquote text-end">
					<p className="mb-0">{quote}</p>
					<footer className="blockquote-footer">{author}</footer>
				</blockquote>
			)}

         <button 
            className="btn btn-primary"
            onClick={increment}
         >
            Siquiente Quote
         </button>
		</div>
	);
};
