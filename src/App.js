import './Stylesheets/App.scss';
import Header from './Components/Header';
import Filter from './Components/Filter';
import Genre from './Components/Genre';
import MidPart from './Components/MidPart';

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
       <MidPart></MidPart>
      </div>
    </div>
  );
}

export default App;
