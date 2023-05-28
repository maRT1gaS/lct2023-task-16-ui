import { InternshipsAdminPage as InternshipsAdminPageCmp } from '@/modules';
import type { GetServerSideProps } from 'next';

const InternshipsAdminPage = () => <InternshipsAdminPageCmp />;

export default InternshipsAdminPage;

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	};
};
