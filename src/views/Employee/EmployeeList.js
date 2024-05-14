import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@themesberg/react-bootstrap";
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ProgressBar from "react-topbar-progress-indicator";
import { DefaultCard } from "../../components/card";
import { BasicTable, BasicTableAction } from "../../components/table";
import useListApi from "../../hooks/useListApi";
import { callApi } from "../../reducers/apiSlice";
import { setDeleteModal } from "../../reducers/deleteModalSlice";
import { selectToastAlert } from "../../reducers/toastAlertSlice";

import './Employee.scss';

const EmployeeList = () => {

	/**
	 * useHistory: navigation helper
	 */
	const history = useHistory();

	/**
	 * useDispatch: dispatch actions
	 */
	const dispatch = useDispatch();

	/**
	 * Put page and size into state
	 */
	const [size, setSize] = useState(10);
	const [page, setPage] = useState(1);

	/**
	 * Get updated 'type' value from toast alert's state.
	 */
	const {type} = useSelector(selectToastAlert);

	/**
	 * cardProps must need to pass into DefaultCard component.
	 * headerSlot: this is a placeholder for action buttons on card header.
	 *
	 * @type {{headerSlot: (function(): *), title: string}}
	 */
	const cardProps = {
		title: 'Employee List',
		headerSlot: () => (
			<>
				<Link to='/employee/add' activeClassName="active">
					<Button variant="link" className="f-right btn-sm p-5">
						<FontAwesomeIcon icon={faPlus} className="me-2"/> Add New Employee
					</Button>
				</Link>
			</>
		)
	};

	/**
	 * tableProps must need to pass into BasicTable component.
	 * headers: used for showing table header dynamically.
	 * perPage: used for controlling page size.
	 * config: used for api call.
	 * meta: contains pagination related data. [initially empty]
	 *
	 * @type {{headers: *[], perPage: number[], meta: {}, config: {output: string, operationId: string}}}
	 */
	const tableProps = {
		headers: [
			{id: 'id', label: '#'},
			{id: 'employeeName', label: 'Employee Name'},
			{id: 'employeeAge', label: 'Employee Age'},
			{id: 'employeeSalary', label: 'Employee Salary'},

			{id: 'action', label: 'Action', width: '120px'}
		],
		perPage: [10, 20, 30, 40, 50],
		config: {
			operationId: `https://dummy.restapiexample.com/api/v1/employees`,
			output: 'employeeList'
		},
		meta: {}
	};

	/**
	 * useListApi: get data for displaying on the table
	 */
	const {
		loading,
		data,
		meta
	} = useListApi(tableProps.config);

	/**
	 * Update tableProps's meta from api response
	 */
	tableProps.meta = meta;

	/**
	 * Show delete modal and performing delete operation
	 * by dispatching setDeleteModal. 'deleteApi' must need be passed.
	 */
	const onDeleteClick = (data) => {
		dispatch(setDeleteModal({
			deleteApi: `https://dummy.restapiexample.com/public/api/v1/delete/${data.id}`
		}));
	};

	/**
	 * Change the page on table and update the state.
	 * Fetch data by dispatching callApi.
	 */
	const onPageChange = (pageNo) => {
		setPage(pageNo);
		dispatch(callApi({
			operationId: `https://dummy.restapiexample.com/api/v1/employees`,
			output: 'employeeList'
		}));
	};


	/**
	 * Refresh the table data after performing delete operation.
	 * Fetch data by dispatching callApi.
	 */
	useEffect(() => {
		if (type === 'success') {
			dispatch(callApi({
				operationId: `https://dummy.restapiexample.com/api/v1/employees`,
				output: 'employeeList'
			}));
		}
	});

	return (
		<DefaultCard className="mb-50" {...cardProps}>
			{loading &&
			<ProgressBar/>
			}
			<BasicTable {...tableProps}
			
			            // onSizeChange={(pageSize) => onSizeChange(pageSize)}
			            // onSearchChange={(query) => onSearchChange(query)}
			            // onPageChange={(pageNo) => onPageChange(pageNo)}
						search = {true}
			>
				{data !== undefined &&
				data.map((row, rowIndex) => (
					<tr key={rowIndex}>
						<td>
                <span className="fw-normal text-center">
                  {row.id}
                </span>
						</td>
						<td>
                <span className="fw-normal text-center">
                  {row.employee_name}
                </span>
						</td>
						
						<td>
                <span className="fw-normal text-center">
                  {row.employee_age ?? 'N/A'}
                </span>
						</td>

						<td>
                <span className="fw-normal text-center">
                  {row.employee_salary ?? 'N/A'}
                </span>
						</td>
						<td>
							<BasicTableAction
								onShowClick={() => history.push(`/employee/${row.id}`)}
								onEditClick={() => history.push(`/employee/${row.id}/edit`)}
								onDeleteClick={() => onDeleteClick(row)}
							/>
						</td>
					</tr>
				))
				}
			</BasicTable>
		</DefaultCard>
	)

};

export default EmployeeList;