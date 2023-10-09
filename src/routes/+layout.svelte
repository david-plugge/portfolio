<script lang="ts">
	import '../app.css';
	import Nav from './Nav.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="flex min-h-screen flex-col gap-16">
	<Nav />

	<main class="container mx-auto flex-1 p-4">
		<slot />
	</main>

	<Footer />
</div>
