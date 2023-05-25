import { InternLayout } from '@/layouts';
import classes from './InternshipsPage.module.css';
import { ButtonTagsType } from '@/types';
import { TagsFilter } from '@/components';
import { Container, Input, JobCard, SearchNormalIcon, Title } from '@/ui';
import { useInternshipsPage } from './hooks';
import { Field, Form } from 'react-final-form';
import { ISearchFormState } from './types';

export const InternshipsPage = () => {
	const { internshipsMappedJobData, currentTags, mappedButtonDirectionTags, initFormState, handleOnSubmitForm } =
		useInternshipsPage();

	return (
		<InternLayout>
			<Container>
				<div className={classes.ContentLayout}>
					<Title headline='h1'>Все стажировки</Title>

					<Form<ISearchFormState> initialValues={initFormState} onSubmit={handleOnSubmitForm}>
						{(props) => (
							<form className={classes.SearchForm} onSubmit={props.handleSubmit}>
								<Field type='search' name='search'>
									{(props) => (
										<Input
											placeholder='Введите название стажировки или организатора'
											rightIcon={<SearchNormalIcon />}
											id='search'
											className={classes.InputWidth}
											{...props.input}
										/>
									)}
								</Field>
							</form>
						)}
					</Form>

					<TagsFilter tags={mappedButtonDirectionTags as ButtonTagsType} type='button' activeTags={currentTags} />

					<div className={classes.InternsContainer}>
						{internshipsMappedJobData.map(({ id, imagePreviewImg, nameJob, options }) => (
							<JobCard key={id} srcImg={imagePreviewImg} nameJob={nameJob} options={options} id={id} />
						))}
					</div>
				</div>
			</Container>
		</InternLayout>
	);
};
