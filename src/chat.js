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
    padding: 24px;
    cursor: pointer;
    box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    z-index: 100;
    opacity: 0.9;
`;

class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShownChatbox: false,
            clickedCounter: 0,
        }

        this.toggleChatBox = this.toggleChatBox.bind(this);
    }

    toggleChatBox() {
        this.setState({...this.state, isShownChatbox: !this.state.isShownChatbox, clickedCounter: this.state.clickedCounter+1});
    }

    render() {
        return (
            <>
                <ChatCircle data-tip data-for='hover-msg' mainColor="#282c34" onClick={this.toggleChatBox}>
                    <FontAwesomeIcon icon={faComment} size="2x"/>
                    <ReactTooltip id='hover-msg' effect='solid'>
                        <span>¿Buscabas algo o tienes alguna duda?, inicia un chat</span>
                    </ReactTooltip>
                </ChatCircle>
                <ChatBox
                    isShown={this.state.isShownChatbox}
                    isMounted={this.state.isMountedChatbox}
                    toogleAction={this.toggleChatBox}
                    animate={this.state.clickedCounter}
                    mainColor="#282c34"
                    headerTextColor="white"
                />
            </>
        );
    }
}

export default Chat;
