import { useToast } from "@/contexts/ToastProvider";
import React from "react";

const ToastContainer = () => {
    const { toast } = useToast();
    return (
        <>
            {toast && (
                <div
                    className={`fixed z-50 top-8 right-8 left-8 py-5 rounded-xl text-white font-semibold text-center bg-slate-950 ${
                        toast && "animate-toast"
                    }`}
                >
                    {toast}
                </div>
            )}
        </>
    );
};

export default ToastContainer;
