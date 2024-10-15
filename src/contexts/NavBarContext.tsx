import About from "@/components/About";
import Contact from "@/components/Contact";
import Dashboard from "@/components/Dashboard";
import Home from "@/components/Home";
import { createContext, ReactNode, useContext, useState } from "react";
import { Alert, Container } from "reactstrap";
import { useAuth } from "./AuthContext";

interface NavBarContextProps {
    currentContent: ReactNode;
    setCurrentContent: (content: ReactNode) => void;
    set: (content: string) => void;
}


export const NavBarContext = createContext<NavBarContextProps | undefined>(undefined);

export const useNavBar = () => {
    const context = useContext(NavBarContext);
    if (!context) {
        throw new Error('useNavBar must be used within a NavBarProvider');
    }
    return context;
}

interface NavBarProviderProps {
    children: ReactNode;
}

export const NavBarProvider = ({ children }: NavBarProviderProps) => {
    const [currentContent, setCurrentContent] = useState<ReactNode>(<Home />);
    const set = (section: string) => {
        switch (section) {
            case "dashboard":
              
                setCurrentContent(<Dashboard />);
                break;
            case "about":
                setCurrentContent(<About />);
                break;
            case "contact":
                setCurrentContent(<Contact />);
                break;
            case "alert-forbidden":
                setCurrentContent(<Container><Alert color="danger">You must be logged in to view this page</Alert></Container>);
                break;
        }

    return (
        <NavBarContext.Provider value={{ currentContent, setCurrentContent, set }}>
            {children}
        </NavBarContext.Provider>
    );
        
    }



    return (
        <NavBarContext.Provider value={{ currentContent, setCurrentContent, set }}>
            {children}
        </NavBarContext.Provider>
    );
}