import { useState } from "react";
import css from './Searchbar.module.css'
import { BsSearch } from 'react-icons/bs';

const Searchbar = ({ onSubmit }) => {
  
const [query, setQuery] = useState('');
    
    
     const handleChange = (e) => {
    setQuery(e.currentTarget.value.trim().toLowerCase()); 
  };

  
 const handleSubmit = (e) => {
    e.preventDefault();  
      onSubmit(query); 
      setQuery(''); 
  };

      return (
        <header className={css.Searchbar}>
        <form className={css.Form} onSubmit={handleSubmit}>
                      
                      <button type="submit" className={css.Button}>
                           <BsSearch />
                          <span className={css.ButtonLabel}>Search</span>
        </button>
                      
        <input
            className={css.FormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="What images or photos do you whant find?"
            value={query} 
            onChange={handleChange}/>
            
        </form>
      </header>
    );
  }


export default Searchbar;
 