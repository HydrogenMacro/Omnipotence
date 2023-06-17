<script>
	export let form;
	import { browser } from "$app/environment"
</script>

<main>
	<div id="this-is-only-used-for-backdrop-filter" />
	<form method="post">
		<h1>Log In</h1>
		<label for="username">Username</label>
		<input name="username" type="text" minlength="3" maxlength="20" />
		<label for="password">Password</label>
		<input name="password" type="password" minlength="3" maxlength="20" />
		<button>Submit</button>
		<output>{form ? "Error: " + form : ""}</output>
		<p>Want to sign up? <a href="/signup">Sign Up</a></p>
	</form>
</main>

<style lang="scss">
	:global(body) {
		overflow: hidden;
	}
	#this-is-only-used-for-backdrop-filter {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgb(190 190 190 / 0.6); /*ok i lied i also used this*/
		backdrop-filter: blur(0.4em);
		-webkit-backdrop-filter: blur(0.4em);
	}
	main {
		background: url("$lib/green-warp.gif");
		background-size: cover;
		width: 100vw;
		height: 100vh;
		font-family: $main-font;
	}
	form {
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	label {
		font-size: 1.4em;
		padding: 0.2em;
	}
	output {
		padding: 0.5em;
		color: red;
		width: 15em;
	}
	input {
		width: 90%;
		margin: 0.6em 0;
	}
</style>
