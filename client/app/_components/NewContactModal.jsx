import { useContacts } from "@/contexts/ContactsProvider";
import React, { useRef } from "react";

export default function NewContactModal({ closeModal }) {
    const idRef = useRef();
    const nameRef = useRef();
    const { createContact } = useContacts();

    function handleSubmit(e) {
        e.preventDefault();

        createContact(idRef.current.value, nameRef.current.value);
        closeModal();
    }

    return (
        <div className="flex flex-col gap-y-3 justify-center items-center w-11/12">
            <h2 className="text-xl">Create Contact</h2>
            <div className="">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
                    <input
                        className="outline-none border-[1px] border-slate-400 rounded px-2 py-1"
                        placeholder="Enter your id"
                        type="text"
                        ref={idRef}
                        required
                    />
                    <input
                        className="outline-none border-[1px] border-slate-400 rounded px-2 py-1"
                        placeholder="Enter your name"
                        type="text"
                        ref={nameRef}
                        required
                    />
                    <button
                        className="bg-green-700 rounded text-white py-1 font-semibold hover:bg-green-800"
                        type="submit"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
}
