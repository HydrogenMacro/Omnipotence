import { promises as fs } from "node:fs";
export async function POST({ request }) {
	//handles all post requests
	try {
		const json = JSON.parse(await request.text());
		console.log(json);
		//const {action, username, sid, setAmount=1} = json
		const userInfo = (await fs.readFile(process.cwd() + `/user_db/${json.username}.txt`)).split(
			"\n"
		);
		//see src/signup/+page.server.svelte:63 for file structure
		if (userInfo[2] !== json.sid) return new Response("no")
		switch (json.action) {
			case "get":
				return new Response(userInfo[1]);
				break;

			case "set":
				userInfo[1] = String(Number(userInfo[1]) + json.setAmount ?? 1);
				return new Response("yes");
				break;
		}
		return new Response("no")
	} catch(e) {
		console.log(e);
		return new Response("noo")
	}
}
