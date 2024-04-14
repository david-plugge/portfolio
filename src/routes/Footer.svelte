<script lang="ts">
	import { routes } from './routes';
</script>

<div class="border-surface-200-700-token border-t">
	<footer
		class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 pb-12 pt-6 sm:flex-row"
	>
		<ul class="flex">
			{#each routes as { label, href }}
				<li>
					<a
						class="hover:text-primary-500-400-token relative block px-3 py-2 font-medium transition-colors"
						{href}
					>
						{label}
					</a>
				</li>
			{/each}
		</ul>

		<p class="text-surface-600-300-token">&copy; David Plugge. All rights reserved.</p>
	</footer>
</div>
