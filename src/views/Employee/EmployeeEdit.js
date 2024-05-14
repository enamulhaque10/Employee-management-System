import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "@themesberg/react-bootstrap";
import { Formik } from "formik";
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProgressBar from "react-topbar-progress-indicator";
import { DefaultCard } from "../../components/card";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { Employee } from "./Employee";
import EmployeeForm from "./EmployeeForm";

import './Employee.scss';

const EmployeeEdit = (props) => {

	/**
	 * useDispatch: dispatch actions
	 */
	const dispatch = useDispatch();

	/**
	 * Get loading indicator and data from 'selectApi' state
	 */
	const {
		loading, details = {
			data: {}
		}
	} = useSelector(selectApi);

	/**
	 * Get data through api call by dispatching 'callApi'.
	 */
	useEffect(() => {
		dispatch(callApi({
			operationId: `https://dummy.restapiexample.com/api/v1/employee/${props.match.params.id}`,
			output: 'details',
			storeName: 'employeeEdit'
		}))
	}, [dispatch, props.match.params.id]);

	/**
	 * cardProps must need to pass into DefaultCard component.
	 * headerSlot: this is a placeholder for action buttons on card header.
	 *
	 * @type {{headerSlot: (function(): *), title: string}}
	 */
	const cardProps = {
		title: 'Edit Employee',
		headerSlot: () => (
			<>
				<Link to='/employee' activeClassName="active">
					<Button variant="link" className="f-right btn-sm p-5">
						<FontAwesomeIcon icon={faList} className="me-2"/> View Employee List
					</Button>
				</Link>
			</>
		)
	};

	return (
		<DefaultCard className="mb-50" {...cardProps}>
			<Card border="white" className="table-wrapper table-responsive">
				<Card.Body>
					{loading &&
					<ProgressBar/>
					}
					<Formik
						initialValues={Employee.fromJson(details.data)}
						enableReinitialize={true}
						//validationSchema={Employee.validator()}
						onSubmit={(values) => {

							/**
							 * Save data through POST api by dispatching 'callApi'.
							 */
							dispatch(callApi({
								operationId: `https://dummy.restapiexample.com/public/api/v1/update/${props.match.params.id}`,
								parameters: {
									method: 'PUT',
									body: Employee.toString(values)
								}
							}));

						}}
					>
						<EmployeeForm/>
					</Formik>
				</Card.Body>
			</Card>
		</DefaultCard>
	)

};

export default EmployeeEdit;