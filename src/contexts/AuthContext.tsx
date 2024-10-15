"use client";

import { performLogin } from "@/api/auth";
import Session from "@/entities/Session";
import AuthObj from "@/entities/AuthObj";
import React, { useState } from "react";
import { createContext, ReactNode, useContext } from "react";

interface LoginContextProps {
    isLoggedIn: boolean;
    login: (username: string, password: string) => void;
    logout: () => void;
    session: Session | null;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<LoginContextProps| undefined>(undefined);


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useLogin must be used within a LoginProvider');
    }
    return context;

}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [session, setSession] = useState<Session | null>(null);

    const login = (username: string, password: string) => {
        console.log("Logging in with username: ", username, " and password: ",password)
        const authObj = new AuthObj(username, password);

        if (authObj.validate()) {

            performLogin(authObj)
            .then(() => {
                const newSession = new Session("testUserId", 1);
                setSession(newSession);
                setIsLoggedIn(true);
            })
            .catch(() => {
                setIsLoggedIn(false);
                setSession(null);
            });


        } else {
            setIsLoggedIn(false);
            setSession(null);
        }
    }   


    const logout = () => {
        setIsLoggedIn(false);
        setSession(null);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, session }}>
            {children}
        </AuthContext.Provider>
    );

}