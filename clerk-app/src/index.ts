
import { makeApp } from "./app.js"
import { loadEnv } from "./envs.js"
void (async () => {
	loadEnv()
	const server = makeApp()
	const PORT = Number(8081)
	server.listen(PORT, () => { console.log(`App on port ${PORT}! :)`) })
})()
