import { useEffect } from 'react';

import { fetchCards } from '../../store/cardsSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { ICard } from '../../types/types';
import Card from '../Card/Card';
import styles from './styles/styles.module.css';

function CardList() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((store) => store.cards.data);
  const activeFilter = useAppSelector((store) => store.filter.filter);
  const likedCards = useAppSelector((store) =>
    store.cards.data.filter((card) => card.liked)
  );

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const renderCards = activeFilter === 'liked' ? likedCards : cards;

  return (
    <div className={styles.cardsContainer}>
      {renderCards?.map((card: ICard) => <Card key={card.id} {...card} />)}
    </div>
  );
}

export default CardList;
