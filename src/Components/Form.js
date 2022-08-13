import '../Stylesheets/Form.css'

function Form() {
  return (
      <form action="" className="form-micro">
        <div >
          <input className="form-micro__title" type="text" name="title" id="title" placeholder="Title" required/>
        </div>
        <div>
          <input className="form-micro__author" type="text" name="author" id="author" placeholder="Author" required/>
        </div>
        <div>
          <input className="form-micro__year" type="text" name="year" id="year" placeholder="Year" required/>
        </div>
        <div>
          <input className="form-micro__genre" type="text" name="genre" id="genre" placeholder="Genre" required/>
        </div>
        <div>
          <input className="form-micro__button" type="submit" value="+"/>
        </div>
      </form>
  );
}

export default Form;
