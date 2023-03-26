import { useState } from 'react';
import { useRouter } from 'next/router';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/items?search=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
}

export default SearchBar;
