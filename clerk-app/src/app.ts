import express, { Express } from 'express'
import { appRoutes } from './routes.js'
import cors from 'cors'

export const makeApp = (): Express => {
	const app = express()
	app.use(cors())
	app.use(appRoutes())
	return app
}
