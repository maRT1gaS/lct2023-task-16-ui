import { Container } from '@/ui';
import { Section, ServiceCard } from '../../components';
import classes from './AdvantagesOfInternship.module.css';
import { advantagesOfInternshipItems } from './constants';
import { sections_ids } from '../../constants';

export const AdvantagesOfInternship = () => (
	<Section id={sections_ids.SECTION_ADVANTAGES_OF_INTERNSHIP_ID} title='Преимущества стажировки'>
		<Container>
			<ul className={classes.List}>
				{advantagesOfInternshipItems.map(({ id, title, description, color }) => (
					<li className={classes.ListItem} key={id}>
						<ServiceCard additionalClassName={classes.ListItemCard} title={title} description={description} color={color} />
					</li>
				))}
			</ul>
		</Container>
	</Section>
);
