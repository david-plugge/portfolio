import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';
import MagicString from 'magic-string';

export default defineConfig({
	plugins: [lucideSvelteImportOptimizer(), sveltekit()]
});

function lucideSvelteImportOptimizer(): Plugin {
	return {
		name: 'lucide-svelte optimizer',
		transform(code, id) {
			const ms = new MagicString(code, { filename: id });

			ms.replace(
				/([ \t]*)import\s+\{(.*?)\}\s+from\s+['"]lucide-svelte['"];?/g,
				(match, whitespace: string, importNames: string) => {
					const hasSemi = match.endsWith(';');

					const imports = importNames
						.split(',')
						.map((v) => v.trim())
						.map((name) => {
							const path = name
								.split('')
								.map((c, i) => {
									const code = c.charCodeAt(0);
									return code >= 65 && code <= 90 ? (i === 0 ? '' : '-') + c.toLowerCase() : c;
								})
								.join('');

							return `${whitespace}import ${name} from 'lucide-svelte/icons/${path}'${hasSemi ? ';' : ''}`;
						});

					return imports.join('\n');
				}
			);

			if (ms.hasChanged()) {
				return {
					code: ms.toString(),
					map: ms.generateMap()
				};
			}
		}
	};
}
