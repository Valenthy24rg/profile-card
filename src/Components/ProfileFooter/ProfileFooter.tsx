import { useState } from 'react';
import styles from './profileFooter.styles.module.css';

const ProfileFooter = () => {

  const [message, setMessage] = useState(false)
  const [follow, setFollow] = useState(false)

  const changeTextFollow = () => {
    setFollow(!follow)
  }

  const changeTextMessage = () => {
    setMessage(!message)
  }

  return (
    <div className={styles.footerContainer}>
      <div className={styles.button}>
      <button style={{backgroundColor: follow ? "#df3f8c" : "white",
        color: follow ? "white" : " #767676", border: follow ? 'none' : '1px solid #b8b8b8' }} onClick={changeTextFollow}>{follow ? 'Following' : 'Follow'}</button>
      <button style={{backgroundColor: message ? "#df3f8c" : "white",
        color: message ? "white" : " #767676", border: message ? 'none' : '1px solid #b8b8b8' }} onClick={changeTextMessage}>{message ? 'Sent' : 'Message'}</button>
      </div>
    </div>
  )
}

export default ProfileFooter;