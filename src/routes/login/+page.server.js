import { fail, redirect } from "@sveltejs/kit";
import { promises as fs } from "node:fs";
import * as crypto from "node:crypto";
export const actions = {
	default: async ({ request, cookies }) => {
		const userInfo = Object.create(null);
		for (const [fieldName, fieldValue] of await request.formData()) {
			userInfo[fieldName] = fieldValue;
		}
		const filePath = process.cwd() + `/user_db/${userInfo.username ?? "public"}.txt`;
		try {
			const f = await fs.readFile(filePath, { encoding: "utf8" });//throws if file (and subseuently user) doesnt exist
			//console.log(f, f.split("\n")[0], userInfo.password);
			if (!(f.split("\n")[0] === userInfo.password)) {
				return fail(403, "Wrong password");
			}
		} catch (e) {
			return fail(404, "Account not found");
		}
		cookies.set("sid", await generateSessionID(userInfo.username), { path: "/", secure: false, maxAge: 60 * 60 * 24 * 30 });
		cookies.set("username", userInfo.username, { path: "/", secure: false, maxAge: 60 * 60 * 24 * 30 });
		//console.log(cookies.get("sid")) //this works but the one in /app/home doesnt???
		throw redirect(301, "/app/home")
	}
};
async function generateSessionID(uname) {
	const filePath = process.cwd() + `/user_db/${uname}.txt`;
	const ufile = await fs.readFile(filePath, { encoding: "utf8" });
	const uinfo = ufile.split("\n");
	uinfo[2] = crypto.randomUUID();
	await fs.writeFile(filePath, uinfo.join("\n"));
	console.log(uinfo[2]);
	return uinfo[2];
}
