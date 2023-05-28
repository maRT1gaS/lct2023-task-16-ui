import { apiInstance } from '../instance';

interface ICreateVacanciesPostData {
	nameJob: string;
	company: number;
	rating: number;
	status: number;
	adress: string;
	responsibilities: string;
	requirements: string;
	conditions: string;
	tag: number;
	startOfSelection: Date;
	endOfSelection: Date;
	startOfTheInternship: Date;
	endOfInternship: Date;
	imagePreviewImg: File;
}

export const createVacancies = async (postData: ICreateVacanciesPostData) => {
	const formDara = new FormData();

	formDara.append('nameJob', postData.nameJob);
	formDara.append('company', JSON.stringify(postData.company));
	formDara.append('rating', JSON.stringify(postData.rating));
	formDara.append('status', JSON.stringify(postData.status));
	formDara.append('adress', postData.adress);
	formDara.append('responsibilities', postData.responsibilities);
	formDara.append('requirements', postData.requirements);
	formDara.append('conditions', postData.conditions);
	formDara.append('tag', JSON.stringify(postData.tag));
	formDara.append('startOfSelection', String(postData.startOfSelection));
	formDara.append('endOfSelection', String(postData.endOfSelection));
	formDara.append('startOfTheInternship', String(postData.startOfTheInternship));
	formDara.append('endOfInternship', String(postData.endOfInternship));
	formDara.append('imagePreviewImg', postData.imagePreviewImg);

	const resData = (await apiInstance.post('/admin/vacancies/', formDara)).data;

	return resData;
};
