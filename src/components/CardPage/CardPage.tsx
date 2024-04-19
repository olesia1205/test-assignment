import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { fetchCardById } from '../../store/cardByIdSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Card from '../Card/Card';
import styles from './styles/styles.module.css';

function CardPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const url = useAppSelector((store) => store.card.data?.url);
  const breeds = useAppSelector((store) => store.card.data?.breeds);

  useEffect(() => {
    dispatch(fetchCardById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Hello, it's a personal page for Meow-Id: {id}</h1>
      <div className={styles.container}>
        {id && <Card id={id} url={url} liked={undefined} />}
        {breeds && (
          <div className={styles.descriptionWrapper}>
            {breeds.map((breed: { id: string; description: string; name: string }) => (
              <div key={breed.id}>
                <h2 className={styles.subtitle}>{breed.name}</h2>
                <p className={styles.description}>{breed.description}</p>
              </div>
            ))}
          </div>
        )}
        {!breeds && (
          <div className={styles.descriptionWrapper}>
            <p>
              К сожалению у этой карточки нет описания. Возможно больше повезет с другой
              карточкой!
            </p>
            <p>
              Чтобы открыть подходящую карточку, лучше выбирать такую, у которой длинное
              id. Например, такое как - 83CUYAi3g
            </p>
            <Link className={styles.link} to="/images/83CUYAi3g">
              <p>Ссылка на карточку с описанием</p>
            </Link>
          </div>
        )}
      </div>
      <button
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}
      >
        На главную
      </button>
    </div>
  );
}

export default CardPage;
