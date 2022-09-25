import './Stylesheets/App.scss';
import {Header} from './Components/Header';
import {MidPart} from './Components/MidPart';

export const App = () => {

  return (
    <div className="App">
      <div className='header-macro'>
      <Header></Header>
      </div>
      <div className='main-macro'>
       <MidPart></MidPart>
      </div>
    </div>
  );
}
