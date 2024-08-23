import BodyProfile from '../BodyProfile';
import ProfileFooter from '../ProfileFooter';
import ProfileHeader from '../ProfileHeader';
import styles from './card.styles.module.css';

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <ProfileHeader/>
        <BodyProfile/>
        <ProfileFooter/>
      </div>
    </div>
  )
}

export default Card