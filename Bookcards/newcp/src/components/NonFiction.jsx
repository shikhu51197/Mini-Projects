import BookCard from './BookCard'
import data from '../nonfiction.json' 

export default function NonFiction() {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
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
