import { createContext, useContext, useState } from "react";
import userMock from '../api/usuarioMock/samuelvaleriano@gmail.com.json';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(userMock);

    return<UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}

export function useUser() {
    return useContext(UserContext);    
}