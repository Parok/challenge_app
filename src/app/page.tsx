"use client";

import React from 'react';
import { Container } from 'reactstrap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';	
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './globals.css'; // Import global styles including Tailwind CSS
import { AuthProvider } from '@/contexts/AuthContext';
import { NavBarProvider, useNavBar, NavBarContext } from '@/contexts/NavBarContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {


  return (

    <AuthProvider>
    <NavBarProvider>	

    <div>
      <Header />
      <NavBar />
      <NavBarContext.Consumer>
        {(context) => (
          <Container>
            {context?.currentContent || null}
          </Container>
        )}
      </NavBarContext.Consumer>
      {children}

      <Footer />
    </div>
    </NavBarProvider>

    </AuthProvider>
  );
};

export default Layout;