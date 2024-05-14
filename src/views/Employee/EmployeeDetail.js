import { faEdit, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Table } from "@themesberg/react-bootstrap";
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProgressBar from "react-topbar-progress-indicator";
import { DefaultCard } from "../../components/card";
import { callApi, selectApi } from "../../reducers/apiSlice";

import './Employee.scss';

const EmployeeDetail = (props) => {

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
			storeName: 'employeeDetails'
		}))
	}, [dispatch, props.match.params.id]);

	/**
	 * cardProps must need to pass into DefaultCard component.
	 * headerSlot: this is a placeholder for action buttons on card header.
	 *
	 * @type {{headerSlot: (function(): *), title: string}}
	 */
	const cardProps = {
		title: 'Employee Details',
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
			{loading &&
			<ProgressBar/>
			}
			<Card border="white" className="table-wrapper table-responsive">
				<Card.Body>
					<Table className="table table-striped table-hover mb-15">
						<tbody>
						<tr>
							<td className="border-0 td-width"><b>Employee Id</b></td>
							<td className="border-0">{details.data.id ?? 'N/A'}</td>
						</tr>
						<tr>
							<td className="border-0 td-width"><b>Employee Name</b></td>
							<td className="border-0">{details.data.employee_name ?? 'N/A'}</td>
						</tr>
						<tr>
							<td className="border-0 td-width"><b>Employee Age</b></td>
							<td className="border-0">{details.data.employee_age ?? 'N/A'}</td>
						</tr>
						<tr>
							<td className="border-0 td-width"><b>Employee Salary</b></td>
							<td className="border-0">{details.data.employee_salary ?? 'N/A'}</td>
						</tr>
						</tbody>
					</Table>
					<hr/>
					<Link to={`/employee/${details.data.id}/edit`} activeClassName="active">
						<Button variant="success" className="f-right" type="submit">
							<FontAwesomeIcon icon={faEdit} className="me-2"/> Edit Employee
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</DefaultCard>
	)

};

export default EmployeeDetail;