import { join } from 'path';
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { davidPluggeTheme } from './themes/custom';

const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [
		typography(),
		skeleton({
			themes: {
				custom: [davidPluggeTheme]
			}
		}),
		plugin(({ addUtilities }) => {
			addUtilities({
				'.balance': {
					'text-wrap': 'balance'
				}
			});
		})
	]
} satisfies Config;

export default config;
