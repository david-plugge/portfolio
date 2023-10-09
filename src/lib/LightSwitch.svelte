<script lang="ts">
	import {
		setInitialClassState,
		modeCurrent,
		setModeUserPrefers,
		setModeCurrent
	} from '@skeletonlabs/skeleton';
	import { Moon, Sun } from 'lucide-svelte';

	function update() {
		$modeCurrent = !$modeCurrent;
		setModeUserPrefers($modeCurrent);
		setModeCurrent($modeCurrent);
	}
</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>

<div>
	<button
		type="button"
		class="bg-surface-50-900-token h-8 w-16 rounded-full border border-surface-300 border-opacity-50 transition-colors text-on-surface-token hover:border-opacity-75 dark:border-surface-600"
		on:click={update}
	>
		<div
			class="stack bg bg-surface-800-100-token text-surface-100-800-token relative aspect-square h-full scale-[0.8] place-items-center rounded-full transition dark:translate-x-full"
		>
			<span class="moon opacity-0 transition-opacity dark:opacity-100">
				<Moon />
			</span>
			<span class="sun transition-opacity dark:opacity-0"><Sun /></span>
		</div>
	</button>
</div>
