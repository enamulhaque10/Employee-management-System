import React from 'react';
import {useField} from "formik";


const InputField = ({label, ...props}) => {

	const [field, meta] = useField(props);

	return (
		<>
			{label !== undefined &&
			<label className="form-label">{label}</label>
			}
			<input {...props} {...field} className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}/>
			<div className="invalid-feedback">{meta.error}</div>
		</>
	);

};

export default InputField;