import { useState } from 'react';
import { Link } from 'react-router-dom';

import { removeCard, toggleLike } from '../../store/cardsSlice';
import { useAppDispatch } from '../../store/store';
import styles from './styles/styles.module.css';

type TPropsCard = {
  id: string;
  url: string;
  liked: boolean;
};

function Card({ id, url, liked }: TPropsCard) {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleLikeClick = () => {
    dispatch(toggleLike({ id }));
  };

  return (
    <Link className={styles.link} to={`/images/${id}`}>
      <article
        className={styles.card}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onFocus={() => {}}
      >
        <div className={styles.cardImg} style={{ backgroundImage: `url(${url})` }} />
        <div className={styles.cardInfoblock}>
          <button
            className={
              liked
                ? `${styles.cardLikeButton} ${styles.cardLikeButton_liked}`
                : styles.cardLikeButton
            }
            onClick={handleLikeClick}
          />
          <h2 className={styles.cardTitle}>meow id: {id}</h2>
        </div>
        {isHovered ? (
          <button
            className={styles.trash_icon}
            onClick={() => dispatch(removeCard({ id }))}
          />
        ) : null}
      </article>
    </Link>
  );
}

export default Card;
