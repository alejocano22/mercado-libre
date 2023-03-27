import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './SearchBar.module.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/items?search=${searchTerm}`);
  };

  return (
    <div className={styles.search_container}>
      <div className={styles.search_inner_container}>
        <img
          src='/assets/mercado-libre-logo.png'
          alt='mercado libre logo'
          className={styles.logo}
          onClick={() => handleHome()}
        ></img>
        <form onSubmit={handleSearch} className={styles.search_form}>
          <input
            type='text'
            value={searchTerm}
            placeholder='Nunca dejes de buscar'
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.search_input}
          />
          <button type='submit' className={styles.search_button}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
