import { InternLayout } from '@/layout';
import { StartCareer, TraineeWay, AdvantagesOfInternship, AboutPlatform, TraineeInterests } from './sections';
import { HeaderNavigation, ScrollTop } from './components';
import { landingNavConfig } from './constants';

export const LandingPage = () => (
	<InternLayout headerChildren={<HeaderNavigation navConfig={landingNavConfig} />}>
		<StartCareer />
		<TraineeWay />
		<AdvantagesOfInternship />
		<AboutPlatform />
		<TraineeInterests />

		<ScrollTop />
	</InternLayout>
);
