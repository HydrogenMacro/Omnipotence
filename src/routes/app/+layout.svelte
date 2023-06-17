<div id="bg">
	<div id="bg-white-overlay" />
</div>
<main>
	<section><slot id="contents" /></section>
</main>

<style lang="scss">
	/*i should probably actually use scss, but who cares*/
	main {
		position: relative;
		width: 100vw;
		font-family: $main-font;
		z-index: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#bg {
		position: fixed;
		background: url("$lib/green-warp.gif");
		background-size: cover;
		width: 100vw;
		height: 100%;
		height: 100dvh;
	}
	#bg-white-overlay {
		position: fixed;
		background: rgb(190 190 190 / 0.6);
		width: 100vw;
		height: 100%;
		height: 100dvh;
	}
	#contents {
		position: relative;
		z-index: 5;
	}
	section {
		width: calc(100% - 2em);
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		top: 1em;
		background: rgb(235 235 235 / 0.9);
		border-radius: 2em;
		min-height: 10em;
		border: solid rgb(115 115 115 / 0.8) 0.5em;
	}
</style>
