import React, { useState } from 'react';
import useOnClickOutTarget from '../../../hooks/useOnClickOutTarget';
import styles from './chatBot.module.scss';

const ChatBot = (props) => {
  const { show } = props;
  const [openChat, setOpenChat] = useState(false);

  useOnClickOutTarget('chatbot', openChat, setOpenChat);

  return (
    show && (
      <>
        <button type="button" className="btn-float-button" onClick={() => setOpenChat(!openChat)}>
          <img src="/avatar.png" alt="avatar" />
        </button>
        {openChat && (
          <div id="chatbot" className={`${styles['card-chatbot']} body2 color-gray-dark`}>
            <p>¡Hola! Soy Fernanda y estoy para ayudarte si tienes alguna duda.</p>
            <p>¡Escríbeme cualquier cosa!</p>
          </div>
        )}
      </>
    )
  );
};

export default ChatBot;
