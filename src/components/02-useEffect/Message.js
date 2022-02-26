import React, { useEffect, useState } from "react";

export const Message = () => {

   const [coords, setCoords] = useState({x:0,y:0})
   const {x,y}=coords;

	useEffect(() => {
		const mouseMove = (e) => {
			const coords={x: e.x, y: e.y};
         setCoords(coords);
			// console.log(coords);
			// console.log(":D");
		};
		// console.log('componente montado');
		window.addEventListener("mouseover", mouseMove);
		return () => {
			window.removeEventListener("mouseover", mouseMove);
			//   console.log('componente Desmontado');
		};
	}, []);

	return (
		<div>
			<h3>Eres Genial!</h3>
         <p>
            x:{x} y: {y}
         </p>
		</div>
	);
};
