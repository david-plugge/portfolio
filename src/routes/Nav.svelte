<script lang="ts">
	import LightSwitch from '$lib/LightSwitch.svelte';
	import { page } from '$app/stores';
	import { crossfade } from 'svelte/transition';
	import { Menu } from 'lucide-svelte';
	import { routes } from './routes';

	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	const [send, receive] = crossfade({});

	let open = false;
</script>

<div class="sticky top-0 border-b bg-background/90 backdrop-blur">
	<nav class="container mx-auto flex items-center gap-4 p-4">
		<a href="/">DP</a>

		<ul class="mx-auto hidden sm:flex">
			{#each routes as { label, href }}
				<li>
					<a
						class="relative block px-3 py-2 font-medium transition-colors"
						class:text-primary={$page.url.pathname === href}
						{href}
					>
						{label}

						{#if $page.url.pathname === href}
							<span
								in:receive={{ key: 'indicator' }}
								out:send={{ key: 'indicator' }}
								class="absolute left-0 top-full h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"
							/>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<Dialog.Root bind:open>
			<Dialog.Trigger asChild let:builder>
				<Button builders={[builder]} variant="outline" size="icon" class="ml-auto sm:hidden ">
					<Menu />
				</Button>
			</Dialog.Trigger>

			<Dialog.Content class="sm:max-w-[425px]">
				<Dialog.Header>
					<Dialog.Title>Navigation</Dialog.Title>
				</Dialog.Header>
				<ul class="flex flex-col">
					{#each routes as { label, href }}
						<li class="border-b last:border-none">
							<a
								class="relative block py-3 transition-colors"
								class:text-primary-500-400-token={$page.url.pathname === href}
								{href}
								on:click={() => (open = false)}
							>
								{label}
							</a>
						</li>
					{/each}
				</ul>
			</Dialog.Content>
		</Dialog.Root>

		<LightSwitch />
	</nav>
</div>
