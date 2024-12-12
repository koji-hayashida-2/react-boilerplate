import {FC} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage/LoginPage.tsx";
import {AuthProvider} from "./context/AuthContext.tsx";
import {RootPage} from "./pages/RootPage/RootPage.tsx";
import {ProtectedRoute} from "./components/common/ui/ProtectedRoute.tsx";
import {NotFoundPage} from "./pages/commonPages/NotFoundPage.tsx";


export const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFoundPage/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/",
      element: (
          <ProtectedRoute>
            <RootPage/>
          </ProtectedRoute>
      )
    },
  ])

  return (
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
  )
}