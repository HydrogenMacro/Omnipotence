export function load({ cookies }) {
	console.log(cookies.get("sid"));//this doesnt work for some stupid ****** reason
	return {
		sid: cookies.get("sid"),
		username: cookies.get("username")
	};
}
