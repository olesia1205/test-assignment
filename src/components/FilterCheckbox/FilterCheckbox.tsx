/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import { setFilter } from '../../store/filterSlice';
import { useAppDispatch } from '../../store/store';
import styles from './styles/styles.module.css';

function FilterCheckbox() {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      dispatch(setFilter('liked'));
    } else {
      dispatch(setFilter('all'));
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="filtercheckbox">
        <input
          type="checkbox"
          onChange={handleClick}
          checked={isChecked}
          className={styles.filtercheckbox}
          id="filtercheckbox"
        />
        <span className={styles.filtercheckbox__visible} />
      </label>
    </div>
  );
}

export default FilterCheckbox;
