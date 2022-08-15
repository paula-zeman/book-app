import '../Stylesheets/Form.css'
import React, {useState} from 'react'

function Form(props) {

  const [formVisibility, setFormVisibility] = useState(false);

  return (
      <div class="form-with-button">
      <button onClick={() => setFormVisibility(!formVisibility)}>Add a new Book?</button>
      {formVisibility &&
        <form action="" className="form-micro">
            <input onChange={props.handleTitle} className="form-micro__title" type="text" name="title" id="title" placeholder="Title" required/>
            <input onChange={props.handleAuthor} className="form-micro__author" type="text" name="author" id="author" placeholder="Author" required/>
            <input onChange={props.handleYear} className="form-micro__year" type="text" name="year" id="year" placeholder="Year" required/>
            <input onChange={props.handleGenre} className="form-micro__genre" type="text" name="genre" id="genre" placeholder="Genre" required/>
            <input onClick={props.handleFormSubmit} className="form-micro__button" type="submit" value="+"/>
        </form>
      }
      </div>
  );
}

export default Form;
