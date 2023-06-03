"use client";

import ToastContainer from "@/app/_components/ToastContainer";
import React, { useContext, useState } from "react";

const ToastContext = React.createContext();

export function useToast() {
    return useContext(ToastContext);
}

export function ToastProvider({ children }) {
    const [toast, setToast] = useState(null);

    function createToast(text) {
        setToast(text);
        setTimeout(() => {
            setToast(null);
            console.log(toast);
        }, 3000);
    }

    return (
        <ToastContext.Provider value={{ toast, createToast }}>
            <ToastContainer />
            {children}
        </ToastContext.Provider>
    );
}
