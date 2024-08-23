import styles from './profileHeader.styles.module.css'

const ProfileHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <img className={styles.userImage} src="img/Ellipse.svg" alt="user" />
      </div>
      <div className={styles.figure}>
        <div><img className={styles.firstVector} src="img/vector2.svg" alt="first vector" /></div>
        <div><img className={styles.secondVector} src="img/Vector.png" alt="second vector" /></div>
        <div><img className={styles.thirdVector} src="img/Vector3.svg" alt="third vector" /></div>
        <div><img className={styles.fourthVector} src="img/vector4.svg" alt="fourth vector" /></div>
      </div>
    </div>
  )
}

export default ProfileHeader;