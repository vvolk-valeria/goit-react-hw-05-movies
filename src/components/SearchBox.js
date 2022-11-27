import {useState } from 'react';

export const SearchBox = ({ onSubmit }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = e => {
     setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter a title to search for a movie.');
    //   toast.error('Enter term for search images and photos.');
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    // e.target.reset();
    };
    
    return (  
      <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                onChange={handleChange}
                value={searchQuery}
                            />
                            
                <button type="submit">
                <span>Search</span>
                </button>           
            </form>
        </div>
    )
};