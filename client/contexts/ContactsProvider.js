"use client";

import useLocalStorage from "@/app/hooks/useLocalStorage";
import React, { useContext } from "react";

const ContactsContext = React.createContext();

export function useContacts() {
    return useContext(ContactsContext);
}

export function ContactsProvider({ children }) {
    const [contacts, setContacts] = useLocalStorage("contacts", []);

    function createContact(id, name) {
        setContacts((prevContacts) => {
            return [...prevContacts, { id, name }];
        });
    }

    return (
        <ContactsContext.Provider value={{ contacts, createContact }}>
            {children}
        </ContactsContext.Provider>
    );
}
