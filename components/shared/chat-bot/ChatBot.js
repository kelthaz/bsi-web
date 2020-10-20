import React, { useState } from 'react';
import useScript from '../../../hooks/useScript';
import styles from './chatBot.module.scss';

const ChatBot = (props) => {
  useScript('https://sdk.inbenta.io/chatbot/1.39.0/inbenta-chatbot-sdk.js');
  const authorization = {
    domainKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwcm9qZWN0IjoiYmFuY29wcGVsX2NoYXRib3RfZXMiLCJkb21haW5fa2V5X2lkIjoiQlk0TmxFdWpmNXlhNGtleGFZbGhMZzo6In0.BqWTIDaIWpG4EjinWeNgnhoH_O3lVfpFj6RpAYz1LLclkLsvvUzbjD6_6SYJkh6kPmmeQW61SbcBKyIcMGiQZw',
    inbentaKey: 'BY3kJrWCHWH3KuQTJF9OteoQL++QHFBWUrmHImI0Sy0=',
    environment: /*'production'*/'production',
  };

  const InbentaAuth = InbentaChatbotSDK.createFromDomainKey(authorization.domainKey, authorization.inbentaKey);

  return (<></>);
};

export default ChatBot;
