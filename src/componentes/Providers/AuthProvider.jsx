import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
  }
  
  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

    const authInfo = {
      user,
      loader,
      createUser,
      signIn
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
