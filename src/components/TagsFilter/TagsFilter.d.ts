import { LinkTagsType, ButtonTagsType } from '@/types';

export interface ITagsFilterProps {
	tags: LinkTagsType | ButtonTagsType;
	type: 'link' | 'button';
	activeTags?: string[];
}
