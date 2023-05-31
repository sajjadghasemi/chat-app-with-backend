import { useContacts } from "@/contexts/ContactsProvider";
import React from "react";

export default function Contacts() {
    const { contacts } = useContacts();

    return (
        <ul className="p-2 flex flex-col-reverse gap-y-3">
            {contacts.map((contact) => (
                <li
                    className="border-b h-8 flex text-teal-800"
                    key={contact.id}
                >
                    {contact.name}
                </li>
            ))}
        </ul>
    );
}
