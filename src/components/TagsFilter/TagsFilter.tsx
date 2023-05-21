import { IButtonTag, ILinkTag } from '@/types';
import { ITagsFilterProps } from './TagsFilter.d';
import classes from './TagsFilter.module.css';
import { TagButton, TagLink } from '../UI/Tag';

export const TagsFilter = ({ type, tags, activeTags = [] }: ITagsFilterProps) => {
	return (
		<ul className={classes.List}>
			{tags.map((props) => {
				switch (type) {
					case 'button': {
						const btnProps = props as IButtonTag;

						return (
							<li key={props.id}>
								<TagButton isActive={activeTags?.includes(btnProps.value)} {...btnProps} />
							</li>
						);
					}
					case 'link':
						return (
							<li key={props.id}>
								<TagLink {...(props as ILinkTag)} />
							</li>
						);
				}
			})}
		</ul>
	);
};
