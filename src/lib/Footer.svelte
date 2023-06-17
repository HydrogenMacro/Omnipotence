<script>
	const resources = ["Site Map", "About Us", "Terms Of Service", "Privacy Policy"];
</script>

<footer>
	<!-- not using tables because screw tables -->
	<div id="resources">
		<h3>Resources</h3>
		<nav>
			<ul>
				{#each resources as lname}
					<li><a href="https://youtu.be/dQw4w9WgXcQ?autoplay=1">{lname}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
	<img src="logo.png" alt="Omnipotence Logo" />
</footer>

<style lang="scss">
	$text-color: rgb(208, 219, 213);
	footer {
		padding: 0;
		margin: 0;
		width: 100%;
		background: rgb(14, 25, 31);
		position: relative;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	#resources {
		padding: 0 1.5em 1em 0;
		h3 {
			padding: 1em 0;
			height: 1.5em;
			line-height: 1em;
			margin: 0;
		}
		nav {
			display: flex;
			flex-direction: column;
		}
		a {
			color: $text-color;
		}
		color: $text-color;
		width: 14em;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	img {
		width: 7em;
		height: 7em;
		margin-right: 3em;
	}
</style>
