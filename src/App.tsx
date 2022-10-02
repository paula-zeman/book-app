import './Stylesheets/App.scss';
import {Header} from './Components/Header';
import {MidPart} from './Components/MidPart';

export const App = () => {

  return (
    <div className="app">
      <Header></Header>
       <MidPart></MidPart>
    </div>
  );
}
