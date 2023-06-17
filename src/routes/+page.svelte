<script>
	import Footer from "$lib/Footer.svelte";
	import { onMount } from "svelte";
	onMount(() => {
		const qs = document.querySelector.bind(document); //im lazy ok, and $ is reserved by svelte
		const scrollCullChecker = setInterval(() => {
			const mbcr = qs("main").getBoundingClientRect(); //main bounding client rect
			if (!qs("hgroup")) return clearInterval(scrollCullChecker);
			qs("hgroup").style.height = mbcr.top + "px";
			qs("hgroup").style.top = mbcr.top / 2 + "px"; //hgroup has overflow hidden, so this is culling the text vertically
		}, 80);
	});
</script>

<svelte:head>
	<script>
		window.onload = () => {
			if (localStorage.sid) {
				location.replace("/app/home");
			}
		};
	</script>
</svelte:head>

<div id="background" />
<header>
	<hgroup>
		<h1>Omnipotence</h1>
		<h4>Hypermodern • Elegant • Acute</h4>
	</hgroup>
</header>
<div id="header_space" />
<main>
	<br />
	<h2>Omnipotence</h2>
	<p>
		<!--totally not cgpt generated-->
		As a revolutionary banking site, Omnipotence has redefined the way people manage their finances.
		We are proud to present such an advanced platform that offers unparalleled convenience, security,
		and flexibility. <a href="/login"><b>Login</b></a>, <a href="/signup"><b>Sign Up</b></a>, or
		continue reading to learn about our features.
	</p>
	<h2>We are...</h2>
	<section>
		<h3>Intuitive</h3>
		<p>
			One of the things we focused on with Omnipotence is its user-friendly interface. We have
			designed the site to be intuitive and easy to navigate, with a range of features that make
			managing your accounts a breeze. Whether you need to transfer funds, pay bills, or check your
			balance, everything can be done quickly and easily through our platform.
		</p>
	</section>
	<section>
		<h3>Secure</h3>
		<p>
			At Omnipotence, we take security seriously. We use advanced encryption algorithms to protect
			your information, and all transactions are closely monitored to ensure that they are
			legitimate. You can rest assured that your money is safe and secure at all times.
		</p>
	</section>
	<section>
		<h3>Flexible</h3>
		<p>
			We designed Omnipotence to be very flexible. We offer a range of banking services, including
			checking and savings accounts, loans, and investment options. This means that you can manage
			all of your financial needs in one place, without having to go to redundant banks or financial
			institutions.
		</p>
	</section>
	<p>
		Omnipotence is the future of banking. With its unparalleled technology and user-friendly
		interface, it offers unmatched convenience, security, and flexibility. You can become a part of
		the future by signing up, with no strings attatched, and easily.<br />
	</p>
	<menu id="sign-in-options">
		<li><a href="/signup">Sign Up</a></li>
		<li><a href="/login">Log In</a></li>
	</menu>
</main>
<Footer />

<style lang="scss">
	:global(html),
	:global(body) {
		overscroll-behavior: none;
	}
	#background {
		position: fixed;
		background: url("$lib/green-warp.gif");
		background-size: cover;
		width: 100vw;
		top: -50vh;
		height: 200vh;
		z-index: 0;
	}
	header,
	main {
		padding: 0 1em;
		width: 100vw;
		display: flex;
		flex-direction: column;
	}
	header {
		position: fixed;
		height: 12em;
		z-index: 2;
		display: flex;
		align-items: center;
	}
	main {
		position: relative;
		background: rgb(130 150 130 / 0.5);
		z-index: 6;
		border: 0.55em solid rgb(25 31 27);
		backdrop-filter: blur(0.6em);
		-webkit-backdrop-filter: blur(0.6em);
	}
	hgroup {
		width: 100%;
		height: 100%;
		color: rgb(255 255 255 / 0.1);
		overflow-y: hidden;
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
	}
	h1,
	h4 {
		margin: 0;
		font-family: $title-font;
		text-align: center;
		animation: 7s ease-in-out titleblureffect infinite;
	}
	h1 {
		padding: 2em 0 0.5em;
	}
	h2,
	h3 {
		text-align: center;
	}
	main,
	p,
	h2 {
		font-family: $main-font;
	}
	#header_space {
		width: 100%;
		height: 12em;
	}
	#sign-in-options {
		padding: 0;
		margin: 0;
		height: 4em;
		list-style-type: none;
		display: flex;
		align-items: center;
		justify-content: space-around;
		li {
			text-align: center;
			a {
				border: solid 0.2em rgb(50 80 65 / 0.6);
				border-radius: 1em;
				vertical-align: middle;
				line-height: 2.1em;
				text-decoration: none;
				background: rgb(70 120 90 / 0.3);
				color: rgb(30 60 50);
				padding: 0.5em 1em;
				margin: auto;
			}
		}
	}
</style>
