import { createContext, useContext, useState } from "react";
import userMock from '../api/usuarioMock/samuelvaleriano@gmail.com.json';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

const signIn = (email, password) => {
    if (email === userMock.email && password === userMock.senha) {
        setUser(userMock);
        return true;
    } else {

        throw new Error('Credenciais inválidas');
    }
};

    const signOut = () => {
        setUser(null);
    };


    return<UserContext.Provider value={{ user, setUser, signIn, signOut }}>
        {children}
    </UserContext.Provider>
}

export function useUser() {
    return useContext(UserContext);    
}