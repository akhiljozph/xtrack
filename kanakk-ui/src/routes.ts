import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import type { IRoutesConfig } from "./routes.types";

export const routes: IRoutesConfig[] = [
    { path: '/sign-in', element: SignIn },
    { path: '/sign-up', element: SignUp }
]