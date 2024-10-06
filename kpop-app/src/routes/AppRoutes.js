// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import Dashboard from '../components/dashboard/Dashboard'; // Import Dashboard
import NotFound from '../components/errors/NotFound';
import '../assets/styles/Transitions.css'; 

const AppRoutes = () => {
    return (
        <TransitionGroup>
            <Routes>
                <Route
                    path="/"
                    element={
                        <CSSTransition timeout={600} classNames="fade">
                            <LoginForm />
                        </CSSTransition>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <CSSTransition timeout={600} classNames="fade">
                            <RegisterForm />
                        </CSSTransition>
                    }
                />
                <Route
                    path="/dashboard" // Đường dẫn đến Dashboard
                    element={
                        <CSSTransition timeout={600} classNames="fade">
                            <Dashboard />
                        </CSSTransition>
                    }
                />
                <Route
                    path="*"
                    element={
                        <CSSTransition timeout={600} classNames="fade">
                            <NotFound />
                        </CSSTransition>
                    }
                />
            </Routes>
        </TransitionGroup>
    );
};

export default AppRoutes;
