import '../Stylesheets/Form.css'

function Form() {
  return (
    <div className='form-micro-container'>
      <form action="" className="new-book-form">
        <div >
          <input className="form-input-title" type="text" name="title" id="title" placeholder="Title" required/>
        </div>
        <div>
          <input className="form-input-author" type="text" name="author" id="author" placeholder="Author" required/>
        </div>
        <div>
          <input className="form-input-year" type="text" name="year" id="year" placeholder="Year" required/>
        </div>
        <div>
          <input className="form-input-genre" type="text" name="genre" id="genre" placeholder="Genre" required/>
        </div>
        <div>
          <input className="form-button" type="submit" value="+"/>
        </div>
      </form>
    </div>
  );
}

export default Form;
