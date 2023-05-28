import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<body>
				<Main />
				<div id='modal' />
				<NextScript />
			</body>
		</Html>
	);
}
