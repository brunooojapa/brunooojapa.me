import React from 'react';
import { Icon } from 'semantic-ui-react';

const IconLink = (name, link) => (
	<a href={name.link}>
		<div>
			<Icon link color="black" name={name.name} size="big" />
		</div>
	</a>
);

export default IconLink;
