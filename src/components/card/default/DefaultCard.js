import React from 'react';
import {Card, Col, Row} from "@themesberg/react-bootstrap";

export default function DefaultCard(props) {

	const {title, children, headerSlot, footerSlot} = props;

	return (
		<Card border="light" className="bg-white shadow-sm mb-30">
			<Card.Header>
				<h5 className="mb-0 f-left">{title}</h5>
				{headerSlot !== undefined &&
				headerSlot()
				}
			</Card.Header>
			<Card.Body>
				<Row className="justify-content-between align-items-center">
					<Col xs={12} md={12} lg={12} xl={12}>
						{children}
					</Col>
				</Row>
			</Card.Body>
			{footerSlot !== undefined &&
			<Card.Footer>
				{footerSlot()}
			</Card.Footer>
			}
		</Card>
	);

}