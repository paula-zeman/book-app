import './Stylesheets/App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Filter from './Components/Filter';
import Genre from './Components/Genre';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <div className='header-container'>
      <Header></Header>
      </div>
      <div className='sub-header'>
        <Genre />
        <Genre />
        <Genre />
        <Genre />
        <Genre />
        <Filter />
      </div>
      <div className='form-container'>
        <Form />
      </div>
      <div className="body-container">
        <div className="card-container">
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
