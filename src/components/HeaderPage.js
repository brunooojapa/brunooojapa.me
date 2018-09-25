import React from 'react';
import { Header } from 'semantic-ui-react';
import SubHeader from './SubHeader';

const HeaderPage = () => (
	<div>
		<Header className="headerN" textAlign="center" size="huge" as="h1">
			Bruno de Lima Viana
		</Header>
		<SubHeader />
	</div>
);

export default HeaderPage;
