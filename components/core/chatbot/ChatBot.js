import { useState } from 'react';

import SvgCross from '../../svgs/SvgCross';
import styles from './chatbot.module.scss';

const ChatBot = () => {
  const [chatOpened, wasChatOpened] = useState(false);
  const [showWelcomeCard, shouldShowWelcomeCard] = useState(false);

  const openChatBot = () => {
    shouldShowWelcomeCard(false);
    wasChatOpened(true);
    if (document.getElementsByClassName('inbenta-bot__launcher')[0]) {
      document.getElementsByClassName('inbenta-bot__launcher')[0].click();
    } else {
      document.getElementsByClassName('header__actions__icon inbenta-bot-icon')[0].click();
    }
  };

  const openWelcomeCard = () => {
    if (!chatOpened && !showWelcomeCard) {
      shouldShowWelcomeCard(true);
    } else if (!chatOpened && showWelcomeCard) {
      shouldShowWelcomeCard(false);
    } else {
      openChatBot();
    }
  };

  return (
    <>
      {showWelcomeCard && (
        <div className={`card-simple-white-shadow ${styles['welcome-card']}`}>
          <div className="d-flex flex-row-reverse">
            <div
              className={styles['close-button']}
              onClick={() => shouldShowWelcomeCard(false)}
              role="button"
              tabIndex={0}
            >
              <SvgCross />
            </div>
          </div>
          <div className={styles.content}>
            <img className={`${styles['img-chatbot']}`} src="/chat-icon.png" alt="Fernanda" />
            <p className="body2 pt-2">
              <span className={styles['tc-storm']}>Hola, soy Fernanda</span>
              <br />
              Conmigo puedes consultar todo lo que necesitas saber sobre el futuro crédito para tu Pyme.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn-small" onClick={openChatBot}>
              Saber más
            </button>
          </div>
        </div>
      )}
      <div className={styles.launcher} onClick={openWelcomeCard} role="button" tabIndex={0}>
        <div className={styles['launcher-image']} />
      </div>
    </>
  );
};

export default ChatBot;
