import styles from './profileHeader.styles.module.css'

const ProfileHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <img className={styles.userImage} src="/img/Ellipse.svg" alt="" />
      </div>
      <div className={styles.figure}>
        <div><img className={styles.firstVector} src="/img/vector2.svg" alt="" /></div>
        <div><img className={styles.secondVector} src="/img/Vector.png" alt="" /></div>
        <div><img className={styles.thirdVector} src="/img/Vector3.svg" alt="" /></div>
        <div><img className={styles.fourthVector} src="/img/vector4.svg" alt="" /></div>
      </div>
    </div>
  )
}

export default ProfileHeader;