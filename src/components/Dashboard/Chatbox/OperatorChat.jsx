import React from 'react';
import {useState,useEffect} from "react";
import { IoPerson } from "react-icons/io5";
import $ from 'jquery';
import { IoMdAlert } from "react-icons/io";


const operator_name="operator_1"
const OperatorChat = () => {
    // const messages = [
    //     { id: 1, text: "Hello!", sender: "user" },
    //     { id: 2, text: "Hi there!", sender: "operator" },
    //     { id: 3, text: "How can I assist you?", sender: "operator" },
    //     { id: 4, text: "I'm interested in your product.", sender: "user" },
    //     { id: 5, text: "Sure, which product are you interested in?", sender: "operator" },
    //     { id: 6, text: "Sure, which product are you interested in?", sender: "operator" },
    // ];

    const [isClientassigned,AssignClient]=useState(false);
    const [clientInQueue,updateClientInQueue]=useState(0);
    const [clientName,UpdateClientName]=useState("");
    const [newMessages,updatemessages]=useState({});

    // Fetch the number of client in the queue
    const fetchclient_count = async () => {
        try {
            const response = await $.ajax({
                url: 'http://localhost:5000/chat/get_client_count',
                method: 'GET',
                dataType: 'json',
            });
            try
            {
                updateClientInQueue(response);
            }
            catch (error) {
                updateClientInQueue(0);
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        fetchclient_count();
        const refreshInterval = setInterval(fetchclient_count, 1000);
        return () => clearInterval(refreshInterval);
    }, []);



    // Check whether their is any connection with user

    const search_connection = async () => {
        try {
            const response = await $.ajax({
                url: 'http://localhost:5000/chat/search_connection/' + operator_name,
                method: 'GET',
                dataType: 'json',
            })
            console.log(response ,"getting");


            UpdateClientName(response);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }


    };
    useEffect(() => {
        search_connection();
        const refreshInterval = setInterval(search_connection, 1000);
        return () => clearInterval(refreshInterval);
    }, []);


    // To create a new connection with the first client in the queue

    const get_client = async () => {
        try {
            const apiUrl = "http://localhost:5000/chat/get_client/" + operator_name;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            UpdateClientName(data); // Update client name state with the received data
            document.getElementsByClassName("success_alert_message")[0].classList.remove("deactive");

            // Set a timeout to add the "deactive" class after 5 seconds
            setTimeout(() => {
                document.getElementsByClassName("success_alert_message")[0].classList.add("deactive");
            }, 3000);
        } catch (error) {
            console.error('There was a problem with the API call:', error);

        }
    };



    function close_conversation(){

        const apiUrl="http://localhost:5000/chat/close_conversation/"+operator_name;
        fetch(apiUrl)
            .then(data => {

                UpdateClientName("");
                updatemessages({});


            })
            .catch(error => {
                console.error('There was a problem with the API call:', error);
            });
    }


    // To fetch update messages
    const fetchmessages = async () => {
        let username = document.getElementById("username").innerText;
        try {
            const response = await fetch(`http://localhost:5000/chat/get_messages/${username}/${operator_name}`);
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            const messages = await response.json();
            updatemessages(messages);
        } catch (error) {
            console.log('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        fetchmessages();
        const refreshInterval = setInterval(fetchmessages, 1000);
        return () => clearInterval(refreshInterval);
    }, []);


    function send_message(e) {
        e.preventDefault();

        const username = document.getElementById("username").innerText;
        console.log(username)

        const apiUrl = "http://localhost:5000/chat/send_message";
        const requestData = {
            userName: username,
            operator: operator_name,
            user_type: "operator",
            message: document.getElementById("message_text").value
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        };

        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            })
            .catch((err) => {
                console.log("error", err);
            });
        document.getElementById("message_text").value = "";
    }








    return (
        <div className="flex flex-col h-full bg-gray-100 rounded border-gray-300 responsive_side_adjust" style={{ width: "100%", height: "100vh"}} >
            <div className="success_alert_message deactive"><p><b>{clientName}</b> Has been assigned !!!! </p></div>
            <p id={"username"} style={{display:"none"}}>{clientName}</p>
            <div className="bg-purple-600 text-white py-3 px-4 flex" style={{background:"#2a3042"}}>
                {clientName === "" ? (
                    <>
                        <div className="w-1/2">
                            <h3 className="text-xl font-bold mt-1">CLIENT : ---- </h3>
                        </div>

                        <div className="flex justify-end w-1/2 items-center">
                            <span className="text-lg font-bold mr-1">{clientInQueue}</span>
                            <IoPerson />
                            <button className="ml-4 bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-indigo-600 operator_button" onClick={get_client}>Request Client</button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-1/2">
                            <h3 className="text-xl font-bold mt-1">CLIENT : {clientName} </h3>
                        </div>

                        <div className="flex justify-end w-1/2">
                            <button className="bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-indigo-600" onClick={close_conversation}>Close Connection</button>
                        </div>
                    </>
                )}
            </div>

            <div className="flex flex-col h-5/6 overflow-y-scroll p-4 message_section">
                {Array.isArray(newMessages) && newMessages.map(message => (
                    <div key={message.id} className={`p-2 mb-2  message_div ${message.userType === "user" ? "bg-indigo-500 text-white self-end" : "message_color-2 self-start"}`} style={{ minWidth: "25%" }}>
                        <p>{message.message}</p>
                    </div>
                ))}

            </div>
            <form className="flex items-center border-t border-gray-300 mx-2" onSubmit={send_message}>
                    <input type="text" placeholder="Type your message..." className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none h-12 ml-1"  id={"message_text"} />
                    <button type={"submit"} className="bg-indigo-500 text-white py-2 px-4 rounded-r hover:bg-indigo-600 h-12">Send</button>

            </form>
        </div>
    );
};

export default OperatorChat;
