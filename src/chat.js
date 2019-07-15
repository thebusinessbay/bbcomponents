import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons';
import ChatBox from './chatbox';

const ChatCircle = styled.div`
    position: fixed;
    bottom: 30px;
    right: 20px;
    background: ${props => props.mainColor || "#5A5EB9"};
    width: 80px;
    height: 80px;  
    border-radius: 50%;
    color: white;
    cursor: pointer;
    box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    z-index: 10;
    opacity: 0.9;

    .message-icon {
        padding-top: 22px;
    }
`;

class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Sonoritmo",
            buttonPlaceholder: "¿Buscabas algo o tienes alguna duda?, inicia un chat",
            agentProfilePicUrl: "https://image.flaticon.com/icons/svg/327/327779.svg",
            customerProfilePicUrl: "https://lh5.googleusercontent.com/-DcksDlQ970o/AAAAAAAAAAI/AAAAAAAAACo/AKfwigGQO3U/photo.jpg",
            isShownChatbox: false,
            clickedCounter: 0,
            messages:  [
                {
                    id: "100",
                    name: "Sonoritmo",
                    message: "Hola cliente",
                    timestamp: "2019-07-13 12:00:00",
                    type: "agent",
                },
                {
                    id: "101",
                    name: "William",
                    message: "Hola sonoritmo",
                    timestamp: "2019-07-13 12:00:01",
                    type: "customer",
                },
                {
                    id: "102",
                    name: "Sonoritmo",
                    message: "en que te ayudo?",
                    timestamp: "2019-07-13 12:00:02",
                    type: "agent",
                },
                {
                    id: "104",
                    name: "Sonoritmo",
                    message: "Hola cliente",
                    timestamp: "2019-07-13 12:00:00",
                    type: "agent",
                },
                {
                    id: "105",
                    name: "William",
                    message: "Hola sonoritmo",
                    timestamp: "2019-07-13 12:00:01",
                    type: "customer",
                },
                {
                    id: "106",
                    name: "Sonoritmo",
                    message: "en que te ayudo?",
                    timestamp: "2019-07-13 12:00:02",
                    type: "agent",
                },
            ],
            messageInputValue: "",
        }

        this.toggleChatBox = this.toggleChatBox.bind(this);
        this.messageInputChangeHandler = this.messageInputChangeHandler.bind(this);
        this.submitMessageInputhandler = this.submitMessageInputhandler.bind(this);
    }

    toggleChatBox() {
        this.setState({...this.state, isShownChatbox: !this.state.isShownChatbox, clickedCounter: this.state.clickedCounter+1});
    }

    messageInputChangeHandler(e){
        this.setState({ ...this.state, messageInputValue: e.target.value });
    }

    submitMessageInputhandler() {
        const newMessage = {
            id: new Date().getTime(),
            name: "Something",
            message: this.state.messageInputValue,
            timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
            type: "customer",
        }

        console.log(newMessage);

        this.setState({...this.state, messages: [...this.state.messages, newMessage]})
    }

    render() {
        return (
            <>
                <ChatCircle data-tip data-for='hover-msg' mainColor="#282c34" onClick={this.toggleChatBox}>
                    <FontAwesomeIcon icon={faComment} size="2x" className="message-icon"/>
                    <ReactTooltip id='hover-msg' effect='solid'>
                        <span>{ this.state.buttonPlaceholder }</span>
                    </ReactTooltip>
                </ChatCircle>
                <ChatBox
                    title={this.state.title}
                    agentProfilePicUrl={this.state.agentProfilePicUrl}
                    customerProfilePicUrl={this.state.customerProfilePicUrl}
                    isShown={this.state.isShownChatbox}
                    isMounted={this.state.isMountedChatbox}
                    toogleAction={this.toggleChatBox}
                    animate={this.state.clickedCounter}
                    mainColor="#282c34"
                    headerTextColor="white"
                    messages={this.state.messages}
                    messageInputChangeHandler={this.messageInputChangeHandler}
                    submitMessageInputhandler={this.submitMessageInputhandler}
                />
            </>
        );
    }
}

export default Chat;
