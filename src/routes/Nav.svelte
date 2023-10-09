<script lang="ts">
	import LightSwitch from '$lib/LightSwitch.svelte';
	import { page } from '$app/stores';
	import { crossfade } from 'svelte/transition';
	import { Menu, X } from 'lucide-svelte';
	import { routes } from './routes';
	import Modal from '$lib/Modal.svelte';

	const [send, receive] = crossfade({});
	let show = false;
</script>

<div
	class="border-surface-200-700-token sticky top-0 border-b bg-surface-50/90 backdrop-blur dark:bg-surface-900/90"
>
	<nav class="container mx-auto flex items-center gap-4 p-4">
		<a href="/">DP</a>

		<ul class="mx-auto hidden sm:flex">
			{#each routes as { label, href }}
				<li>
					<a
						class="relative block px-3 py-2 font-medium transition-colors"
						class:text-primary-500-400-token={$page.url.pathname === href}
						{href}
					>
						{label}

						{#if $page.url.pathname === href}
							<span
								in:receive={{ key: 'indicator' }}
								out:send={{ key: 'indicator' }}
								class="absolute left-0 top-full h-px w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent dark:via-primary-400"
							/>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<Modal let:open bind:show>
			<button class="variant-outline btn ml-auto sm:hidden" on:click={open}>
				<Menu />
			</button>

			<div
				let:close
				slot="modal"
				class="bg-surface-50-900-token border-surface-300-600-token rounded-3xl border p-8 shadow-xl"
			>
				<header class="mb-6 flex items-center justify-between">
					<div class="font-medium">Navigation</div>
					<button type="button" class="text-surface-300" on:click={close}><X /></button>
				</header>

				<ul class="flex flex-col">
					{#each routes as { label, href }}
						<li class="border-b last:border-none">
							<a
								class="relative block py-3 transition-colors"
								class:text-primary-500-400-token={$page.url.pathname === href}
								{href}
								on:click={close}
							>
								{label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</Modal>

		<LightSwitch />
	</nav>
</div>
