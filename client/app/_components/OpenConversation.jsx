import { useConversations } from "@/contexts/ConversationsProvider";
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const OpenConversation = () => {
    const [text, setText] = useState("");
    const { sendMessage, selectedConversation } = useConversations();
    const divRef = document.getElementById("divRef");

    const handleSubmit = (e) => {
        e.preventDefault();

        sendMessage(
            selectedConversation.recipients.map((recipient) => recipient.id),
            text
        );
        setText("");
    };

    useEffect(() => {
        if (divRef?.scrollHeight) {
            divRef.scrollTop = divRef.scrollHeight;
        }
    }, [selectedConversation]);

    return (
        <div className="flex flex-col w-8/12 h-full">
            <div
                id="divRef"
                className="p-2 bg-gray-100 h-5/6 w-full overflow-auto flex flex-col"
            >
                {selectedConversation.messages.map((message, index) => {
                    return (
                        <Fade
                            direction="up"
                            duration={800}
                            cascade
                            triggerOnce
                            key={index}
                        >
                            <div
                                className={`flex my-1 w-full ${
                                    message.fromMe
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <p
                                    className={`flex flex-col overflow-hidden break-words px-3 py-1 rounded-md text-white ${
                                        message.fromMe
                                            ? "bg-blue-600"
                                            : "bg-gray-600"
                                    }`}
                                >
                                    {message.text}
                                    <span
                                        className={`text-xs ${
                                            message.fromMe
                                                ? "text-right"
                                                : "text-left"
                                        }`}
                                    >
                                        {message.fromMe
                                            ? "You"
                                            : message.senderName}
                                    </span>
                                </p>
                            </div>
                        </Fade>
                    );
                })}
            </div>
            <div className="bg-gray-100 h-1/6 flex items-center px-2 border-t border-gray-800">
                <form onSubmit={handleSubmit} className="flex w-full gap-2">
                    <textarea
                        className="w-10/12 p-2 outline-none resize-none border-2 border-gray-500 rounded-md"
                        rows="3"
                        placeholder="Enter your text..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    ></textarea>
                    <button
                        className="w-2/12 bg-green-700 hover:bg-green-800 font-semibold text-white rounded-md disabled:bg-green-600 disabled:cursor-not-allowed"
                        rows="3"
                        disabled={text === ""}
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OpenConversation;
