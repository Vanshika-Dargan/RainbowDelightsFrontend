import React from 'react';
import {useState} from "react";
import { IoPerson } from "react-icons/io5";

const OperatorChat = () => {
    const messages = [
        { id: 1, text: "Hello!", sender: "user" },
        { id: 2, text: "Hi there!", sender: "operator" },
        { id: 3, text: "How can I assist you?", sender: "operator" },
        { id: 4, text: "I'm interested in your product.", sender: "user" },
        { id: 5, text: "Sure, which product are you interested in?", sender: "operator" },
        { id: 6, text: "Sure, which product are you interested in?", sender: "operator" },
    ];

    const [isClientassigned,AssignClient]=useState(false);
    const [clientInQueue,updateClientInQueue]=useState(0);
    const [clientName,UpdateClientName]=useState("");




    return (
        <div className="flex flex-col h-full bg-gray-100 rounded border-gray-300" style={{ width: "80%", height: "100vh"}}>
            <div className="bg-purple-600 text-white py-3 px-4 flex"  style={{background:"#2a3042"}}>
                {!isClientassigned ?
                    (
                        <>
                        <div style={{width:"50%"}}>
                            <h3 className="text-xl font-bold mt-1">CLIENT : ----</h3>
                        </div>

                    <div className="flex justify-end " style={{width:"50%"}}>

                        <div className="flex items-center mr-4">
                            <span className="text-lg font-bold mr-1">{clientInQueue}</span>
                            <IoPerson />
                        </div>

                        {/* Request section */}
                        <button className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600">Request Client</button>
                    </div>
                        </>

                    ):(<>
                        <div style={{width:"50%"}}>
                            <h3 className="text-xl font-bold mt-1">CLIENT : {clientName}</h3>
                        </div>

                        <div className="flex justify-end " style={{width:"50%"}}>


                            <button className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600">Close Connection</button>
                        </div>
                    </>)}

            </div>
            <div className="flex flex-col h-5/6 overflow-y-scroll p-4">
                {messages.map(message => (
                    <div key={message.id} className={`p-2 mb-2 rounded-lg ${message.sender === "user" ? "bg-indigo-500 text-white self-end" : "bg-gray-300 text-gray-800 self-start"}`} style={{ maxWidth: "50%" }}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="flex items-center border-t border-gray-300 mx-2">
                <input type="text" placeholder="Type your message..." className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none h-12" />
                <button className="bg-purple-600 text-white py-2 px-4 rounded-r hover:bg-purple-700 h-12">Send</button>
            </div>
        </div>
    );
};

export default OperatorChat;
