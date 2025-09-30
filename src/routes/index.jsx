import { createBrowserRouter } from "react-router";
import App from "../App";
import MainPage from "../pages/main/Main.page";
import RegistrationForm from "../features/auth/components/RegistrationForm/RegistrationForm";


const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: "/registration",
                element: <RegistrationForm />
            }
        ]
    }


])

export default router