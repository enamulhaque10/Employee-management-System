import * as Yup from 'yup';

class EmployeeModel {

	/**
	 * Model properties
	 */
	constructor() {
		this.employeeName = '';
		this.employeeNameBn = '';
		this.employeeId = '';
		this.employeeDesignation = '';
		this.employeePhone = '';
		this.employeeEmail = '';
		this.employeeAddress = '';
		this.employeeAge = '';
	}

	/**
	 * Get model instance from json
	 */
	fromJson(data = {}) {
		let obj = new EmployeeModel();
		if (data.id !== undefined && data.id) {
			obj.id = data.id;
		}
		obj.employeeName = data.employeeName ?? '';
		obj.employeeNameBn = data.employeeNameBn ?? '';
		obj.employeeId = data.employeeId ?? '';
		obj.employeeDesignation = data.employeeDesignation ?? '';
		obj.employeePhone = data.employeePhone ?? '';
		obj.employeeEmail = data.employeeEmail ?? '';
		obj.employeeAddress = data.employeeAddress ?? '';
		obj.employeeAge = data.employeeAge ?? '';
		obj.employeeSalary = data.employeeSalary ?? '';
		return obj;
	}

	/**
	 * Get string from model instance
	 */
	toString(data = {}) {
		let obj = new EmployeeModel()
			.fromJson(data);
		return JSON.stringify(obj);
	}

	/**
	 * Validator schema
	 */
	validator() {
		return Yup.object().shape({
			countryName: Yup.string()
				.min(3, 'Too Short!')
				.max(50, 'Too Long!')
				.required('Required'),
			countryNameBn: Yup.string()
				.min(3, 'Too Short!')
				.max(50, 'Too Long!')
				.required('Required')
		});
	}

}

export const Employee = new EmployeeModel();