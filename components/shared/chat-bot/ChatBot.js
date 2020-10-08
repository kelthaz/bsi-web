import React from 'react';

const ChatBot = (props) => {
  const { show } = props;
  return show && <div>ChatBot</div>;
};

export default ChatBot;
