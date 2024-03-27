import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node"
import { Request, Response, NextFunction } from "express"

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
	// Loading this middleware inside a functions doesnt work
	ClerkExpressRequireAuth()
}