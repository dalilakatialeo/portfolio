import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import styles from './SearchBox.module.scss';

const SearchBox = ({ searchTerm, setSearchTerm, repos, setFilteredRepos }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // filter repositories based on language match
    const filtered = repos.filter((repo) =>
      repo.languages.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredRepos(filtered);
  };

  return (
    <TextField
      className={styles.searchBox}
      value={searchTerm}
      onChange={handleChange}
      placeholder="Filter projects by language..."
      // inline styles for search box borders - does not work with SCSS!
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px',

          '&:hover fieldset': {
            borderColor: '#000211', // border on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#000211',
            borderWidth: '3px', // border on focus
          },
        },
      }}
      // add search icon to the start of the sea box
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBox;
