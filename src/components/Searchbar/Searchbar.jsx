import { Component } from "react";
import css from './Searchbar.module.css'
import { BsSearch } from 'react-icons/bs';

class Searchbar extends Component {

    state = {
        query: "",  
    }
    
    
     handleChange = (e) => {
    this.setState({ query: e.currentTarget.value.trim().toLowerCase() }); 
  };

  
  handleSubmit = (e) => {
    e.preventDefault();  
      this.props.onSubmit(this.state.query); 
      this.setState({ query: '' }); 
  };

    render() {
          return (
        <header className={css.Searchbar}>
        <form className={css.Form} onSubmit={this.handleSubmit}>
                      
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
            value={this.state.query} 
            onChange={this.handleChange}/>
            
        </form>
      </header>
    );
  }
}

export default Searchbar;
 