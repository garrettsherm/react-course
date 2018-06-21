import React, { Fragment } from 'react';

class StorePicker extends React.Component {
	render(){
		return (
				<form action="" className="store-selector">
					{ /*comment*/ }
					<h2>Please Enter A Store</h2>
					<input type="text" placeholder="Store Name" required/>
					<button>Visit Store</button> 
				</form>
		);
	}
}

export default StorePicker;