import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
	{ number: 39, text: 'Projects' },
	{ number: 306, text: 'Commits' },
	{ number: 1, text: 'Github Followers' },
	{ number: 1, text: 'Github Stars' },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>GitHub Accomplishments</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.number}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
