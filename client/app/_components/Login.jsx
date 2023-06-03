"use client";

import React, { useRef } from "react";
import { v4 as uuidV4 } from "uuid";

export default function Login({ onIdSubmit }) {
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onIdSubmit(idRef.current.value);
    }

    function createNewId() {
        onIdSubmit(uuidV4());
    }

    return (
        <div className="flex justify-center items-center h-screen mx-auto">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col p-2 border-2 rounded-lg gap-y-3"
            >
                <div className="flex gap-3 justify-center items-center">
                    <label>Enter Your Id:</label>
                    <input
                        className="rounded-md border-2 py-1 px-3 outline-none focus:border-green-600"
                        type="text"
                        ref={idRef}
                        required
                        placeholder="Enter your number"
                    />
                </div>
                <div className="flex flex-col gap-y-1 items-center">
                    <button
                        type="submit"
                        className="bg-green-700 w-full px-4 py-1 rounded-md text-white font-bold hover:bg-green-800"
                    >
                        Login
                    </button>
                    <span
                        className="text-gray-800 px-2 py-1 rounded-md"
                    >
                        Or
                    </span>
                    <button
                        onClick={createNewId}
                        className="bg-gray-600 w-full px-4 py-1 rounded-md text-white font-bold hover:bg-gray-700"
                    >
                        Generate a random number
                    </button>
                </div>
            </form>
        </div>
    );
}
