import React from 'react';

function Input({
	placeholder, 
	value, 
	onChange, 
	className,
	type, 
	name, 
	label, 
	required
}){
	return(
		<div className="col-md-6 col-sm-6 col-lg-6">
		  <label>{label}</label>
		  <input type={type} 
		  	className={className}
		  	placeholder={placeholder} 
			name={name}
		  	required={required} 
		  />
	  </div>
	);

}

export default Input;