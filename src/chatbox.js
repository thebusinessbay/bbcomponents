import React from 'react';
import styled from 'styled-components';

const StyledChatBox = styled.div`

    .Modal {
        display: none;
        background-color: #ccc;
        position: fixed;
        bottom: 130px;
        right: 20px;
        transition: all 0.3s ease-out;
        z-index: 10;
        width: 328px;
    }
    
    .ModalOpen {
        display: block;
        animation: openModal 0.4s ease-out forwards;
    }
    
    .ModalClosed {
        display: block;
        animation: closeModal 0.4s ease-out forwards;
    }

    @keyframes openModal {
        0% { transform: scale(0); }
        100% { transform: scale(1);   }
    }

    @keyframes closeModal {
        0% { transform: scale(1); }
        100% { transform: scale(0);}
    }
`;

const ChatBox = ({ 
    isShown,
    toogleAction,
    animate,
  }) => {

    const cssClasses = [
        animate ? "Modal" : '',
        animate && isShown ? "ModalOpen" : "",
        animate && !isShown ? "ModalClosed" : ""
    ];
    
    return (
        <StyledChatBox>
            <div
                className={cssClasses.join(' ')}
            >
                <h1>A Modal</h1>
                <button className="Button" onClick={toogleAction}>
                    Dismiss
                </button>
            </div>
        </StyledChatBox>
    );
};

export default ChatBox;
