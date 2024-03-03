import React from 'react';
import {useState,useEffect} from "react";
import '../Chatbox/Chatbox.css';
import { BiSolidMessageDots } from "react-icons/bi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import $ from "jquery";
import spinner from '../../assets/Chatbox/Spinner.gif'



const username="vikram";



const Chatbox = () => {
    const [assignedOperator,updateAssignedOperator]=useState("");
    const [isRequested,updateisRequested]=useState(false);
    const [newMessages,updatemessages]=useState({});


    // const messages = [
    //     { id: 1, text: "Hello!", sender: "user" },
    //     { id: 2, text: "Hi there!", sender: "operator" },
    //     { id: 3, text: "How can I assist you?", sender: "operator" },
    //     { id: 4, text: "I'm interested in your product.", sender: "user" },
    //     { id: 5, text: "Sure, which product are you interested in?", sender: "operator" },
    // ];


    useEffect(() => {
        const handleOutsideClick = (e) => {
            const chatSection = document.getElementById("chat_section");
            const chatIcon = document.getElementById("chat-icon");
            const nav_section=document.getElementById("nav_section")


            if (!chatSection.contains(e.target) && !chatIcon.contains(e.target) && !nav_section.contains((e.target))) {
                close_chatbox();
            }
        };

        document.body.addEventListener("click", handleOutsideClick);

        return () => {
            document.body.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    // To check whether user is in queue
    const fetchqueue = async () => {
        try {
            const response = await $.ajax({
                url: 'http://localhost:5000/chat/checkqueue/' + username,
                method: 'GET',
                dataType: 'json',
            });

            if (response.length === 0) {

                updateisRequested(false);
            } else {
                updateisRequested(true);
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
    useEffect(() => {
        // Fetch data initially
        fetchqueue();

        // Set up a timer to refresh data every 5 seconds (adjust as needed)
        const refreshInterval = setInterval(fetchqueue, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(refreshInterval);
    }, []);



    // To add a user into queue
    async function request_operator() {
        updateisRequested(true);

        const apiUrl = "http://localhost:5000/chat/addtoqueue/" + username;
        try {
            const response = await $.ajax({
                url: apiUrl,
                method: 'GET',
                dataType: 'json',
            });
        } catch (error) {
            console.error(error);
        }
    }

    //Check whether user has a connection with operator or not
    const user_assign_status = async () => {
        try {
            const response = await $.ajax({
                url: 'http://localhost:5000/chat/search_operator/' + username,
                method: 'GET',
                dataType: 'json',
            });

            try {
                updateAssignedOperator((response!=[]) ? response["operator"] : "");
            } catch (error) {
                updateAssignedOperator("");
            }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        // Fetch data initially
        user_assign_status();

        // Set up a timer to refresh data every 5 seconds (adjust as needed)
        const refreshInterval = setInterval(() => user_assign_status(), 1000); // Wrap the function call in an anonymous function

        // Clear the interval when the component is unmounted
        return () => clearInterval(refreshInterval);
    }, []);



    function open_chat(){
        let chat_icon=document.getElementById("chat-icon");
        chat_icon.classList.add("move_chaticon");
        let chat_section=document.getElementById("chat_section");
        chat_section.classList.add("open_chatbox")

    }
    function close_chatbox(){
        let chat_icon=document.getElementById("chat-icon");
        chat_icon.classList.remove("move_chaticon");
        let chat_section=document.getElementById("chat_section");
        chat_section.classList.remove("open_chatbox")
    }


    const fetchmessages = async () => {
        try {
            let operator_name=document.getElementById("operator_name").innerText;
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
        let operator_name=document.getElementById("operator_name").innerText;

        const apiUrl = "http://localhost:5000/chat/send_message";
        const requestData = {
            userName: username,
            operator: operator_name,
            user_type: "user",
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
        <>
        <div className="flex-col h-full overflow-hidden shadow-2xl mx-10 my-5 rounded fixed bottom-5 right-5 z-50 close_chat_class " style={{height:"88vh",background:"rgb(255 255 255 / 87%)",width:"24rem"}} id={"chat_section"}>
            <p style={{display:"none"}} id={'operator_name'}>{assignedOperator}</p>
            <div className="bg-blue-500 text-white py-2 px-4 flex justify-between" style={{background:"#742437"}}>

                <h2 className="text-lg font-semibold" style={{textAlign:"center"}}>Chat with Operator</h2>
                <button className="text-white text-xl" onClick={close_chatbox} ><MdClose/></button>
            </div>
            {assignedOperator===""?
                (
                    isRequested ? (
                        <div className="h-full overflow-y-auto p-4 justify-center mt-10 " >
                            <p style={{textAlign:"center"}}>Waiting for operator to accept.....</p>
                            <img src={spinner} alt="img" className={"preloader"}/>
                        </div>
                    ) : (
                        <div className="flex h-full overflow-y-auto p-4 justify-center" >
                            <button className="py-2 px-4 rounded-xl h-12 chat_button shadow-black my-12 w-40 " onClick={request_operator} id={"nav_section"}> Request operator</button>
                        </div>
                    )

                ):(
                    <div className="flex flex-col h-full overflow-y-scroll p-4 message_section_home" >
                        {Array.isArray(newMessages) && newMessages.map(message => (
                            <div key={message.id} className={`p-2 mb-2 rounded-lg message_div ${message.userType === "user" ? "bg-gray-400 text-black self-start" : " operator_message text-white self-end"}`} style={{ minWidth: "40%" }}>
                                {message.message}

                            </div>
                        ))}

                    </div>
                )
            }

            <form className="flex items-center mx-2 my-5" onSubmit={send_message}>
                <input type="text" placeholder="Type your message..." className="flex-1 p-2 rounded-l-3xl border border-gray-300 focus:outline-none h-12" id={"message_text"} />
                <button className=" py-2 px-4 rounded-r h-12 chat_button border-gray-300" ><BsFillRocketTakeoffFill />
                </button>
            </form>
        </div>
        <div className="fixed bottom-5 right-5 z-50"  id={"chat-icon"} onClick={open_chat}>
            <BiSolidMessageDots className="mt-4 ml-4" style={{width:"30px",height:"30px"}}/>
        </div>
        </>
    );
};

export default Chatbox;
