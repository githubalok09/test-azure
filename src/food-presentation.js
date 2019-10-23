import React, { useState, useEffect, JSON } from 'react';
import DragDrop from './drag-drop'
function FoodPresentation() {	
	const [items, setItems] = useState([]);
	
	function RetrieveData(){
		fetch("http://alokwebapi.azurewebsites.net/api/values") //localhost:53273/api/values
			.then(res => res.json())
			.then((result) => {
				console.log(result);

				setItems(result);
			},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
			(error) => {
				console.log(error);
			}
		);
	};
	
	useEffect(() => {
		RetrieveData();	
		// var items = [{"id":"1", "className": "plate", "showLayout": false, "top": 200, "left": 200}, 
		// {"id":"2", "name": "spoon", "category": "cutlery", "image": "spoon.png", "top": 0, "left": 0, "rotateAngle": 0, "zindex": 0},
		// {"id":"3", "className": "glass", "showLayout": false}];	

		//setItems(items);	
	}, []);
    return (
	
		(typeof items != "undefined" && items.length) ?
		( 
			<div className="food-container">
				{
					items.map((item, i) =>								
						typeof item != "undefined" ? <DragDrop key={item.id} item={item} setItems={setItems}/> : null
					)
				}				
			</div>
		) : null			
    );  
}

export default FoodPresentation;

