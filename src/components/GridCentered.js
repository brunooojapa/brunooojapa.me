import React from 'react';
import { Grid } from 'semantic-ui-react';
import IconLink from './IconLink';
import HeaderPage from './HeaderPage';

const GridCentered = () => (
	<Grid centered columns={3}>
		<Grid.Column mobile={16} tablet={8} computer={16}>
			<HeaderPage />
		</Grid.Column>

		<Grid.Row centered columns={5}>
			<Grid.Column textAlign="center" mobile={3} tablet={2} computer={2}>
				<IconLink
					link={'https://github.com/brunooojapa'}
					name={'github'}
				/>
			</Grid.Column>
			<Grid.Column textAlign="center" mobile={3} tablet={2} computer={2}>
				<IconLink
					link={'https://twitter.com/brunooojapa'}
					name={'twitter'}
				/>
			</Grid.Column>
			<Grid.Column textAlign="center" mobile={3} tablet={2} computer={2}>
				<IconLink
					link={'https://www.linkedin.com/in/brunooojapa/'}
					name={'linkedin'}
				/>
			</Grid.Column>
			<Grid.Column textAlign="center" mobile={3} tablet={2} computer={2}>
				<IconLink
					link={'https://medium.com/@brunooojapa'}
					name={'medium'}
				/>
			</Grid.Column>
			<Grid.Column textAlign="center" mobile={3} tablet={2} computer={2}>
				<IconLink
					link={
						'mailto:brunooojapa@gmail.com?subject=Hey Bruno, mail for you.'
					}
					name={'mail'}
				/>
			</Grid.Column>
		</Grid.Row>
	</Grid>
);

export default GridCentered;
