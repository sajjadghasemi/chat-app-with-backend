import { useContacts } from "@/contexts/ContactsProvider";
import React from "react";

export default function Contacts() {
    const { contacts } = useContacts();

    return (
        <ul className="p-1 flex flex-col-reverse gap-y-1">
            {contacts.map((contact) => (
                <li
                    className="border rounded-md flex text-white font-semibold p-2 cursor-pointer hover:bg-gray-900"
                    key={contact.id}
                >
                    {contact.name}
                </li>
            ))}
        </ul>
    );
}
