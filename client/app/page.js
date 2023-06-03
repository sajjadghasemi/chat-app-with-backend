"use client";

import React from "react";
import Login from "./_components/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./_components/Dashboard";
import { ContactsProvider } from "@/contexts/ContactsProvider";
import { ConversationsProvider } from "@/contexts/ConversationsProvider";
import { SocketProvider } from "@/contexts/SocketProvider";
import { ToastProvider } from "@/contexts/ToastProvider";

const Page = () => {
    const [id, setId] = useLocalStorage("id");

    const dashboard = (
        <SocketProvider id={id}>
            <ToastProvider>
                <ContactsProvider>
                    <ConversationsProvider id={id}>
                        <Dashboard id={id} />
                    </ConversationsProvider>
                </ContactsProvider>
            </ToastProvider>
        </SocketProvider>
    );

    return id ? dashboard : <Login onIdSubmit={setId} />;
};

export default Page;
