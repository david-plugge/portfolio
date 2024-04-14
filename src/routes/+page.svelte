<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Github, Gitlab, Linkedin, Mail, Twitter } from 'lucide-svelte';

	const socials = [
		{ label: 'Twitter', icon: Twitter, href: 'https://twitter.com/davidplugge' },
		{ label: 'Github', icon: Github, href: 'https://github.com/david-plugge' },
		{ label: 'Gitlab', icon: Gitlab, href: 'https://gitlab.com/david-plugge' },
		{ label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/david-plugge/' }
	];
</script>

<div class="prose dark:prose-invert mx-auto">
	<h1 class="font-medium">Software developer, and amateur entrepreneur</h1>

	<p class="mt-6">
		I'm David, a software developer based in Aachen Germany. I am currently studying computer
		science dual at the RWTH Aachen. In my freetime I hacking on side projects to satisfy my need to
		solve problems for people.
	</p>

	<h2>Contact me</h2>

	<div class="mt-6 flex gap-4">
		{#each socials as { label, href, icon }}
			<Button {href} target="_blank" title={label} variant="secondary" class="w-full">
				<svelte:component this={icon} />
			</Button>
		{/each}
	</div>

	<div class="flex items-center gap-4">
		<hr class="flex-1" />
		<span>or</span>
		<hr class="flex-1" />
	</div>

	<Button href="mailto:info@davidplugge.de" variant="secondary" class="w-full">
		<Mail />
		<span>info@davidplugge.de</span>
	</Button>
</div>
