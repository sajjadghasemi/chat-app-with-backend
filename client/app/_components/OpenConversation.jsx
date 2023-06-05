import { useConversations } from "@/contexts/ConversationsProvider";
import React, { useState, useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoSendSharp } from "react-icons/io5";

const OpenConversation = () => {
    const [text, setText] = useState("");
    const [send, setSend] = useState(false);
    const { sendMessage, selectedConversation, selectConversationIndex } =
        useConversations();
    const divRef = useRef(null);

    const handleSubmit = (e) => {
        setTimeout(() => {
            setSend(true);
        }, 50);
        e.preventDefault();
        sendMessage(
            selectedConversation.recipients.map((recipient) => recipient.id),
            text
        );
        setText("");
        setSend(false);
    };

    const scrollToBottom = () => {
        divRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [selectedConversation]);

    return (
        <div
            className={`flex flex-col h-full ${
                !selectedConversation ? "hidden md:flex" : "w-full md:w-8/12"
            }`}
        >
            <div className="flex flex-col w-full h-screen">
                <p className="flex items-center border-l-2 px-4 bg-gray-800 text-white font-semibold h-[8.8%] w-full">
                    <span className="mr-2">
                        {selectedConversation && (
                            <AiOutlineArrowLeft
                                onClick={() => selectConversationIndex(null)}
                                className="text-xl cursor-pointer"
                            />
                        )}
                    </span>
                    <span>Online Chat</span>
                </p>
                <div
                    id="divRef"
                    className="scroll-smooth p-2 bg-gray-300 h-[81.2%] w-full overflow-auto flex flex-col"
                >
                    {selectedConversation.messages.map((message, index) => (
                        <Fade
                            key={index}
                            direction="up"
                            duration={800}
                            cascade
                            triggerOnce
                        >
                            <div
                                className={`flex my-1 w-full ${
                                    message.fromMe
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <p
                                    className={`flex flex-col overflow-hidden break-words px-3 py-1 rounded-md font-semibold text-white ${
                                        message.fromMe
                                            ? "justify-end bg-blue-700"
                                            : "justify-start bg-gray-700"
                                    }`}
                                >
                                    {message.text}
                                    <span
                                        className={`text-[.65rem] text-slate-400 ${
                                            message.fromMe
                                                ? "text-right"
                                                : "text-left"
                                        }`}
                                    >
                                        <strong>
                                            {message.fromMe
                                                ? "You"
                                                : message.senderName}
                                        </strong>
                                    </span>
                                </p>
                            </div>
                        </Fade>
                    ))}
                    <div ref={divRef} />
                </div>
                <div className="h-[10%] w-full flex bg-blue-100">
                    <form onSubmit={handleSubmit} className="flex w-full">
                        <textarea
                            className="w-[88%] px-2 py-4 placeholder-slate-700 bg-blue-100 text-md outline-none resize-none"
                            rows="1"
                            placeholder="Enter your text..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSubmit(e);
                                }
                            }}
                            required
                        ></textarea>
                        <button
                            className="flex overflow-hidden justify-center items-center w-[12%] cursor-pointer"
                            disabled={text === ""}
                            type="submit"
                        >
                            <IoSendSharp
                                className={`text-3xl text-green-800 ${
                                    send && "animate-wiggle"
                                }`}
                            />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OpenConversation;
