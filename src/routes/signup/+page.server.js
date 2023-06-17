import { fail, redirect } from "@sveltejs/kit";
import { promises as fs } from "node:fs";
import * as crypto from "node:crypto";
export const actions = {
	//actions handle form reqs
	default: async ({ request, cookies }) => {
		//this doesnt have any rate limiting or anything, so use cloudflare
		const userInfo = Object.create(null);
		for (const [fieldName, fieldValue] of await request.formData()) {
			userInfo[fieldName] = fieldValue;
		}
		if (!isValidUsername(userInfo.username) || !isValidUsername(userInfo.password))
			return fail(
				400,
				"Could not process given data. You may only use alphanumeric/underscores for your username and password."
			);
		const filePath = process.cwd() + `/user_db/${userInfo.username}.txt`;
		try {
			await fs.stat(filePath); //if file does not exist(user doesnt exist), throw
			return fail(400, "Username taken");
		} catch (e) {
			const accountInfo = createAccountInfo(userInfo.password);
			await fs.writeFile(filePath, accountInfo);
			cookies.set("sid", await generateSessionID(userInfo.username), { path: "/", secure: false });
			cookies.set("username", userInfo.username, { path: "/", secure: false });
		  throw redirect(301, "/app/home")
		}
	}
};

function createAccountInfo(pass) {
	return `${pass}
  0
  
  `;
	//ACCOUNT STRUCTURE
	//`
	//- password
	//- acc balance
	//- session ID
	//`
}
async function generateSessionID(uname) {
	const filePath = process.cwd() + `/user_db/${uname}.txt`;
	const ufile = await fs.readFile(filePath, { encoding: "utf8" });
	const uinfo = ufile.split("\n");
	uinfo[2] = crypto.randomUUID();
	await fs.writeFile(filePath, uinfo.join("\n"));
	console.log(uinfo[2]);
	return uinfo[2];
}
function isValidUsername(str) {
	return !(
		typeof str !== "string" ||
		/\W/.test(str) || //\w matches non [A-Za-z1-9]|_ chars
		str.length > 20 ||
		str.length < 3
	);
}
