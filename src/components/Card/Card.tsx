import cardImage from '../../images/heart_icon.svg';
import styles from './styles/styles.module.css';

type TPropsCard = {
  id: string;
  image: string;
};

function Card({ id, image }: TPropsCard) {
  return (
    <article className={styles.card}>
      <div className={styles.cardImg} style={{ backgroundImage: `url(${image})` }} />
      <div className={styles.cardInfoblock}>
        <img className={styles.cardLikeIcon} alt="like_icon" src={cardImage} />
        <h2 className={styles.cardTitle}>{id}</h2>
      </div>
    </article>
  );
}

export default Card;
