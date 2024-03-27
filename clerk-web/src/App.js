import {
	ClerkProvider,
	SignedIn,
	SignIn,
	SignUp,
	UserButton,
} from "@clerk/clerk-react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"

const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

function PublicPage() {
	return (
		<>
			<h1>Public page</h1>
			<a href="/protected">Go to protected page</a>
		</>
	)
}

function ProtectedPage() {
	return (
		<>
			<h1>Protected page</h1>
			<UserButton />
		</>
	)
}

function ClerkProviderWithRoutes() {
	const navigate = useNavigate()

	return (
		<ClerkProvider
			publishableKey={clerk_pub_key}
			navigate={(to) => navigate(to)}>
			<Routes>
				<Route path="/" element={<PublicPage />} />
				<Route
					path="/sign-in/*"
					element={<SignIn routing="path" path="/sign-in" />}
				/>
				<Route
					path="/sign-up/*"
					element={<SignUp routing="path" path="/sign-up" />}
				/>
				<Route
					path="/protected"
					element={
						<SignedIn>
							<ProtectedPage />
						</SignedIn>
					}
				/>
			</Routes>
		</ClerkProvider>
	)
}

function App() {
	return (
		<BrowserRouter>
			<ClerkProviderWithRoutes />
		</BrowserRouter>
	)
}
export default App