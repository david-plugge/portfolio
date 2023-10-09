<script lang="ts">
	import { Github, Gitlab, Linkedin, Mail, Twitter } from 'lucide-svelte';

	const socials = [
		{ label: 'Twitter', icon: Twitter, href: 'https://twitter.com/davidplugge' },
		{ label: 'Github', icon: Github, href: 'https://github.com/david-plugge' },
		{ label: 'Gitlab', icon: Gitlab, href: 'https://gitlab.com/david-plugge' },
		{ label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/david-plugge/' }
	];
</script>

<div class="prose mx-auto dark:prose-invert">
	<h1 class="font-medium">Software developer, and amateur entrepreneur</h1>

	<p class="mt-6">
		I'm David, a software developer based in Aachen Germany. I am currently studying computer
		science dual at the RWTH Aachen. In my freetime I hacking on side projects to satisfy my need to
		solve problems for people.
	</p>

	<h2>Contact me</h2>

	<div class="mt-6 flex gap-4">
		{#each socials as { label, href, icon }}
			<a
				title={label}
				class="variant-outline-surface text-surface-900-50-token btn flex-1 gap-2 no-underline dark:variant-ghost-surface"
				{href}
			>
				<svelte:component this={icon} />
			</a>
		{/each}
	</div>

	<div class="flex items-center gap-4">
		<hr class="flex-1" />
		<span>or</span>
		<hr class="flex-1" />
	</div>

	<a
		class="variant-outline-surface text-surface-900-50-token btn w-full gap-2 no-underline dark:variant-ghost-surface"
		href="https://www.linkedin.com/in/david-plugge/"
	>
		<Mail />
		<span>info@davidplugge.de</span>
	</a>
</div>
