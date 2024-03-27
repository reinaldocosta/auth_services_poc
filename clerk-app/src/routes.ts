import { NextFunction, Router } from "express"
import { isAuthenticated } from "./middleware.js"
import { Request, Response } from "express"
import { ClerkExpressRequireAuth, RequireAuthProp } from "@clerk/clerk-sdk-node"


export const appRoutes = (): Router => {
	const router = Router()

	router.get('/', [], (req: Request, res: Response) => {
		res.send('Hello World!')
	})

	router.get(
		'/protected-route', [ClerkExpressRequireAuth()], (req: RequireAuthProp<Request>, res: Response) => {
			console.log("Hey", req.auth)
			res.json(req.auth);
			//res.send('ops')
		}
	);

	router.use((err, req, res, next: NextFunction) => {
		console.error(err.stack);
		res.status(401).send('Unauthenticated!');
	});



	return router
}