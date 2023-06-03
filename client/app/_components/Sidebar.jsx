import React, { useState } from "react";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";
import Conversation from "./Conversation";
import Contacts from "./Contacts";
import { RiContactsFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useConversations } from "@/contexts/ConversationsProvider";

const Sidebar = ({ id }) => {
    const [activeKey, setActiveKey] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const conversationsOpen = activeKey === 1;
    const { selectedConversation } = useConversations();

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <div
            className={`bg-gray-800 h-full overflow-auto flex flex-col justify-between w-full md:w-4/12 ${
                selectedConversation ? "hidden md:flex" : "w-full md:w-4/12"
            }`}
        >
            <div className="flex flex-col">
                <div className="w-full flex">
                    <div className="p-4 w-full border-b-2 text-white font-semibold flex items-center">
                        {conversationsOpen ? (
                            "Conversation"
                        ) : (
                            <span className="flex gap-x-3 items-center">
                                <AiOutlineArrowLeft
                                    className="text-xl cursor-pointer"
                                    onClick={() => setActiveKey(1)}
                                />
                                Contacts
                            </span>
                        )}
                    </div>
                </div>
                <div>{conversationsOpen ? <Conversation /> : <Contacts />}</div>
            </div>

            <div className="p-2 border-slate-900 flex flex-col gap-y-4">
                {activeKey !== 2 && (
                    <RiContactsFill
                        onClick={() => setActiveKey(2)}
                        className="text-5xl ml-3 text-gray-900 bg-gray-100 p-1 rounded-full cursor-pointer transition-all hover:bg-gray-300 hover:-translate-y-2"
                    />
                )}
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-gray-100 rounded-md py-2 text-gray-900 hover:bg-gray-300"
                >
                    New {conversationsOpen ? "Conversation" : "Contact"}
                </button>
                <span className="text-gray-200 text-xs">Your number: {id}</span>
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
