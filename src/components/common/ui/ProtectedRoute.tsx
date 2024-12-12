import {FC, ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../../context/AuthContext.tsx";

export const ProtectedRoute: FC<{ children: ReactNode }> = ({children}) => {
  const {user} = useAuth();

  if (!user) {
    // ログインしていない場合は "/login" ページにリダイレクト
    return <Navigate to="/login" replace/>;
  }
  // ログイン済みの場合は通常の子要素をレンダリング
  return <>{children}</>;
};