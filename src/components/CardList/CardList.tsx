import { useEffect } from 'react';

import { useGetCardsQuery } from '../../services/CardsService';
import { ICard } from '../../types/ICard';
import Card from '../Card/Card';
import styles from './styles/styles.module.css';

function CardList() {
  const { data, error, isLoading } = useGetCardsQuery(20);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.cardsContainer}>
      {data?.map((card: ICard) => <Card id={card.id} image={card.url} key={card.id} />)}
    </div>
  );
}

export default CardList;
