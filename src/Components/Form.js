import '../Stylesheets/Form.css'
import React, {useState} from 'react'

function Form() {

  const [formVisibility, setFormVisibility] = useState(false);

  const [bookList, setBookList] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newGenre, setNewGenre] = useState('');



  const handleFormSubmit = () => {
    setBookList(
      [{
        id: Math.random(),
        title: newTitle,
        author: newAuthor,
        year: newYear,
        genre: newGenre
      }, ...bookList]
    )

  }

  return (
      <div class="form-with-button">
      <button onClick={() => setFormVisibility(!formVisibility)}>Add a new Book?</button>
      {formVisibility &&
        <form action="" className="form-micro">
          <div >
            <input onChange={(event)=>setNewTitle(event.target.value)} className="form-micro__title" type="text" name="title" id="title" placeholder="Title" required/>
          </div>
          <div>
            <input onChange={(event)=>setNewAuthor(event.target.value)} className="form-micro__author" type="text" name="author" id="author" placeholder="Author" required/>
          </div>
          <div>
            <input onChange={(event)=>setNewYear(event.target.value)} className="form-micro__year" type="text" name="year" id="year" placeholder="Year" required/>
          </div>
          <div>
            <input onChange={(event)=>setNewGenre(event.target.value)} className="form-micro__genre" type="text" name="genre" id="genre" placeholder="Genre" required/>
          </div>
          <div>
            <input onClick={handleFormSubmit} className="form-micro__button" type="submit" value="+"/>
          </div>
        </form>
      }
      </div>
  );
}

export default Form;
