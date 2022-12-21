
import data from '../fiction.json' 
import BookCard from './BookCard'


export default function Fiction() {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>Fictional Books</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}
        {data.map((el)=>
        <BookCard
          img ={el.img}
          title={el.title}
          author={el.author} 
          year={el.year}
          price={el.price} 
       />
       )}
     
      </div>
    </div>
  );
}


