import { Route, Routes } from 'react-router';

import CardList from '../CardList/CardList';
import CardPage from '../CardPage/CardPage';
import FilterPanel from '../FilterPanel/FilterPanel';
import styles from './styles/styles.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FilterPanel />
              <CardList />
            </>
          }
        />
        <Route path="/images/:id" element={<CardPage />} />
      </Routes>
    </div>
  );
}

export default App;
