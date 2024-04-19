import CardList from '../CardList/CardList';
import FilterPanel from '../FilterPanel/FilterPanel';
import styles from './styles/styles.module.css';

function App() {
  return (
    <div className={styles.App}>
      <FilterPanel />
      <CardList />
    </div>
  );
}

export default App;
