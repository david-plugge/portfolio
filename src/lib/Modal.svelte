<script lang="ts">
	import { portal } from '@svuick/portal';
	import { fade, scale } from 'svelte/transition';

	const duration = 150;
	export let show = false;

	const open = () => {
		show = true;
	};
	const close = () => {
		show = false;
	};

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			close();
		}
	}
</script>

<slot {show} {open} {close} />

{#if show}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		use:portal
		transition:fade={{ duration }}
		class="fixed inset-0 grid bg-surface-400/50 backdrop-blur-sm dark:bg-black/60"
		on:click|self={close}
		on:keydown={handleKeydown}
	>
		<div
			transition:scale={{ start: 0.9, duration }}
			tabindex="-1"
			class="mx-8 mb-auto mt-8 origin-top"
		>
			<slot name="modal" {close} />
		</div>
	</div>
{/if}
