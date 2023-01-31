import React from "react";

class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      books: props.books,
    };
  }
  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { search, books } = this.state;
    return (
      <div>        
        <div>         
         <input   type="text" className="search"                     value={search}
            onChange={this.handleSearch}
            placeholder="Search" />        
        </div>        
        <div>          
      <input  type="text" className="author" 
        value={search}
            onChange={this.handleSearch}
            placeholder="Author" />        
        </div>        
        
        <div>         
          <input           
            type="text"            
            className="title"            
            value={search}
            onChange={this.handleSearch}
            placeholder="Title" />       
        </div>        
        <div>         
          <input            
            type="text"            
            className="country"            
            value={search}
            onChange={this.handleSearch}
            placeholder="Country" />        
        </div>        
        <div>         
          <input            
            type="text"            
            className="language"           
            value={search}
            onChange={this.handleSearch}
            placeholder="Language" />        
        </div>        
        <div>         
          <input   type="text"   
            className="year"           
            value={search}
            onChange={this.handleSearch}
            placeholder="Year" />       
        </div>        
        {books.filter( (book) => book.author.toLowerCase().includes(search.toLowerCase()) ||              
        book.title.toLowerCase().includes(search.toLowerCase()) ||              
        book.country.toLowerCase().includes(search.toLowerCase()) ||              
        book.language.toLowerCase().includes(search.toLowerCase()) ||             
         book.year.toString().toLowerCase().includes(search.toLowerCase())
          )
          .map((book, index) => (
            <div key={index} className="book">            
            <div>Author: {book.author}</div>              
            <div>Title: {book.title}</div>              
 <div>Pages: {book.pages}</div>              
 <div>Country: {book.country}</div>              
 <div>Language: {book.language}</div>              
 <div>Year: {book.year}</div>           
          </div>          ))}
      </div>    
    );
  }
}
export default BookSearch;