import {useState} from 'react'
import useBooksContext from '../hooks/use-books-context';


const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title)
  }
  return (
    <div>
      <form className='book-edit' onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className='input' />
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  )
}

export default BookEdit