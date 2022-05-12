// /* eslint-disable react/prop-types */
// import React, { useContext, useState, useEffect } from 'react';
// import { auth } from '../firebase';

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export default function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       // setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const value = { currentUser };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
