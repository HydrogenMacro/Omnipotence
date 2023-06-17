<script>
	//dont have time to finish this
	const dqs = document.querySelector.bind(document);
	const vt = dqs("#vmenu-toggle");
	vt.addEventListener("keydown", (e) => {
		if (e.key === " ") vt.onclick?.();
	});
</script>

<div id="vmenu-toggle" role="button"><!--i hate button css--></div>

<style>
	#vmenu-toggle {
	}
</style>
