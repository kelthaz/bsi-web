import styles from './chatbot.module.scss';

const ChatBot = () => {

  const openChatBot = () => {
    if (document.getElementsByClassName('inbenta-bot__launcher')[0]) {
      document.getElementsByClassName('inbenta-bot__launcher')[0].click();
    } else {
      document.getElementsByClassName('header__actions__icon inbenta-bot-icon')[0].click();
    }
  };
  return (
    <div
      className={styles.launcher}
      onClick={openChatBot}
      role="button"
      tabIndex={0}
    >
      <div className={styles['launcher-image']} />
    </div>
  );
};

export default ChatBot;