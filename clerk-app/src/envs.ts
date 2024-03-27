import env from 'env-var'

type EnvVars = {
	CLERK_SECRET_KEY: string
}


export const loadEnv = (): EnvVars => {
	return {
		CLERK_SECRET_KEY: env.get('CLERK_SECRET_KEY').required().asString()

	}
}