import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { removeCard, toggleLike } from '../../store/cardsSlice';
import { useAppDispatch } from '../../store/store';
import styles from './styles/styles.module.css';

type TPropsCard = {
  id: string;
  url: string | undefined;
  liked: boolean | undefined;
};

function Card({ id, url, liked }: TPropsCard) {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(toggleLike({ id }));
  };

  const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(removeCard({ id }));
  };

  return (
    <Link className={styles.link} to={`/images/${id}`}>
      {location.pathname === '/' ? (
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
          {isHovered && (
            <button className={styles.trash_icon} onClick={handleRemoveClick} />
          )}
        </article>
      ) : (
        <article className={styles.card}>
          <div className={styles.cardImg} style={{ backgroundImage: `url(${url})` }} />
        </article>
      )}
    </Link>
  );
}

export default Card;
