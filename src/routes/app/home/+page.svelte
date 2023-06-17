<script>
	import { onMount } from "svelte";
	import Balance from "$lib/Balance.svelte";
	import { browser } from '$app/environment';
	export let data;
	let current_interface = false; 
	//the element currently being shown (the balance or the sending money interface
	onMount(() => {
		localStorage["sid"] = data.sid;
		localStorage["username"] = data.username;
	});
	const actions = {
		"Check Balance": () => {/*
			  console.log(localStorage, localStorage["sid"])//why is this broken help
			  current_interface = Balance;*/
			if(browser)alert("Coming Soon! (never)")
		},
		"Send Money": () => {if(browser)alert("Comming Soon! (never)")},
		"Log Out": () => {
			localStorage.clear();
			location.replace("/login");
		}
	};
</script>

<h1>Welcome Back, {data.username ?? "Valued User"}</h1><!--lmao-->

<svelte:component this={current_interface} id="current-interface" />
<!--svelte:components/svelte:elements turn into the element provided in the "this"-->
<menu>
	<h2>Actions</h2>
	{#each Object.entries(actions) as [btitle, elemFn]}
		<button class="action" on:click={elemFn}>{btitle}</button>
	{/each}
</menu>

<style lang="scss">
	h1 {
		margin: 1em 0;
		text-align: center;
	}
	menu {
		padding: 0;
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgb(170 170 170 / 0.8);
		border: solid 0.8em rgb(76 76 76);
		border-radius: 0.6em;
	}
	menu button {
		width: 12em;
		height: 3.5em;
		margin: 0.5em;
		color: green;
		border: solid 0.3em darkgreen;
		background: rgba(50 160 70 / 0.8);
		border-radius: 0.9em;
	}
</style>
