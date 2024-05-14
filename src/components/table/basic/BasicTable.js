import { Card, Nav, Row, Table } from "@themesberg/react-bootstrap";
import * as React from 'react';
import Pagination from "react-js-pagination";

import './BasicTable.scss';

const BasicTable = (props) => {

	const {headers, perPage, onSearchChange, onSizeChange, meta, search = false, onPageChange, children} = props;

	const onSearchKeyDown = (value) => {
		return onSearchChange(value);
	};

	return (
		<>
			<Card border="white" className="table-wrapper table-responsive">
				<Card.Body>
					<div className="table-settings d-block mb-15">
						<Row className="justify-content-between align-items-center">
							
							
							{/* <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
								<Form>
									<Form.Group className="mb-3">
										<Form.Select onChange={e => onSizeChange(e.target.value)}>
											<option defaultValue>Show</option>
											{perPage.map((size, index) => (
												<option value={size} key={index}>{size}</option>
											))}
										</Form.Select>
									</Form.Group>
								</Form>
							</Col> */}
						</Row>
					</div>
					<Table striped hover className="user-table align-items-center">
						<thead>
						<tr>
							{headers.map((header, headerIndex) => {
								if (header.width !== undefined) {
									return <th key={headerIndex} className="border-bottom" style={{width: '100px'}}>{header.label}</th>;
								} else {
									return <th key={headerIndex} className="border-bottom">{header.label}</th>
								}
							})}
						</tr>
						</thead>
						<tbody style={{minHeight: '540px !important'}}>
						{children}
						</tbody>
					</Table>
					<Card.Footer className="px-0 border-0 d-lg-flex align-items-center justify-content-between pb-0">
						<Nav>
							<Pagination
								innerClass="pagination"
								itemClass="page-item"
								linkClass="page-link"
								activePage={meta.currentPage}
								itemsCountPerPage={meta.size}
								totalItemsCount={30}
								pageRangeDisplayed={10}
								onChange={(page) => onPageChange(page)}
							/>
						</Nav>
						<small className="fw-bold">
							Showing <b>{(meta.size > meta.total) ? meta.total : meta.size}</b> out of <b>{meta.total}</b> entries
						</small>
					</Card.Footer>
				</Card.Body>
			</Card>
		</>
	)

};

export default BasicTable;