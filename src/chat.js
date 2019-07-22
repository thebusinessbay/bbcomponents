import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons';
import ChatBox from './chatbox';

const ChatCircle = styled.div`
    
    .chat-button-circle {
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
    }

    .message-icon {
        padding-top: 22px;
    }
`;

class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShownChatbox: false,
            clickedCounter: 0,
            messageInputValue: "",
        }

        this.toggleChatBox = this.toggleChatBox.bind(this);
        this.messageInputChangeHandler = this.messageInputChangeHandler.bind(this);
        this.submitMessageInputhandler = this.submitMessageInputhandler.bind(this);
        this.messageInpuOnKeyUpHandler = this.messageInpuOnKeyUpHandler.bind(this);
    }

    toggleChatBox() {
        this.setState({...this.state, isShownChatbox: !this.state.isShownChatbox, clickedCounter: this.state.clickedCounter+1});
    }

    messageInpuOnKeyUpHandler(e){
        if(e.key === 'Enter'){
            this.submitMessageInputhandler();
        }
    }

    messageInputChangeHandler(e){
        this.setState({ ...this.state, messageInputValue: e.target.value });
    }

    getCurrentLocalDateTime() {
        return new Date(Date.now()-(new Date()).getTimezoneOffset() * 60000);
    }

    submitMessageInputhandler() {
        if(!this.state.messageInputValue.length) return;
        
        const newMessage = {
            id: new Date().getTime(),
            name: this.props.displayUserName,
            message: this.state.messageInputValue,
            timestamp: this.getCurrentLocalDateTime().toISOString().slice(0, 19).replace('T', ' '),
            type: "customer",
            metadata: this.props.metadata,
        }

        this.setState({...this.state, messageInputValue: ""})
        this.props.newMessageHandler(newMessage);
    }

    render() {
        return (
            <>
                <ChatCircle mainColor="#282c34" onClick={ () => this.props.customerIsAuthenticated ? this.toggleChatBox() : this.props.handleUserAuthentication() }>
                    <div className="chat-button-circle" data-tip data-for='hover-msg'>
                        <FontAwesomeIcon icon={faComment} size="2x" className="message-icon"/>
                        <ReactTooltip id='hover-msg' effect='solid'>
                            <span>{ this.props.buttonPlaceholder }</span>
                        </ReactTooltip>
                    </div>
                </ChatCircle>
                <ChatBox
                    title={this.props.title}
                    agentProfilePicUrl={this.props.agentProfilePicUrl}
                    customerProfilePicUrl={this.props.customerProfilePicUrl}
                    isShown={this.state.isShownChatbox}
                    toogleAction={this.toggleChatBox}
                    animate={this.state.clickedCounter}
                    mainColor={this.props.mainColor}
                    headerTextColor={this.props.headerTextColor}
                    messages={this.props.messages}
                    messageInpuOnKeyUpHandler={this.messageInpuOnKeyUpHandler}
                    messageInputChangeHandler={this.messageInputChangeHandler}
                    submitMessageInputhandler={this.submitMessageInputhandler}
                    messageInputValue={this.state.messageInputValue}
                />
            </>
        );
    }
}

export default Chat;
