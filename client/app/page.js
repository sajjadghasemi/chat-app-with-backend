"use client";

import React from "react";
import Login from "./_components/Login";
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./_components/Dashboard";
import { ContactsProvider } from "@/contexts/ContactsProvider";
import { ConversationsProvider } from "@/contexts/ConversationsProvider";
import { SocketProvider } from "@/contexts/SocketProvider";

const Page = () => {
    const [id, setId] = useLocalStorage("id");

    const dashboard = (
        <SocketProvider id={id}>
            <ContactsProvider>
                <ConversationsProvider id={id}>
                    <Dashboard id={id} />
                </ConversationsProvider>
            </ContactsProvider>
        </SocketProvider>
    );

    return id ? dashboard : <Login onIdSubmit={setId} />;
};

export default Page;
