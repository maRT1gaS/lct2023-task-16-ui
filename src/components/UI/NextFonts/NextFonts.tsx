import { Inter } from 'next/font/google';

const inter = Inter({
	display: 'swap',
	style: ['normal'],
	weight: ['400', '500', '700'],
	variable: '--font-inter',
	fallback: ['sans-serif'],
	subsets: ['cyrillic', 'latin'],
});

export const NextFonts = () => (
	<style jsx global>
		{`
			:root {
				--font-inter: ${inter.style.fontFamily};
			}
		`}
	</style>
);
