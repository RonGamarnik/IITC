import api from "../../services/api.service";
import  { createContext, useEffect, useState, ReactNode } from "react";
import { toast } from "../ui/use-toast";

interface IUser {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  createdAt?: string;
}

interface IAuthContext {
  loggedInUser: IUser | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
}

const initialAuthContext: IAuthContext = {
  loggedInUser: null,
  login: async () => {},
  logout: () => {},
};

export const AuthContext = createContext<IAuthContext>(initialAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loggedInUser, setLoggedInUser] = useState<IUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && loggedInUser === null) {
      createLoggedInUser();
    }
  }, [loggedInUser]);

  async function createLoggedInUser() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await api.get("/users");
        setLoggedInUser({
          userId: data._id,
          username: data.username,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          token,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        logout(); // Log out user if there's an error fetching data
      }
    }
  }

  const login = async (token: string) => {
    localStorage.setItem("token", token);
    const { data } = await api.get("/users");
    setLoggedInUser({
      userId: data._id,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      token,
      createdAt: data.createdAt,
    });
    toast({
      title: "Logged in successfully",
      description: `${data.firstName} ${data.lastName}`,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
