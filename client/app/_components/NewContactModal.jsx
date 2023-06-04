import { useContacts } from "@/contexts/ContactsProvider";
import { useToast } from "@/contexts/ToastProvider";
import React, { useRef } from "react";

export default function NewContactModal({ closeModal }) {
    const idRef = useRef();
    const nameRef = useRef();
    const { createContact } = useContacts();
    const { createToast } = useToast();

    function handleSubmit(e) {
        e.preventDefault();

        createContact(idRef.current.value, nameRef.current.value);
        createToast("Contact added successfully");
        closeModal();
    }

    return (
        <div className="flex flex-col gap-y-3 justify-center items-center w-11/12 p-3">
            <h2 className="text:md md:text-xl">Create Contact</h2>
            <div className="">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
                    <input
                        className="outline-none w-36 md:w-80 border-[1px] border-slate-400 rounded px-2 py-1"
                        placeholder="Enter number"
                        type="text"
                        ref={idRef}
                        required
                    />
                    <input
                        className="outline-none w-36 md:w-80 border-[1px] border-slate-400 rounded px-2 py-1"
                        placeholder="Enter name"
                        type="text"
                        ref={nameRef}
                        required
                    />
                    <button
                        className="bg-gray-700 rounded text-white py-1 font-semibold hover:bg-gray-800"
                        type="submit"
                    >
                        Create contact
                    </button>
                </form>
            </div>
        </div>
    );
}
