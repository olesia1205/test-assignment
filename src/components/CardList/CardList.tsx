import { useEffect } from 'react';

import { fetchCards } from '../../store/cardsSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { ICard } from '../../types/types';
import Card from '../Card/Card';
import styles from './styles/styles.module.css';

function CardList() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((store) => store.cards.data);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <div className={styles.cardsContainer}>
      {cards?.map((card: ICard) => <Card key={card.id} {...card} />)}
    </div>
  );
}

export default CardList;
