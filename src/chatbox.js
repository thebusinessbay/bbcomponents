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
        z-index: 11;
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
            width: calc(100% - 20px);
            z-index: 11;
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
        z-index: 11;
        padding-right: 10px;
        cursor: pointer;
    }
`;

const ChatBoxBody = styled.div`
    display: block;
    background: #efefef;
    height: 280px;
    border-radius: 5px;
`;

const ChatBoxInputWrapper = styled.div`
    z-index: 11;
    bottom: 0;
    position: fixed;
    width: 100%;

    .chat-input {
        width: 100%;
        background: #f4f7f9;
        height: 47px;
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
        padding-left: 5px;
        padding-right: 24px;
    }
    
    .chat-send-icon {
        position: fixed;
        right: 8px;
        bottom: 15px;
        cursor: pointer;
    }

    @media(max-width: 768px){
        width: calc(100% - 20px);
        
        .chat-send-icon {
            right: 20px;
        }
    }
`;

const MessagesContainer = styled.div`
    height: calc(100% - 47px);
    overflow-y: scroll;

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