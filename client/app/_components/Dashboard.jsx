import React from "react";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
import { useConversations } from "@/contexts/ConversationsProvider";

const Dashboard = ({ id }) => {
    const { selectedConversation } = useConversations();

    return (
        <div className="h-screen flex">
            <Sidebar id={id} />
            {selectedConversation && <OpenConversation />}
        </div>
    );
};

export default Dashboard;
