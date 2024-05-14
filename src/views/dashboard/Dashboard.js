import * as React from 'react';
import {Card} from "@themesberg/react-bootstrap";
import {DefaultCard} from "../../components/card";

import './Dashboard.scss'

const Dashboard = () => {

	/**
	 * cardProps must need to pass into DefaultCard component.
	 * headerSlot: this is a placeholder for action buttons on card header.
	 *
	 * @type {{headerSlot: (function(): *), title: string}}
	 */
	const cardProps = {
		title: 'Dashboard'
	};

	return (
		<DefaultCard className="mb-50" {...cardProps}>
			<Card border="white" className="table-wrapper table-responsive">
				<Card.Body>
					<p>Dashboard Page</p>
				</Card.Body>
			</Card>
		</DefaultCard>
	)

};

export default Dashboard;