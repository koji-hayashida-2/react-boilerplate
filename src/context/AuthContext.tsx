import {createContext, useContext, useEffect, useState, FC, ReactNode} from "react";
import {auth} from "../firebase/auth.ts"
import {onAuthStateChanged, User as FirebaseUser} from "firebase/auth";

// Contextを作成
interface AuthContextType {
  user: FirebaseUser | null; // Firebaseユーザーをそのまま使用
  // TODO: 消す
  loading: boolean;         // 初期認証チェック中かどうか
  logout: () => void;       // ログアウト関数
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Providerコンポーネント
export const AuthProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
      <AuthContext.Provider value={{user, loading, logout}}>
        {children}
      </AuthContext.Provider>
  );
};

// useAuthカスタムフック
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};