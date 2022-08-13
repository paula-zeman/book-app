import './Stylesheets/App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Filter from './Components/Filter';
import Genre from './Components/Genre';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <div className='header-macro'>
      <Header></Header>
      </div>
      <div className='sub-header-macro'>
        <Genre />
        <Genre />
        <Genre />
        <Genre />
        <Genre />
        <Filter />
      </div>
      <div className='form-macro'>
        <Form />
      </div>
      <div className="main-macro">
        <div className="card-macro">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
