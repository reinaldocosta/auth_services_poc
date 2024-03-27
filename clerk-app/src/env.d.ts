declare global {
	namespace NodeJS {
		interface ProcessEnv {
			CLERK_SECRET_KEY: string
		}
	}
}