import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const StyledChatBox = styled.div`

    .chat {
        display: none;
        background-color: #ccc;
        position: fixed;
        bottom: 10px;
        right: 6px;
        transition: all 0.3s ease-out;
        z-index: 1000;
        width: 328px;
    }

    @media(max-width: 768px){
        .chat {
            display: none;
            background-color: transparent;
            position: fixed;
            bottom: 0px;
            right: 0px;
            transition: all 0.3s ease-out;
            z-index: 1000;
            width: 100%;
            padding-left: 10px;
            padding-right: 10px;
        }
    }
    
    .chat-open {
        display: block;
        animation: openChat 0.4s ease-out forwards;
    }
    
    .chat-closed {
        display: block;
        animation: closeChat 0.4s ease-out forwards;
    }

    @keyframes openChat {
        0% { transform: translateY(100%); }
        100% { transform: translateY(0%) scale(1); }
    }

    @keyframes closeChat {
        0% { transform: translateY(0%) }
        100% { transform: translateY(100%) scale(0);}
    }
`;

const ChatBoxHeader = styled.div`
    background: ${props => props.mainColor || "#5A5EB9"};
    color: ${props => props.headerTextColor || "white"};
    height: 70px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
    font-size: 20px;
    padding-top: 17px;

    .title {
        display: inline;
    }

    .close-chat-icon {
        float: right;
        z-index: 10;
        padding-right: 10px;
        cursor: pointer;
    }
`;

const ChatBoxBody = styled.div`
    display: block;
    background: #efefef;
    height: 280px;
    border-radius:5px;
    
    &:after {
        content: "";
        background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgOCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjE3NiIgY3k9IjEyIiByPSI0Ii8+PHBhdGggZD0iTTIwLjUuNWwyMyAxMW0tMjkgODRsLTMuNzkgMTAuMzc3TTI3LjAzNyAxMzEuNGw1Ljg5OCAyLjIwMy0zLjQ2IDUuOTQ3IDYuMDcyIDIuMzkyLTMuOTMzIDUuNzU4bTEyOC43MzMgMzUuMzdsLjY5My05LjMxNiAxMC4yOTIuMDUyLjQxNi05LjIyMiA5LjI3NC4zMzJNLjUgNDguNXM2LjEzMSA2LjQxMyA2Ljg0NyAxNC44MDVjLjcxNSA4LjM5My0yLjUyIDE0LjgwNi0yLjUyIDE0LjgwNk0xMjQuNTU1IDkwcy03LjQ0NCAwLTEzLjY3IDYuMTkyYy02LjIyNyA2LjE5Mi00LjgzOCAxMi4wMTItNC44MzggMTIuMDEybTIuMjQgNjguNjI2cy00LjAyNi05LjAyNS0xOC4xNDUtOS4wMjUtMTguMTQ1IDUuNy0xOC4xNDUgNS43IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTg1LjcxNiAzNi4xNDZsNS4yNDMtOS41MjFoMTEuMDkzbDUuNDE2IDkuNTIxLTUuNDEgOS4xODVIOTAuOTUzbC01LjIzNy05LjE4NXptNjMuOTA5IDE1LjQ3OWgxMC43NXYxMC43NWgtMTAuNzV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjcxLjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjE3MC41IiBjeT0iOTUuNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iODEuNSIgY3k9IjEzNC41IiByPSIxLjUiLz48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMy41IiBjeT0iMjMuNSIgcj0iMS41Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkzIDcxaDN2M2gtM3ptMzMgODRoM3YzaC0zem0tODUgMThoM3YzaC0zeiIvPjxwYXRoIGQ9Ik0zOS4zODQgNTEuMTIybDUuNzU4LTQuNDU0IDYuNDUzIDQuMjA1LTIuMjk0IDcuMzYzaC03Ljc5bC0yLjEyNy03LjExNHpNMTMwLjE5NSA0LjAzbDEzLjgzIDUuMDYyLTEwLjA5IDcuMDQ4LTMuNzQtMTIuMTF6bS04MyA5NWwxNC44MyA1LjQyOS0xMC44MiA3LjU1Ny00LjAxLTEyLjk4N3pNNS4yMTMgMTYxLjQ5NWwxMS4zMjggMjAuODk3TDIuMjY1IDE4MGwyLjk0OC0xOC41MDV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxwYXRoIGQ9Ik0xNDkuMDUgMTI3LjQ2OHMtLjUxIDIuMTgzLjk5NSAzLjM2NmMxLjU2IDEuMjI2IDguNjQyLTEuODk1IDMuOTY3LTcuNzg1LTIuMzY3LTIuNDc3LTYuNS0zLjIyNi05LjMzIDAtNS4yMDggNS45MzYgMCAxNy41MSAxMS42MSAxMy43MyAxMi40NTgtNi4yNTcgNS42MzMtMjEuNjU2LTUuMDczLTIyLjY1NC02LjYwMi0uNjA2LTE0LjA0MyAxLjc1Ni0xNi4xNTcgMTAuMjY4LTEuNzE4IDYuOTIgMS41ODQgMTcuMzg3IDEyLjQ1IDIwLjQ3NiAxMC44NjYgMy4wOSAxOS4zMzEtNC4zMSAxOS4zMzEtNC4zMSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4=');
        opacity: 0.1;
        top: 70px;
        left: 0;
        bottom: 0;
        right: 0;
        height: 75%;
        position: absolute;
        z-index: 0;
        width: 95%;
    }
`;

const ChatBoxInputWrapper = styled.div`
    z-index: 10;
    bottom: 0;
    position: fixed;
    width: 100%;

    .chat-input {
        width: 100%;
        background: #f4f7f9;
        height: 47px;  
        padding-top: 10px;
        padding-right: 50px;
        padding-bottom: 10px;
        padding-left: 15px;
        border: none;
        resize: none;
        outline: none;
        border: 1px solid #ccc;
        color: #888;
        border-top: none;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        overflow: hidden;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
    }
    
    .chat-send-icon {
        position: fixed;
        margin-top: 15px;
        right: 8px;
        cursor: pointer;
    }

    @media(max-width: 768px){
        padding-right: 20px;
        
        .chat-send-icon {
            right: 20px;
        }
    }
`;

const MessagesContainer = styled.div`
    height: calc(100% - 47px);
    z-index: 100;
    overflow-y: auto;

    .msg {
        display: flex;
        align-items: flex-end;
        margin-bottom: 10px;
    }
    
    .msg:last-of-type {
        margin: 0;
    }
    
    .msg-img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        background: #ddd;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 50%;
    }
    
    .msg-bubble {
        max-width: 450px;
        padding: 15px;
        border-radius: 15px;
        background: white;
    }
    
    .msg-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .msg-info-name {
        margin-right: 10px;
        font-weight: bold;
    }

    .msg-info-time {
        font-size: 0.85em;
    }

    .left-msg .msg-bubble {
        border-bottom-left-radius: 0;
    }

    .right-msg {
        flex-direction: row-reverse;
    }
    .right-msg .msg-bubble {
        background: #579ffb;
        color: #fff;
        border-bottom-right-radius: 0;
    }
    .right-msg .msg-img {
        margin: 0 0 0 10px;
    }
`;

const ChatBox = ({ 
    isShown,
    toogleAction,
    animate,
    mainColor,
    headerTextColor,
    messages,
  }) => {

    const cssClasses = [
        "chat",
        animate && isShown ? "chat-open" : "",
        animate && !isShown ? "chat-closed" : ""
    ];

    const mappedMessages = messages.map(message => (
        <div className={message.type === "agent" ? "msg left-msg" : "msg right-msg"}>
            <div class="msg-img" style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/327/327779.svg)"}}></div>
            <div class="msg-bubble">
                <div class="msg-info">
                    <div class="msg-info-name">BOT</div>
                    <div class="msg-info-time">12:45</div>
                </div>
                <div class="msg-text">
                    {message.message}
                </div>
            </div>
        </div>
    )); 
    
    return (
        <StyledChatBox>
            <div
                className={cssClasses.join(' ')}
            >
                <ChatBoxHeader mainColor={mainColor} headerTextColor={headerTextColor}>
                    <h4 className="title">Sonoritmo</h4>
                    <div className="close-chat-icon" onClick={toogleAction}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </ChatBoxHeader>
                <ChatBoxBody>
                    <MessagesContainer>
                        {mappedMessages}
                    </MessagesContainer>
                    <ChatBoxInputWrapper>
                        <input type="text" className="chat-input" placeholder="Escribe un mensaje"/>
                        <FontAwesomeIcon className="chat-send-icon" icon={faPaperPlane}/>
                    </ChatBoxInputWrapper>
                </ChatBoxBody>
            </div>
        </StyledChatBox>
    );
};

export default ChatBox;
MessagesContainer