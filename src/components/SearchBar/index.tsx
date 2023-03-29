import { useState } from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from "@components/icons";
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
    <div className={styles.searchContainer}>
      <div className={styles.searchInnerContainer}>
        <img
          src='/assets/mercado-libre-logo.png'
          alt='mercado libre logo'
          className={styles.logo}
          onClick={() => handleHome()}
        ></img>

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type='text'
            spellCheck='false'
            value={searchTerm}
            placeholder='Nunca dejes de buscar'
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button type='submit' className={styles.searchButton}>
            <MagnifyingGlassIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
