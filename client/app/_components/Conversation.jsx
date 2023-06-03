import { useConversations } from "@/contexts/ConversationsProvider";
import React from "react";

const Conversation = () => {
    const { conversations, selectConversationIndex } = useConversations();

    return (
        <ul className="p-1 flex flex-col-reverse gap-y-1">
            {conversations.map((conversation, index) => (
                <li
                    className={`border rounded-md flex text-white font-semibold p-2 cursor-pointer hover:bg-gray-900 ${
                        conversation.selected && "border-r-8 border-gray-100"
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
