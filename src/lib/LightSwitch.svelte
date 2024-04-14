<script lang="ts">
	import { Sun, Moon } from 'lucide-svelte';
	import { setMode, userPrefersMode, systemPrefersMode } from 'mode-watcher';

	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	$: currentMode = $userPrefersMode === 'system' ? $systemPrefersMode ?? 'light' : $userPrefersMode;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" size="icon">
			{#if currentMode === 'dark'}
				<Moon />
			{:else}
				<Sun />
			{/if}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end" class="w-24">
		<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => setMode('system')}>System</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
