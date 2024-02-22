import React from 'react';
import '../Chatbox/Chatbox.css'


const Chatbox = () => {
    const messages = [
        { id: 1, text: "Hello!", sender: "user" },
        { id: 2, text: "Hi there!", sender: "operator" },
        { id: 3, text: "How can I assist you?", sender: "operator" },
        { id: 4, text: "I'm interested in your product.", sender: "user" },
        { id: 5, text: "Sure, which product are you interested in?", sender: "operator" },
    ];

    return (
        <div className="flex flex-col h-full overflow-hidden shadow-2xl mx-10 my-5 rounded" style={{height:"100vh"}}>
            <div className="bg-blue-500 text-white py-2 px-4" style={{background:"#742437"}}>
                <h2 className="text-lg font-semibold">Chat</h2>
            </div>
            <div className="flex flex-col h-full overflow-y-auto p-4">
                {messages.map(message => (
                    <div key={message.id} className={`p-2 mb-2 rounded-lg ${message.sender === "user" ? " operator_message text-white self-end" : "bg-gray-400 text-black self-start"}`} style={{ maxWidth: "50%" }}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="flex items-center border-t border-gray-300 mx-2 my-5">
                <input type="text" placeholder="Type your message..." className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none h-12" />
                <button className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600 h-12">Send</button>
            </div>
        </div>
    );
};

export default Chatbox;
