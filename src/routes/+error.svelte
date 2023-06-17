<script>
	import { page } from "$app/stores";
</script>

<main>
	<h1>Error {$page.status}: {$page.error.message}</h1>
	<a href="/">Return to Home</a>
</main>

<style>
	:global(html),
	:global(body) {
		background: white;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
