const SECTION_ABOUT_PLATFORM_ID = 'about-platform';
const SECTION_TRAINEE_WAY_ID = 'trainee-way';
const SECTION_TRAINEE_INTERESTS_ID = 'trainee-interests';
const SECTION_ADVANTAGES_OF_INTERNSHIP_ID = 'advantages-of-internship-id';

export const sections_ids = Object.freeze({
	SECTION_ABOUT_PLATFORM_ID,
	SECTION_TRAINEE_WAY_ID,
	SECTION_TRAINEE_INTERESTS_ID,
	SECTION_ADVANTAGES_OF_INTERNSHIP_ID,
});

export const landingNavConfig = [
	{
		id: sections_ids.SECTION_TRAINEE_WAY_ID,
		title: 'Карта',
		href: `/#${sections_ids.SECTION_TRAINEE_WAY_ID}`,
		scroll: false,
	},
	{
		id: sections_ids.SECTION_ADVANTAGES_OF_INTERNSHIP_ID,
		title: 'Преимущества',
		href: `/#${sections_ids.SECTION_ADVANTAGES_OF_INTERNSHIP_ID}`,
		scroll: false,
	},
	{
		id: sections_ids.SECTION_ABOUT_PLATFORM_ID,
		title: 'О платформе',
		href: `/#${sections_ids.SECTION_ABOUT_PLATFORM_ID}`,
		scroll: false,
	},
	{
		id: sections_ids.SECTION_TRAINEE_INTERESTS_ID,
		title: 'Стажировки',
		href: `/#${sections_ids.SECTION_TRAINEE_INTERESTS_ID}`,
		scroll: false,
	},
];
