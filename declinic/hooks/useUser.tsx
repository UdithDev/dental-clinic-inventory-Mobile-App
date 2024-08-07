import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserSession = {
    username: string;
    email: string;
    role: "INTERN" | "MANAGER" | "ADMIN";
    token: string;
  };

  interface IUseUser {
    user: UserSession | undefined;
    setUser: React.Dispatch<React.SetStateAction<UserSession | undefined>>;
    logOut: () => void;
  }

  const useUser = (): IUseUser => {
    const [user, setUser] = React.useState<UserSession>();
  
    React.useEffect(() => {
      const fetchUser = async () => {
        const userAsString = await AsyncStorage.getItem("userSession");
        const user = userAsString ? JSON.parse(userAsString) : undefined;
        setUser(user);
      };
      fetchUser();
    }, []);
  
    const logOut = async () => {
      await AsyncStorage.removeItem("userSession");
      // Assuming navigation is used in React Native for page changes
      // Replace with actual navigation logic if different
      // navigation.navigate("Home");
    };
  
    return {
      user,
      setUser,
      logOut,
    };
  };

  export default useUser;