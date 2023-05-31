import { useConversations } from "@/contexts/ConversationsProvider";
import React from "react";

const Conversation = () => {
    const { conversations, selectConversationIndex } = useConversations();

    return (
        <ul className="p-2 flex flex-col-reverse gap-y-3">
            {conversations.map((conversation, index) => (
                <li
                    className={`border-b border-gray-400 h-8 flex font-bold transition-all duration-500 text-teal-800 ${
                        conversation.selected && "border-r-4 border-gray-700"
                    }`}
                    key={index}
                    onClick={() => selectConversationIndex(index)}
                >
                    {conversation.recipients
                        .map((recipient) => recipient.name)
                        .join(" & ")}
                </li>
            ))}
        </ul>
    );
};

export default Conversation;
