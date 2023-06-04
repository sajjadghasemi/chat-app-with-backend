import { useContacts } from "@/contexts/ContactsProvider";
import { useConversations } from "@/contexts/ConversationsProvider";
import { useToast } from "@/contexts/ToastProvider";
import React, { useState } from "react";

const NewConversationModal = ({ closeModal }) => {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const { contacts } = useContacts();
    const { createConversations } = useConversations();
    const { createToast } = useToast();

    function handleSubmit(e) {
        e.preventDefault();
        if (!selectedContactIds.length) return;
        createConversations(selectedContactIds);
        createToast("Start conversation by click on it.");
        closeModal();
    }

    function handleCheckboxChange(contactId) {
        setSelectedContactIds((prevSelectedContactIds) => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter((prevId) => {
                    return contactId !== prevId;
                });
            } else {
                return [...prevSelectedContactIds, contactId];
            }
        });
    }

    return (
        <div className="flex flex-col gap-y-3 justify-center items-center w-11/12 p-3">
            <h2 className="text-md md:text-xl">Create Conversation</h2>
            <div className="">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            className="flex gap-2 items-center"
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={contact.id}
                                    value={selectedContactIds.includes(
                                        contact.id
                                    )}
                                    className="opacity-0 absolute h-8 w-8"
                                    onChange={() =>
                                        handleCheckboxChange(contact.id)
                                    }
                                />
                                <div className="bg-white border-2 rounded-md border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-gray-500">
                                    <svg
                                        className="fill-current hidden w-3 h-3 text-gray-600 pointer-events-none"
                                        version="1.1"
                                        viewBox="0 0 17 12"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g fill="none" fillRule="evenodd">
                                            <g
                                                transform="translate(-9 -11)"
                                                fill="gray"
                                                fillRule="nonzero"
                                            >
                                                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <label
                                    htmlFor={contact.id}
                                    className="select-none text-lg text-gray-800"
                                >
                                    {contact.name}
                                </label>
                            </div>
                        </div>
                    ))}
                    <button
                        className="bg-gray-700 rounded w-32 text-white py-1 font-semibold hover:bg-gray-800"
                        type="submit"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewConversationModal;
