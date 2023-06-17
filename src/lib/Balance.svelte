<script>
	import { onMount } from "svelte";
	var moneyAmount;

	onMount(async () => {
		const res = await fetch("/api", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				action: "get",
				username: window.localStorage.getItem("username"),
				sid: window.localStorage.getItem("sid")
			})
		});
		moneyAmount = await res.text();
	});
</script>

<img src="/logo.png" alt="Money Symbol" />
{#if moneyAmount !== undefined}
	<p>You currently have</p>
	<b>{moneyAmount} $OMNI{moneyAmount > 1 ? "s" : ""}</b>
{:else}
	<p>Loading...</p>
{/if}

<style>
	b {
		font-size: 2em;
	}
</style>
