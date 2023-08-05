import {useState} from 'react'
import useBooksContext from '../hooks/use-books-context';


const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle('');
  }
  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className='button'>Add!</button>
      </form>
    </div>
  )
}

export default BookCreate