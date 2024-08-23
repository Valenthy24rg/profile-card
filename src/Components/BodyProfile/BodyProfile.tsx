import styles from './bodyProfile.styles.module.css';

const BodyProfile = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.bodyContent}>

      <div className={styles.userName}>
        <h3>Johnny Rogers</h3>
        <span>@jonnyrogers</span>
      </div>

      <div className={styles.redSocial}>
        <img className={styles.redSocialLogo} src="img/facebook.svg" alt="facebook" />
        <img className={styles.redSocialLogo} src="img/linkedin.svg" alt="linkedin" />
        <img className={styles.redSocialLogo} src="img/twitter.svg" alt="twitter" />
        <img className={styles.redSocialLogo} src="img/instagram.svg" alt="instagram" />
        <img className={styles.redSocialLogo} src="img/dribble.svg" alt="dribble" />
      </div>

      <div className={styles.aboutUser}>
        <p>Crafting brand and communication strategies, creating visual designs, leading art direction, and capturing portraits through photography.</p>
      </div>

      </div>
    </div>
  )
}

export default BodyProfile;