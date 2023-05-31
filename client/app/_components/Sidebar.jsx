import React, { useState } from "react";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";
import Conversation from "./Conversation";
import Contacts from "./Contacts";

const Sidebar = ({ id }) => {
    const [activeKey, setActiveKey] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const conversationsOpen = activeKey === 1;

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <div className="w-4/12 bg-gray-300 h-full overflow-auto flex flex-col justify-between">
            <div className="flex flex-col">
                <div className="w-full flex">
                    <button
                        onClick={() => setActiveKey(1)}
                        className={`p-2 border-[1px] border-slate-900 w-full transition-all ${
                            conversationsOpen &&
                            "border-b-0 border-r-0 bg-gray-700 text-white"
                        }`}
                    >
                        Conversation
                    </button>
                    <button
                        onClick={() => setActiveKey(2)}
                        className={`p-2 border-[1px] border-slate-900 w-full transition-all ${
                            !conversationsOpen &&
                            "border-b-0 border-l-0 bg-gray-700 text-white"
                        }`}
                    >
                        Contacts
                    </button>
                </div>
                <div>{conversationsOpen ? <Conversation /> : <Contacts />}</div>
            </div>
            <div className="p-2 border-t border-slate-900 flex flex-col">
                <span className="text-sm text-gray-700">Your Id: {id}</span>
                <button
                    onClick={() => setModalOpen(true)}
                    className="mt-2 bg-green-700 rounded-md text-white hover:bg-green-800"
                >
                    New {conversationsOpen ? "Conversation" : "Contact"}
                </button>
            </div>
            {modalOpen && (
                <div className="fixed top-6 left-6 right-6 flex justify-center items-center w-11/12 h-auto z-20 bg-white rounded-md p-2">
                    {conversationsOpen ? (
                        <NewConversationModal closeModal={closeModal} />
                    ) : (
                        <NewContactModal closeModal={closeModal} />
                    )}
                </div>
            )}
            {modalOpen && (
                <div
                    onClick={() => setModalOpen(false)}
                    className="fixed top-0 left-0 w-full h-full z-10 bg-black opacity-70"
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
