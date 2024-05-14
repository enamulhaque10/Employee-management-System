import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from '@themesberg/react-bootstrap';
import { Form } from "formik";
import React from 'react';
import { InputField } from "../../components/form";

const EmployeeForm = () => {

	return (
		<Form>
			<Row>
				<Col md={4} className="mb-20">
					<InputField
						label="Employee Name"
						name="employeeName"
						type="text"
						placeholder="Enter Employee Name"
					/>
				</Col>
				<Col md={4} className="mb-20">
					<InputField
						label="Employee Name (Bn)"
						name="employeeNameBn"
						type="text"
						placeholder="Enter Employee Name (Bn)"
					/>
				</Col>
				<Col md={4} className="mb-20">
					<InputField
						label="Employee Id "
						name="employeeId"
						type="text"
						placeholder="Enter Employee Id"
					/>
				</Col>
				<Col md={4} className="mb-20">
					<InputField
						label="Employee Age "
						name="employeeAge"
						type="text"
						placeholder="Enter Employee Age"
					/>
				</Col>
				<Col md={4} className="mb-20">
					<InputField
						label="Employee Salary "
						name="employeeSalary"
						type="text"
						placeholder="Enter Employee Salary"
					/>
				</Col>
				{/* <Col md={4} className="mb-20">
					<InputField
						label="Employee Designation "
						name="employeeDesignation"
						type="text"
						placeholder="Enter Employee Designation"
					/>
				</Col>
				<Col md={4} className="mb-20">
					<InputField
						label="Employee Phone "
						name="employeePhone"
						type="text"
						placeholder="Enter Employee Phone"
					/>
				</Col> */}
				
				{/* <Col md={4} className="mb-20">
					<InputField
						label="Employee Email "
						name="employeeEmail"
						type="email"
						placeholder="Enter Employee Email"
					/>
				</Col>
				<Col md={6} className="mb-20">
					<InputField
						label="Employee Address "
						name="employeeAddress"
						type="text"
						placeholder="Enter Employee Address"
					/>
				</Col> */}
				<Col md={12} className="mb-10 mt-10">
					<Button variant="success" className="f-right" type="submit">
						<FontAwesomeIcon icon={faSave} className="me-2"/> Submit
					</Button>
				</Col>
			</Row>
		</Form>
	);

};

export default EmployeeForm;