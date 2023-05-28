import { InternLayout } from '@/layouts';
import {Top, Tasks, InternshipsPlaces, EventApplication, ProjectApplication } from './sections'

export const HomePage = () => {
	return (
		<InternLayout>
			<Top/>
			<Tasks/>
			<InternshipsPlaces/>
			<EventApplication/>
			<ProjectApplication/>
		</InternLayout>
	);
};
