import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import styles from './styles/styles.module.css';

function FilterPanel() {
  return (
    <div className={styles.container}>
      <FilterCheckbox />
      <p className={styles.text}>Show Your Favourites</p>
    </div>
  );
}

export default FilterPanel;
