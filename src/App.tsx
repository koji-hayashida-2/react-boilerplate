import {FC} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage/LoginPage.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";


export const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    }
  ])

  return (
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
  )
}