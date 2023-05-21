import 'normalize.css';
import '../styles/index.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { NextFonts } from '@/ui';

export default function App({ Component, pageProps }: AppProps) {
	const { fallback } = pageProps;

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/browser/favicon.ico' />
			</Head>

			<NextFonts />

			<SWRConfig
				value={{
					fallback,
				}}
			>
				<Component {...pageProps} />
			</SWRConfig>
		</>
	);
}
